
#include "SDL/SDL.h"

#include "osint.h"
#include "e8910.h"
#include "vecx.h"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#ifdef EMSCRIPTEN
#include <emscripten.h>
#endif

#define EMU_TIMER 20 /* the emulators heart beats at 20 milliseconds */

static SDL_Surface *screen = NULL;
static SDL_Surface *overlay_original = NULL;
static SDL_Surface *overlay = NULL;

static long scl_factor;
static long offx;
static long offy;

void display_draw_point(int x, int y, Uint8 color) {

	int ofs = (y*screen->pitch/4)+x; 	
	int col = (int)color+0xFFFF00;
	((unsigned int*)screen->pixels)[ofs] = col;
}

void display_draw_line(int start_x,int start_y,int end_x,int end_y, Uint8 color) {
 
  // Bresenham's
  int cx = start_x;
  int cy = start_y;
 
  int dx = end_x - cx;
  int dy = end_y - cy;
  if(dx<0) dx = 0-dx;
  if(dy<0) dy = 0-dy;
 
  int sx=0; int sy=0;
  if(cx < end_x) sx = 1; else sx = -1;
  if(cy < end_y) sy = 1; else sy = -1;
  int err = dx-dy;
 
  for(int n=0;n<1000;n++) {
    display_draw_point(cx,cy,color);
    if((cx==end_x) && (cy==end_y)) return;
    int e2 = 2*err;
    if(e2 > (0-dy)) { err = err - dy; cx = cx + sx; }
    if(e2 < dx    ) { err = err + dx; cy = cy + sy; }
  }
}

void render()
{   
  // Ask SDL for the time in milliseconds
  int tick = SDL_GetTicks();

  // Declare a couple of variables
  int i, j, yofs, ofs;
  
  // Emscripten won't update canvas if we don't lock the surface
  SDL_LockSurface(screen);
  
}

void osint_render(void){

	SDL_FillRect(screen, NULL, SDL_MapRGB(screen->format, 0,0,0));

	render();

	int v;
	for(v = 0; v < vector_draw_cnt; v++){
		Uint8 c = vectors_draw[v].color * 256 / VECTREX_COLORS;

		display_draw_line(
				offx + vectors_draw[v].x0 / scl_factor,
				offy + vectors_draw[v].y0 / scl_factor,
				offx + vectors_draw[v].x1 / scl_factor,
				offy + vectors_draw[v].y1 / scl_factor,
				c);
	}
	if(overlay){
		SDL_Rect dest_rect = {offx, offy, 0, 0};
//		SDL_BlitSurface(overlay, NULL, screen, &dest_rect);
	}
  // Remember to unlock..
  SDL_UnlockSurface(screen);

  // Tell SDL to update the whole screen
  SDL_UpdateRect(screen, 0, 0, screen->w, screen->h);    
}

static char *romfilename = "data/rom.dat";
static char *cartfilename = NULL;

static void init(){
	FILE *f;
	if(!(f = fopen(romfilename, "rb"))){
		perror(romfilename);
		exit(EXIT_FAILURE);
	}
	if(fread(rom, 1, sizeof (rom), f) != sizeof (rom)){
		printf("Invalid rom length\n");
		exit(EXIT_FAILURE);
	}
	fclose(f);

	memset(cart, 0, sizeof (cart));
	if(cartfilename){
		FILE *f;
		if(!(f = fopen(cartfilename, "rb"))){
			perror(cartfilename);
			exit(EXIT_FAILURE);
		}
		fread(cart, 1, sizeof (cart), f);
		fclose(f);
	}
}

void resize(int width, int height){
	long sclx, scly;

	long screenx = width;
	long screeny = height;
	screen = SDL_SetVideoMode(screenx, screeny, 32, SDL_SWSURFACE);

	sclx = ALG_MAX_X / screen->w;
	scly = ALG_MAX_Y / screen->h;

	scl_factor = sclx > scly ? sclx : scly;

	offx = (screenx - ALG_MAX_X / scl_factor) / 2;
	offy = (screeny - ALG_MAX_Y / scl_factor) / 2;
/*
	if(overlay_original){
		if(overlay)
			SDL_FreeSurface(overlay);
		double overlay_scale = ((double)ALG_MAX_X / (double)scl_factor) / (double)overlay_original->w;
		overlay = zoomSurface(overlay_original, overlay_scale, overlay_scale, 0);
	}
*/
}


static void readevents(){
	SDL_Event e;
	while(SDL_PollEvent(&e)){
		switch(e.type){
			case SDL_QUIT:
				exit(EXIT_SUCCESS);
				break;
			case SDL_VIDEORESIZE:
				break;
			case SDL_KEYDOWN:
				switch(e.key.keysym.sym){
					case SDLK_ESCAPE:
						exit(EXIT_SUCCESS);
					case SDLK_a:
						snd_regs[14] &= ~0x01;
						break;
					case SDLK_s:
						snd_regs[14] &= ~0x02;
						break;
					case SDLK_d:
						snd_regs[14] &= ~0x04;
						break;
					case SDLK_f:
						snd_regs[14] &= ~0x08;
						break;
					case SDLK_LEFT:
						alg_jch0 = 0x00;
						break;
					case SDLK_RIGHT:
						alg_jch0 = 0xff;
						break;
					case SDLK_UP:
						alg_jch1 = 0xff;
						break;
					case SDLK_DOWN:
						alg_jch1 = 0x00;
						break;
					default:
						break;
				}
				break;
			case SDL_KEYUP:
				switch(e.key.keysym.sym){
					case SDLK_a:
						snd_regs[14] |= 0x01;
						break;
					case SDLK_s:
						snd_regs[14] |= 0x02;
						break;
					case SDLK_d:
						snd_regs[14] |= 0x04;
						break;
					case SDLK_f:
						snd_regs[14] |= 0x08;
						break;
					case SDLK_LEFT:
						alg_jch0 = 0x80;
						break;
					case SDLK_RIGHT:
						alg_jch0 = 0x80;
						break;
					case SDLK_UP:
						alg_jch1 = 0x80;
						break;
					case SDLK_DOWN:
						alg_jch1 = 0x80;
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}
}

Uint32 next_time = 0;

void mainloop() {
	vecx_emu((VECTREX_MHZ / 1000) * EMU_TIMER);
	readevents();

	{
		Uint32 now = SDL_GetTicks();
		if(now < next_time) {
			next_time += EMU_TIMER;
			return;
		}
		else {
			next_time = now;
			next_time += EMU_TIMER;
		}
	}
}

void osint_emuloop(){
	next_time = SDL_GetTicks() + EMU_TIMER;
	vecx_reset();


}

void load_overlay(const char *filename){
}

int main(int argc, char *argv[]){
	if(SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO) < 0){
		fprintf(stderr, "Failed to initialize SDL: %s\n", SDL_GetError());
		exit(-1);
	}

	resize(330*3/2, 410*3/2);

	if(argc > 1)
		cartfilename = argv[1];
	if(argc > 2)
		load_overlay(argv[2]);

	init();

	e8910_init_sound();
	osint_emuloop();
#ifdef EMSCRIPTEN
	emscripten_set_main_loop(mainloop, 60, 1);
#else
	for(;;)mainloop();
#endif
	e8910_done_sound();
	SDL_Quit();

	return 0;
}

