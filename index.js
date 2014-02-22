
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };
    function handleError(error) {
      console.error('package error:', error);
    };
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage('index.data', function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
  function runWithFS() {
function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'data', true, true);
    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 4096, 0, 0).open('GET', '/data/4drotcub.bin');
    new DataRequest(4096, 12288, 0, 0).open('GET', '/data/5mine-2d.bin');
    new DataRequest(12288, 20480, 0, 0).open('GET', '/data/6mine-2d.bin');
    new DataRequest(20480, 36864, 0, 0).open('GET', '/data/AGT.BIN');
    new DataRequest(36864, 45056, 0, 0).open('GET', '/data/ANIMACT.BIN');
    new DataRequest(45056, 49152, 0, 0).open('GET', '/data/ARMOR.BIN');
    new DataRequest(49152, 53248, 0, 0).open('GET', '/data/ART.BIN');
    new DataRequest(53248, 57344, 0, 0).open('GET', '/data/BEDLAM.BIN');
    new DataRequest(57344, 61440, 0, 0).open('GET', '/data/BERZERK.BIN');
    new DataRequest(61440, 69632, 0, 0).open('GET', '/data/BLITZ.BIN');
    new DataRequest(69632, 73728, 0, 0).open('GET', '/data/CASTLE.BIN');
    new DataRequest(73728, 77824, 0, 0).open('GET', '/data/CHASM.BIN');
    new DataRequest(77824, 81920, 0, 0).open('GET', '/data/Clsweep.bin');
    new DataRequest(81920, 90112, 0, 0).open('GET', '/data/CRAZY.BIN');
    new DataRequest(90112, 92047, 0, 0).open('GET', '/data/Demo.bin');
    new DataRequest(92047, 104335, 0, 0).open('GET', '/data/DKTOWER.BIN');
    new DataRequest(104335, 108431, 0, 0).open('GET', '/data/Dualvec1.bin');
    new DataRequest(108431, 112527, 0, 0).open('GET', '/data/Dualvec2.bin');
    new DataRequest(112527, 113039, 0, 0).open('GET', '/data/Etch.bin');
    new DataRequest(113039, 121231, 0, 0).open('GET', '/data/Fonarzod.bin');
    new DataRequest(121231, 137615, 0, 0).open('GET', '/data/FROGGER.BIN');
    new DataRequest(137615, 145807, 0, 0).open('GET', '/data/HEADSUP.BIN');
    new DataRequest(145807, 149903, 0, 0).open('GET', '/data/HYPER.BIN');
    new DataRequest(149903, 150159, 0, 0).open('GET', '/data/Loader.bin');
    new DataRequest(150159, 151375, 0, 0).open('GET', '/data/Lunar.bin');
    new DataRequest(151375, 159567, 0, 0).open('GET', '/data/MELODY.BIN');
    new DataRequest(159567, 163663, 0, 0).open('GET', '/data/Mine.bin');
    new DataRequest(163663, 171855, 0, 0).open('GET', '/data/MINE3.BIN');
    new DataRequest(171855, 172367, 0, 0).open('GET', '/data/Mole.bin');
    new DataRequest(172367, 181067, 0, 0).open('GET', '/data/Moon9.bin');
    new DataRequest(181067, 185163, 0, 0).open('GET', '/data/MSTORM2.BIN');
    new DataRequest(185163, 193355, 0, 0).open('GET', '/data/NARROW.BIN');
    new DataRequest(193355, 209716, 0, 0).open('GET', '/data/Omega16k.bin');
    new DataRequest(209716, 217885, 0, 0).open('GET', '/data/PATRIOT.BIN');
    new DataRequest(217885, 226077, 0, 0).open('GET', '/data/POLAR.BIN');
    new DataRequest(226077, 234269, 0, 0).open('GET', '/data/POLE.BIN');
    new DataRequest(234269, 237688, 0, 0).open('GET', '/data/Pop.bin');
    new DataRequest(237688, 239224, 0, 0).open('GET', '/data/Prelude.bin');
    new DataRequest(239224, 243320, 0, 0).open('GET', '/data/RIPOFF.BIN');
    new DataRequest(243320, 247416, 0, 0).open('GET', '/data/ROCKS.BIN');
    new DataRequest(247416, 255608, 0, 0).open('GET', '/data/rom.dat');
    new DataRequest(255608, 259704, 0, 0).open('GET', '/data/SCRAMBLE.BIN');
    new DataRequest(259704, 261714, 0, 0).open('GET', '/data/Ski04.bin');
    new DataRequest(261714, 265810, 0, 0).open('GET', '/data/SOLAR.BIN');
    new DataRequest(265810, 269906, 0, 0).open('GET', '/data/Spacewar.bin');
    new DataRequest(269906, 278098, 0, 0).open('GET', '/data/SPIKE.BIN');
    new DataRequest(278098, 294482, 0, 0).open('GET', '/data/SPIKESH.BIN');
    new DataRequest(294482, 302674, 0, 0).open('GET', '/data/SPINBALL.BIN');
    new DataRequest(302674, 310000, 0, 0).open('GET', '/data/Stardemo.bin');
    new DataRequest(310000, 314096, 0, 0).open('GET', '/data/STARHAWK.BIN');
    new DataRequest(314096, 318192, 0, 0).open('GET', '/data/STARTREK.BIN');
    new DataRequest(318192, 322288, 0, 0).open('GET', '/data/Test.bin');
    new DataRequest(322288, 330346, 0, 0).open('GET', '/data/VADERS.BIN');
    new DataRequest(330346, 331560, 0, 0).open('GET', '/data/VPONG.BIN');
    new DataRequest(331560, 339752, 0, 0).open('GET', '/data/WEBWARS.BIN');
    new DataRequest(339752, 363966, 0, 0).open('GET', '/data/Zzap.bin');
    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = 'index.data';
    var REMOTE_PACKAGE_NAME = 'index.data';
    var PACKAGE_UUID = 'a389ac9c-b1fa-4f6a-8e30-81e7ba8a15ec';
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/data/4drotcub.bin"].onload();
          DataRequest.prototype.requests["/data/5mine-2d.bin"].onload();
          DataRequest.prototype.requests["/data/6mine-2d.bin"].onload();
          DataRequest.prototype.requests["/data/AGT.BIN"].onload();
          DataRequest.prototype.requests["/data/ANIMACT.BIN"].onload();
          DataRequest.prototype.requests["/data/ARMOR.BIN"].onload();
          DataRequest.prototype.requests["/data/ART.BIN"].onload();
          DataRequest.prototype.requests["/data/BEDLAM.BIN"].onload();
          DataRequest.prototype.requests["/data/BERZERK.BIN"].onload();
          DataRequest.prototype.requests["/data/BLITZ.BIN"].onload();
          DataRequest.prototype.requests["/data/CASTLE.BIN"].onload();
          DataRequest.prototype.requests["/data/CHASM.BIN"].onload();
          DataRequest.prototype.requests["/data/Clsweep.bin"].onload();
          DataRequest.prototype.requests["/data/CRAZY.BIN"].onload();
          DataRequest.prototype.requests["/data/Demo.bin"].onload();
          DataRequest.prototype.requests["/data/DKTOWER.BIN"].onload();
          DataRequest.prototype.requests["/data/Dualvec1.bin"].onload();
          DataRequest.prototype.requests["/data/Dualvec2.bin"].onload();
          DataRequest.prototype.requests["/data/Etch.bin"].onload();
          DataRequest.prototype.requests["/data/Fonarzod.bin"].onload();
          DataRequest.prototype.requests["/data/FROGGER.BIN"].onload();
          DataRequest.prototype.requests["/data/HEADSUP.BIN"].onload();
          DataRequest.prototype.requests["/data/HYPER.BIN"].onload();
          DataRequest.prototype.requests["/data/Loader.bin"].onload();
          DataRequest.prototype.requests["/data/Lunar.bin"].onload();
          DataRequest.prototype.requests["/data/MELODY.BIN"].onload();
          DataRequest.prototype.requests["/data/Mine.bin"].onload();
          DataRequest.prototype.requests["/data/MINE3.BIN"].onload();
          DataRequest.prototype.requests["/data/Mole.bin"].onload();
          DataRequest.prototype.requests["/data/Moon9.bin"].onload();
          DataRequest.prototype.requests["/data/MSTORM2.BIN"].onload();
          DataRequest.prototype.requests["/data/NARROW.BIN"].onload();
          DataRequest.prototype.requests["/data/Omega16k.bin"].onload();
          DataRequest.prototype.requests["/data/PATRIOT.BIN"].onload();
          DataRequest.prototype.requests["/data/POLAR.BIN"].onload();
          DataRequest.prototype.requests["/data/POLE.BIN"].onload();
          DataRequest.prototype.requests["/data/Pop.bin"].onload();
          DataRequest.prototype.requests["/data/Prelude.bin"].onload();
          DataRequest.prototype.requests["/data/RIPOFF.BIN"].onload();
          DataRequest.prototype.requests["/data/ROCKS.BIN"].onload();
          DataRequest.prototype.requests["/data/rom.dat"].onload();
          DataRequest.prototype.requests["/data/SCRAMBLE.BIN"].onload();
          DataRequest.prototype.requests["/data/Ski04.bin"].onload();
          DataRequest.prototype.requests["/data/SOLAR.BIN"].onload();
          DataRequest.prototype.requests["/data/Spacewar.bin"].onload();
          DataRequest.prototype.requests["/data/SPIKE.BIN"].onload();
          DataRequest.prototype.requests["/data/SPIKESH.BIN"].onload();
          DataRequest.prototype.requests["/data/SPINBALL.BIN"].onload();
          DataRequest.prototype.requests["/data/Stardemo.bin"].onload();
          DataRequest.prototype.requests["/data/STARHAWK.BIN"].onload();
          DataRequest.prototype.requests["/data/STARTREK.BIN"].onload();
          DataRequest.prototype.requests["/data/Test.bin"].onload();
          DataRequest.prototype.requests["/data/VADERS.BIN"].onload();
          DataRequest.prototype.requests["/data/VPONG.BIN"].onload();
          DataRequest.prototype.requests["/data/WEBWARS.BIN"].onload();
          DataRequest.prototype.requests["/data/Zzap.bin"].onload();
          Module['removeRunDependency']('datafile_index.data');
    };
    Module['addRunDependency']('datafile_index.data');
    if (!Module.preloadResults) Module.preloadResults = {};
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }
})();
Module['arguments'] = ['data/WEBWARS.BIN'];
// Note: Some Emscripten settings will significantly limit the speed of the generated code.
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };
  var nodeFS = require('fs');
  var nodePath = require('path');
  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };
  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };
  Module['load'] = function load(f) {
    globalEval(read(f));
  };
  Module['arguments'] = process['argv'].slice(2);
  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm
  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }
  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };
  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  this['Module'] = Module;
  eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };
  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  if (typeof console !== 'undefined') {
    Module['print'] = function print(x) {
      console.log(x);
    };
    Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }
  if (ENVIRONMENT_IS_WEB) {
    this['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}
function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***
// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];
// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];
// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// === Auto-generated preamble library stuff ===
//========================================
// Runtime code shared with compiler
//========================================
var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?{ ?[^}]* ?}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (vararg) return 8;
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_ && type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      return FUNCTION_TABLE[ptr].apply(null, args);
    } else {
      assert(sig.length == 1);
      return FUNCTION_TABLE[ptr]();
    }
  },
  addFunction: function (func) {
    var table = FUNCTION_TABLE;
    var ret = table.length;
    assert(ret % 2 === 0);
    table.push(func);
    for (var i = 0; i < 2-1; i++) table.push(0);
    return ret;
  },
  removeFunction: function (index) {
    var table = FUNCTION_TABLE;
    table[index] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + Pointer_stringify(code) + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;
      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }
      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }
      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8);(assert((STACKTOP|0) < (STACK_MAX|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + (assert(DYNAMICTOP > 0),size))|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((low>>>0)+((high>>>0)*4294967296)) : ((low>>>0)+((high|0)*4294967296))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}
//========================================
// Runtime essentials
//========================================
var __THREW__ = 0; // Used in checking for thrown exceptions.
var setjmpId = 1; // Used in setjmp/longjmp
var setjmpLabels = {};
var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;
var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}
var globalScope = this;
// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;
// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}
// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}
// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;
// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,Math_abs(tempDouble) >= 1 ? (tempDouble > 0 ? Math_min(Math_floor((tempDouble)/4294967296), 4294967295)>>>0 : (~~(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296)))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;
// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;
var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;
// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === 'string' ? types : null;
  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }
  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }
  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }
  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];
    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');
    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later
    setValue(ret+i, curr, type);
    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }
  return ret;
}
Module['allocate'] = allocate;
function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;
  var ret = '';
  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    assert(ptr + i < TOTAL_MEMORY);
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;
// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[(((outPtr)+(i*2))>>1)]=codeUnit;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[(((outPtr)+(str.length*2))>>1)]=0;
}
Module['stringToUTF16'] = stringToUTF16;
// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[(((outPtr)+(iChar*4))>>2)]=codeUnit;
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[(((outPtr)+(iChar*4))>>2)]=0;
}
Module['stringToUTF32'] = stringToUTF32;
function demangle(func) {
  try {
    // Special-case the entry point, since its name differs from other name mangling.
    if (func == 'Object._main' || func == '_main') {
      return 'main()';
    }
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    var i = 3;
    // params, etc.
    var basicTypes = {
      'v': 'void',
      'b': 'bool',
      'c': 'char',
      's': 'short',
      'i': 'int',
      'l': 'long',
      'f': 'float',
      'd': 'double',
      'w': 'wchar_t',
      'a': 'signed char',
      'h': 'unsigned char',
      't': 'unsigned short',
      'j': 'unsigned int',
      'm': 'unsigned long',
      'x': 'long long',
      'y': 'unsigned long long',
      'z': '...'
    };
    function dump(x) {
      //return;
      if (x) Module.print(x);
      Module.print(func);
      var pre = '';
      for (var a = 0; a < i; a++) pre += ' ';
      Module.print (pre + '^');
    }
    var subs = [];
    function parseNested() {
      i++;
      if (func[i] === 'K') i++; // ignore const
      var parts = [];
      while (func[i] !== 'E') {
        if (func[i] === 'S') { // substitution
          i++;
          var next = func.indexOf('_', i);
          var num = func.substring(i, next) || 0;
          parts.push(subs[num] || '?');
          i = next+1;
          continue;
        }
        if (func[i] === 'C') { // constructor
          parts.push(parts[parts.length-1]);
          i += 2;
          continue;
        }
        var size = parseInt(func.substr(i));
        var pre = size.toString().length;
        if (!size || !pre) { i--; break; } // counter i++ below us
        var curr = func.substr(i + pre, size);
        parts.push(curr);
        subs.push(curr);
        i += pre + size;
      }
      i++; // skip E
      return parts;
    }
    var first = true;
    function parse(rawList, limit, allowVoid) { // main parser
      limit = limit || Infinity;
      var ret = '', list = [];
      function flushList() {
        return '(' + list.join(', ') + ')';
      }
      var name;
      if (func[i] === 'N') {
        // namespaced N-E
        name = parseNested().join('::');
        limit--;
        if (limit === 0) return rawList ? [name] : name;
      } else {
        // not namespaced
        if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
        var size = parseInt(func.substr(i));
        if (size) {
          var pre = size.toString().length;
          name = func.substr(i + pre, size);
          i += pre + size;
        }
      }
      first = false;
      if (func[i] === 'I') {
        i++;
        var iList = parse(true);
        var iRet = parse(true, 1, true);
        ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
      } else {
        ret = name;
      }
      paramLoop: while (i < func.length && limit-- > 0) {
        //dump('paramLoop');
        var c = func[i++];
        if (c in basicTypes) {
          list.push(basicTypes[c]);
        } else {
          switch (c) {
            case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
            case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
            case 'L': { // literal
              i++; // skip basic type
              var end = func.indexOf('E', i);
              var size = end - i;
              list.push(func.substr(i, size));
              i += size + 2; // size + 'EE'
              break;
            }
            case 'A': { // array
              var size = parseInt(func.substr(i));
              i += size.toString().length;
              if (func[i] !== '_') throw '?';
              i++; // skip _
              list.push(parse(true, 1, true)[0] + ' [' + size + ']');
              break;
            }
            case 'E': break paramLoop;
            default: ret += '?' + c; break paramLoop;
          }
        }
      }
      if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
      return rawList ? list : ret + flushList();
    }
    return parse();
  } catch(e) {
    return func;
  }
}
function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}
function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}
// Memory management
var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}
var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk
function enlargeMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}
var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;
// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'Cannot fallback to non-typed array case: Code is too specialized');
var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);
// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');
Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited
var runtimeInitialized = false;
function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}
function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;
function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;
function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;
// Tools
// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;
function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;
// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr;
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;
function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;
function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}
if (!Math['imul']) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];
var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};
function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;
Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data
var memoryInitializer = null;
// === Body ===
STATIC_BASE = 8;
STATICTOP = STATIC_BASE + 2305736;
var _stderr;
var _stderr=_stderr=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } },{ func: function() { __GLOBAL__I_a() } });
/* memory initializer */ allocate([200,166,34,0,192,166,34,0,208,166,34,0,216,166,34,0,80,0,0,0,0,0,0,0,73,77,71,95,76,111,97,100,58,32,37,115,10,0,0,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,97,117,100,105,111,58,32,37,115,10,0,0,0,0,0,0,0,0,100,97,116,97,47,114,111,109,46,100,97,116,0,0,0,0,117,110,100,101,102,105,110,101,100,32,112,111,115,116,45,98,121,116,101,10,0,0,0,0,73,110,118,97,108,105,100,32,114,111,109,32,108,101,110,103,116,104,10,0,0,0,0,0,117,110,107,110,111,119,110,32,112,97,103,101,45,48,32,111,112,32,99,111,100,101,58,32,37,46,50,120,10,0,0,0,114,98,0,0,0,0,0,0,117,110,107,110,111,119,110,32,112,97,103,101,45,50,32,111,112,32,99,111,100,101,58,32,37,46,50,120,10,0,0,0,70,97,105,108,101,100,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,83,68,76,58,32,37,115,10,0,0,0,117,110,107,110,111,119,110,32,112,97,103,101,45,49,32,111,112,32,99,111,100,101,58,32,37,46,50,120,10,0,0,0,105,108,108,101,103,97,108,32,101,120,103,116,102,114,32,114,101,103,32,37,46,49,120,10,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE)
function runPostSets() {
}
var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);
assert(tempDoublePtr % 8 == 0);
function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}
function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      HEAP32[((___errno_state)>>2)]=value
      return value;
    }
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 0777, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0777 | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            assert(buffer.length);
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },reconcile:function (src, dst, callback) {
        var total = 0;
        var create = {};
        for (var key in src.files) {
          if (!src.files.hasOwnProperty(key)) continue;
          var e = src.files[key];
          var e2 = dst.files[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create[key] = e;
            total++;
          }
        }
        var remove = {};
        for (var key in dst.files) {
          if (!dst.files.hasOwnProperty(key)) continue;
          var e = dst.files[key];
          var e2 = src.files[key];
          if (!e2) {
            remove[key] = e;
            total++;
          }
        }
        if (!total) {
          // early out
          return callback(null);
        }
        var completed = 0;
        function done(err) {
          if (err) return callback(err);
          if (++completed >= total) {
            return callback(null);
          }
        };
        // create a single transaction to handle and IDB reads / writes we'll need to do
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        transaction.onerror = function transaction_onerror() { callback(this.error); };
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        for (var path in create) {
          if (!create.hasOwnProperty(path)) continue;
          var entry = create[path];
          if (dst.type === 'local') {
            // save file to local
            try {
              if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode);
              } else if (FS.isFile(entry.mode)) {
                var stream = FS.open(path, 'w+', 0666);
                FS.write(stream, entry.contents, 0, entry.contents.length, 0, true /* canOwn */);
                FS.close(stream);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // save file to IDB
            var req = store.put(entry, path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
        for (var path in remove) {
          if (!remove.hasOwnProperty(path)) continue;
          var entry = remove[path];
          if (dst.type === 'local') {
            // delete file from local
            try {
              if (FS.isDir(entry.mode)) {
                // TODO recursive delete?
                FS.rmdir(path);
              } else if (FS.isFile(entry.mode)) {
                FS.unlink(path);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // delete file from IDB
            var req = store.delete(path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
      },getLocalSet:function (mount, callback) {
        var files = {};
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
        var check = FS.readdir(mount.mountpoint)
          .filter(isRealDir)
          .map(toAbsolute(mount.mountpoint));
        while (check.length) {
          var path = check.pop();
          var stat, node;
          try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path)
              .filter(isRealDir)
              .map(toAbsolute(path)));
            files[path] = { mode: stat.mode, timestamp: stat.mtime };
          } else if (FS.isFile(stat.mode)) {
            files[path] = { contents: node.contents, mode: stat.mode, timestamp: stat.mtime };
          } else {
            return callback(new Error('node type not supported'));
          }
        }
        return callback(null, { type: 'local', files: files });
      },getDB:function (name, callback) {
        // look it up in the cache
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        req.onupgradeneeded = function req_onupgradeneeded() {
          db = req.result;
          db.createObjectStore(IDBFS.DB_STORE_NAME);
        };
        req.onsuccess = function req_onsuccess() {
          db = req.result;
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function req_onerror() {
          callback(this.error);
        };
      },getRemoteSet:function (mount, callback) {
        var files = {};
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function transaction_onerror() { callback(this.error); };
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          store.openCursor().onsuccess = function store_openCursor_onsuccess(event) {
            var cursor = event.target.result;
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, files: files });
            }
            files[cursor.key] = cursor.value;
            cursor.continue();
          };
        });
      }};
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.position = position;
          return position;
        }}};
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[null],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || { recurse_count: 0 };
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
        // start at the root
        var current = FS.root;
        var current_path = '/';
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            current = current.mount.root;
          }
          // follow symlinks
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
            this.parent = null;
            this.mount = null;
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            FS.hashAddNode(this);
          };
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
          FS.FSNode.prototype = {};
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
        return new FS.FSNode(parent, name, mode, rdev);
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 1;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
        var completed = 0;
        var total = FS.mounts.length;
        function done(err) {
          if (err) {
            return callback(err);
          }
          if (++completed >= total) {
            callback(null);
          }
        };
        // sync all mounts
        for (var i = 0; i < FS.mounts.length; i++) {
          var mount = FS.mounts[i];
          if (!mount.type.syncfs) {
            done(null);
            continue;
          }
          mount.type.syncfs(mount, populate, done);
        }
      },mount:function (type, opts, mountpoint) {
        var lookup;
        if (mountpoint) {
          lookup = FS.lookupPath(mountpoint, { follow: false });
          mountpoint = lookup.path;  // use the absolute path
        }
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          root: null
        };
        // create a root node for the fs
        var root = type.mount(mount);
        root.mount = mount;
        mount.root = root;
        // assign the mount info to the mountpoint's node
        if (lookup) {
          lookup.node.mount = mount;
          lookup.node.mounted = true;
          // compatibility update FS.root if we mount to /
          if (mountpoint === '/') {
            FS.root = mount.root;
          }
        }
        // add to our cached list of mounts
        FS.mounts.push(mount);
        return root;
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 0666;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 0777;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 0666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path, { follow: false });
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 0666 : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0);
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin)>>2)]=stdin.fd;
        assert(stdin.fd === 1, 'invalid handle for stdin (' + stdin.fd + ')');
        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout)>>2)]=stdout.fd;
        assert(stdout.fd === 2, 'invalid handle for stdout (' + stdout.fd + ')');
        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr)>>2)]=stderr.fd;
        assert(stderr.fd === 3, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
          this.stack = stackTrace();
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.root = FS.createNode(null, '/', 16384 | 0777, 0);
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
        FS.ensureErrnoError();
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = Math.floor(idx / this.chunkSize);
            return this.getter(chunkNum)[chunkOffset];
          }
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          }
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
              // Find length
              var xhr = new XMLHttpRequest();
              xhr.open('HEAD', url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var chunkSize = 1024*1024; // Chunk size in bytes
              if (!hasByteServing) chunkSize = datalength;
              // Function to get a range from the remote URL.
              var doXHR = (function(from, to) {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
                // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                // Some hints to the browser that we want binary data.
                if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                  return new Uint8Array(xhr.response || []);
                } else {
                  return intArrayFromString(xhr.responseText || '', true);
                }
              });
              var lazyArray = this;
              lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum+1) * chunkSize - 1; // including this byte
                end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                  lazyArray.chunks[chunkNum] = doXHR(start, end);
                }
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum];
              });
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
          }
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  var _mkport=undefined;var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 0777, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              var url = 'ws://' + addr + ':' + port;
              // the node ws library API is slightly different than the browser's
              var opts = ENVIRONMENT_IS_NODE ? {headers: {'websocket-protocol': ['binary']}} : ['binary'];
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }}};function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var bytesWritten = _write(stream, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  function _strlen(ptr) {
      ptr = ptr|0;
      var curr = 0;
      curr = ptr;
      while (HEAP8[(curr)]) {
        curr = (curr + 1)|0;
      }
      return (curr - ptr)|0;
    }
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = HEAPF64[(((varargs)+(argIndex))>>3)];
        } else if (type == 'i64') {
          ret = [HEAP32[(((varargs)+(argIndex))>>2)],
                 HEAP32[(((varargs)+(argIndex+8))>>2)]];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = HEAP32[(((varargs)+(argIndex))>>2)];
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
          // Handle precision.
          var precisionSet = false;
          if (next == 46) {
            var precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          } else {
            var precision = 6; // Standard default.
          }
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              HEAP32[((ptr)>>2)]=ret.length
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP32[((_stdout)>>2)];
      return _fprintf(stdout, format, varargs);
    }
  var Browser={mainLoop:{scheduler:null,shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            assert(typeof url == 'string', 'createObjectURL must return a url as a string');
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
        // Canvas event setup
        var canvas = Module['canvas'];
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'];
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas;
        }
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
            var errorInfo = '?';
            function onContextCreationError(event) {
              errorInfo = event.statusMessage || errorInfo;
            }
            canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
            try {
              ['experimental-webgl', 'webgl'].some(function(webglId) {
                return ctx = canvas.getContext(webglId, contextAttributes);
              });
            } finally {
              canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
            }
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas: ' + [errorInfo, e]);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement']) === canvas) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'];
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else if (Browser.resizeCanvas){
            Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
        }
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        }
        canvas.requestFullScreen = canvas['requestFullScreen'] ||
                                   canvas['mozRequestFullScreen'] ||
                                   (canvas['webkitRequestFullScreen'] ? function() { canvas['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvas.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (window.scrollX + rect.left);
              y = t.pageY - (window.scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (window.scrollX + rect.left);
            y = event.pageY - (window.scrollY + rect.top);
          }
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        canvas.width = width;
        canvas.height = height;
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        var canvas = Module['canvas'];
        this.windowedWidth = canvas.width;
        this.windowedHeight = canvas.height;
        canvas.width = screen.width;
        canvas.height = screen.height;
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        var canvas = Module['canvas'];
        canvas.width = this.windowedWidth;
        canvas.height = this.windowedHeight;
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      }};var SDL={defaults:{width:320,height:200,copyOnLock:true},version:null,surfaces:{},canvasPool:[],events:[],fonts:[null],audios:[null],rwops:[null],music:{audio:null,volume:1},mixerFrequency:22050,mixerFormat:32784,mixerNumChannels:2,mixerChunkSize:1024,channelMinimumNumber:0,GL:false,glAttributes:{0:3,1:3,2:2,3:0,4:0,5:1,6:16,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,16:0,17:0,18:0},keyboardState:null,keyboardMap:{},canRequestFullscreen:false,isRequestingFullscreen:false,textInput:false,startTime:null,initFlags:0,buttonState:0,modState:0,DOMButtons:[0,0,0],DOMEventToSDLEvent:{},keyCodes:{16:1249,17:1248,18:1250,33:1099,34:1102,37:1104,38:1106,39:1103,40:1105,46:127,96:1112,97:1113,98:1114,99:1115,100:1116,101:1117,102:1118,103:1119,104:1120,105:1121,112:1082,113:1083,114:1084,115:1085,116:1086,117:1087,118:1088,119:1089,120:1090,121:1091,122:1092,123:1093,173:45,188:44,190:46,191:47,192:96},scanCodes:{8:42,9:43,13:40,27:41,32:44,44:54,46:55,47:56,48:39,49:30,50:31,51:32,52:33,53:34,54:35,55:36,56:37,57:38,59:51,61:46,91:47,92:49,93:48,96:52,97:4,98:5,99:6,100:7,101:8,102:9,103:10,104:11,105:12,106:13,107:14,108:15,109:16,110:17,111:18,112:19,113:20,114:21,115:22,116:23,117:24,118:25,119:26,120:27,121:28,122:29,305:224,308:226},loadRect:function (rect) {
        return {
          x: HEAP32[((rect + 0)>>2)],
          y: HEAP32[((rect + 4)>>2)],
          w: HEAP32[((rect + 8)>>2)],
          h: HEAP32[((rect + 12)>>2)]
        };
      },loadColorToCSSRGB:function (color) {
        var rgba = HEAP32[((color)>>2)];
        return 'rgb(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ')';
      },loadColorToCSSRGBA:function (color) {
        var rgba = HEAP32[((color)>>2)];
        return 'rgba(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ',' + (((rgba >> 24)&255)/255) + ')';
      },translateColorToCSSRGBA:function (rgba) {
        return 'rgba(' + (rgba&0xff) + ',' + (rgba>>8 & 0xff) + ',' + (rgba>>16 & 0xff) + ',' + (rgba>>>24)/0xff + ')';
      },translateRGBAToCSSRGBA:function (r, g, b, a) {
        return 'rgba(' + (r&0xff) + ',' + (g&0xff) + ',' + (b&0xff) + ',' + (a&0xff)/255 + ')';
      },translateRGBAToColor:function (r, g, b, a) {
        return r | g << 8 | b << 16 | a << 24;
      },makeSurface:function (width, height, flags, usePageCanvas, source, rmask, gmask, bmask, amask) {
        flags = flags || 0;
        var surf = _malloc(60);  // SDL_Surface has 15 fields of quantum size
        var buffer = _malloc(width*height*4); // TODO: only allocate when locked the first time
        var pixelFormat = _malloc(44);
        flags |= 1; // SDL_HWSURFACE - this tells SDL_MUSTLOCK that this needs to be locked
        //surface with SDL_HWPALETTE flag is 8bpp surface (1 byte)
        var is_SDL_HWPALETTE = flags & 0x00200000;  
        var bpp = is_SDL_HWPALETTE ? 1 : 4;
        HEAP32[((surf)>>2)]=flags         // SDL_Surface.flags
        HEAP32[(((surf)+(4))>>2)]=pixelFormat // SDL_Surface.format TODO
        HEAP32[(((surf)+(8))>>2)]=width         // SDL_Surface.w
        HEAP32[(((surf)+(12))>>2)]=height        // SDL_Surface.h
        HEAP32[(((surf)+(16))>>2)]=width * bpp       // SDL_Surface.pitch, assuming RGBA or indexed for now,
                                                                                 // since that is what ImageData gives us in browsers
        HEAP32[(((surf)+(20))>>2)]=buffer      // SDL_Surface.pixels
        HEAP32[(((surf)+(36))>>2)]=0      // SDL_Surface.offset
        HEAP32[(((surf)+(56))>>2)]=1
        HEAP32[((pixelFormat)>>2)]=0 /* XXX missing C define SDL_PIXELFORMAT_RGBA8888 */ // SDL_PIXELFORMAT_RGBA8888
        HEAP32[(((pixelFormat)+(4))>>2)]=0 // TODO
        HEAP8[(((pixelFormat)+(8))|0)]=bpp * 8
        HEAP8[(((pixelFormat)+(9))|0)]=bpp
        HEAP32[(((pixelFormat)+(12))>>2)]=rmask || 0x000000ff
        HEAP32[(((pixelFormat)+(16))>>2)]=gmask || 0x0000ff00
        HEAP32[(((pixelFormat)+(20))>>2)]=bmask || 0x00ff0000
        HEAP32[(((pixelFormat)+(24))>>2)]=amask || 0xff000000
        // Decide if we want to use WebGL or not
        var useWebGL = (flags & 0x04000000) != 0; // SDL_OPENGL
        SDL.GL = SDL.GL || useWebGL;
        var canvas;
        if (!usePageCanvas) {
          if (SDL.canvasPool.length > 0) {
            canvas = SDL.canvasPool.pop();
          } else {
            canvas = document.createElement('canvas');
          }
          canvas.width = width;
          canvas.height = height;
        } else {
          canvas = Module['canvas'];
        }
        var webGLContextAttributes = {
          antialias: ((SDL.glAttributes[13 /*SDL_GL_MULTISAMPLEBUFFERS*/] != 0) && (SDL.glAttributes[14 /*SDL_GL_MULTISAMPLESAMPLES*/] > 1)),
          depth: (SDL.glAttributes[6 /*SDL_GL_DEPTH_SIZE*/] > 0),
          stencil: (SDL.glAttributes[7 /*SDL_GL_STENCIL_SIZE*/] > 0)
        };
        var ctx = Browser.createContext(canvas, useWebGL, usePageCanvas, webGLContextAttributes);
        SDL.surfaces[surf] = {
          width: width,
          height: height,
          canvas: canvas,
          ctx: ctx,
          surf: surf,
          buffer: buffer,
          pixelFormat: pixelFormat,
          alpha: 255,
          flags: flags,
          locked: 0,
          usePageCanvas: usePageCanvas,
          source: source,
          isFlagSet: function(flag) {
            return flags & flag;
          }
        };
        return surf;
      },copyIndexedColorData:function (surfData, rX, rY, rW, rH) {
        // HWPALETTE works with palette
        // setted by SDL_SetColors
        if (!surfData.colors) {
          return;
        }
        var fullWidth  = Module['canvas'].width;
        var fullHeight = Module['canvas'].height;
        var startX  = rX || 0;
        var startY  = rY || 0;
        var endX    = (rW || (fullWidth - startX)) + startX;
        var endY    = (rH || (fullHeight - startY)) + startY;
        var buffer  = surfData.buffer;
        var data    = surfData.image.data;
        var colors  = surfData.colors;
        for (var y = startY; y < endY; ++y) {
          var indexBase = y * fullWidth;
          var colorBase = indexBase * 4;
          for (var x = startX; x < endX; ++x) {
            // HWPALETTE have only 256 colors (not rgba)
            var index = HEAPU8[((buffer + indexBase + x)|0)] * 3;
            var colorOffset = colorBase + x * 4;
            data[colorOffset   ] = colors[index   ];
            data[colorOffset +1] = colors[index +1];
            data[colorOffset +2] = colors[index +2];
            //unused: data[colorOffset +3] = color[index +3];
          }
        }
      },freeSurface:function (surf) {
        var refcountPointer = surf + 56;
        var refcount = HEAP32[((refcountPointer)>>2)];
        if (refcount > 1) {
          HEAP32[((refcountPointer)>>2)]=refcount - 1;
          return;
        }
        var info = SDL.surfaces[surf];
        if (!info.usePageCanvas && info.canvas) SDL.canvasPool.push(info.canvas);
        _free(info.buffer);
        _free(info.pixelFormat);
        _free(surf);
        SDL.surfaces[surf] = null;
      },touchX:0,touchY:0,savedKeydown:null,receiveEvent:function (event) {
        switch(event.type) {
          case 'touchstart':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            var event = {
              type: 'mousedown',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.DOMButtons[0] = 1;
            SDL.events.push(event);
            break;
          case 'touchmove':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            event = {
              type: 'mousemove',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.events.push(event);
            break;
          case 'touchend':
            event.preventDefault();
            event = {
              type: 'mouseup',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.DOMButtons[0] = 0;
            SDL.events.push(event);
            break;
          case 'mousemove':
            if (Browser.pointerLock) {
              // workaround for firefox bug 750111
              if ('mozMovementX' in event) {
                event['movementX'] = event['mozMovementX'];
                event['movementY'] = event['mozMovementY'];
              }
              // workaround for Firefox bug 782777
              if (event['movementX'] == 0 && event['movementY'] == 0) {
                // ignore a mousemove event if it doesn't contain any movement info
                // (without pointer lock, we infer movement from pageX/pageY, so this check is unnecessary)
                event.preventDefault();
                return;
              }
            }
            // fall through
          case 'keydown': case 'keyup': case 'keypress': case 'mousedown': case 'mouseup': case 'DOMMouseScroll': case 'mousewheel':
            // If we preventDefault on keydown events, the subsequent keypress events
            // won't fire. However, it's fine (and in some cases necessary) to
            // preventDefault for keys that don't generate a character. Otherwise,
            // preventDefault is the right thing to do in general.
            if (event.type !== 'keydown' || (event.keyCode === 8 /* backspace */ || event.keyCode === 9 /* tab */)) {
              event.preventDefault();
            }
            if (event.type == 'DOMMouseScroll' || event.type == 'mousewheel') {
              var button = (event.type == 'DOMMouseScroll' ? event.detail : -event.wheelDelta) > 0 ? 4 : 3;
              var event2 = {
                type: 'mousedown',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
              SDL.events.push(event2);
              event = {
                type: 'mouseup',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
            } else if (event.type == 'mousedown') {
              SDL.DOMButtons[event.button] = 1;
            } else if (event.type == 'mouseup') {
              // ignore extra ups, can happen if we leave the canvas while pressing down, then return,
              // since we add a mouseup in that case
              if (!SDL.DOMButtons[event.button]) {
                return;
              }
              SDL.DOMButtons[event.button] = 0;
            }
            // We can only request fullscreen as the result of user input.
            // Due to this limitation, we toggle a boolean on keydown which
            // SDL_WM_ToggleFullScreen will check and subsequently set another
            // flag indicating for us to request fullscreen on the following
            // keyup. This isn't perfect, but it enables SDL_WM_ToggleFullScreen
            // to work as the result of a keypress (which is an extremely
            // common use case).
            if (event.type === 'keydown') {
              SDL.canRequestFullscreen = true;
            } else if (event.type === 'keyup') {
              if (SDL.isRequestingFullscreen) {
                Module['requestFullScreen'](true, true);
                SDL.isRequestingFullscreen = false;
              }
              SDL.canRequestFullscreen = false;
            }
            // SDL expects a unicode character to be passed to its keydown events.
            // Unfortunately, the browser APIs only provide a charCode property on
            // keypress events, so we must backfill in keydown events with their
            // subsequent keypress event's charCode.
            if (event.type === 'keypress' && SDL.savedKeydown) {
              // charCode is read-only
              SDL.savedKeydown.keypressCharCode = event.charCode;
              SDL.savedKeydown = null;
            } else if (event.type === 'keydown') {
              SDL.savedKeydown = event;
            }
            // Don't push keypress events unless SDL_StartTextInput has been called.
            if (event.type !== 'keypress' || SDL.textInput) {
              SDL.events.push(event);
            }
            break;
          case 'mouseout':
            // Un-press all pressed mouse buttons, because we might miss the release outside of the canvas
            for (var i = 0; i < 3; i++) {
              if (SDL.DOMButtons[i]) {
                SDL.events.push({
                  type: 'mouseup',
                  button: i,
                  pageX: event.pageX,
                  pageY: event.pageY
                });
                SDL.DOMButtons[i] = 0;
              }
            }
            event.preventDefault();
            break;
          case 'blur':
          case 'visibilitychange': {
            // Un-press all pressed keys: TODO
            for (var code in SDL.keyboardMap) {
              SDL.events.push({
                type: 'keyup',
                keyCode: SDL.keyboardMap[code]
              });
            }
            event.preventDefault();
            break;
          }
          case 'unload':
            if (Browser.mainLoop.runner) {
              SDL.events.push(event);
              // Force-run a main event loop, since otherwise this event will never be caught!
              Browser.mainLoop.runner();
            }
            return;
          case 'resize':
            SDL.events.push(event);
            // manually triggered resize event doesn't have a preventDefault member
            if (event.preventDefault) {
              event.preventDefault();
            }
            break;
        }
        if (SDL.events.length >= 10000) {
          Module.printErr('SDL event queue full, dropping events');
          SDL.events = SDL.events.slice(0, 10000);
        }
        return;
      },handleEvent:function (event) {
        if (event.handled) return;
        event.handled = true;
        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            var code = event.keyCode;
            if (code >= 65 && code <= 90) {
              code += 32; // make lowercase for SDL
            } else {
              code = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
            HEAP8[(((SDL.keyboardState)+(code))|0)]=down;
            // TODO: lmeta, rmeta, numlock, capslock, KMOD_MODE, KMOD_RESERVED
            SDL.modState = (HEAP8[(((SDL.keyboardState)+(1248))|0)] ? 0x0040 | 0x0080 : 0) | // KMOD_LCTRL & KMOD_RCTRL
              (HEAP8[(((SDL.keyboardState)+(1249))|0)] ? 0x0001 | 0x0002 : 0) | // KMOD_LSHIFT & KMOD_RSHIFT
              (HEAP8[(((SDL.keyboardState)+(1250))|0)] ? 0x0100 | 0x0200 : 0); // KMOD_LALT & KMOD_RALT
            if (down) {
              SDL.keyboardMap[code] = event.keyCode; // save the DOM input, which we can use to unpress it during blur
            } else {
              delete SDL.keyboardMap[code];
            }
            break;
          }
          case 'mousedown': case 'mouseup':
            if (event.type == 'mousedown') {
              // SDL_BUTTON(x) is defined as (1 << ((x)-1)).  SDL buttons are 1-3,
              // and DOM buttons are 0-2, so this means that the below formula is
              // correct.
              SDL.buttonState |= 1 << event.button;
            } else if (event.type == 'mouseup') {
              SDL.buttonState &= ~(1 << event.button);
            }
            // fall through
          case 'mousemove': {
            Browser.calculateMouseEvent(event);
            break;
          }
        }
      },makeCEvent:function (event, ptr) {
        if (typeof event === 'number') {
          // This is a pointer to a native C event that was SDL_PushEvent'ed
          _memcpy(ptr, event, 28); // XXX
          return;
        }
        SDL.handleEvent(event);
        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            //Module.print('Received key event: ' + event.keyCode);
            var key = event.keyCode;
            if (key >= 65 && key <= 90) {
              key += 32; // make lowercase for SDL
            } else {
              key = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
            var scan;
            if (key >= 1024) {
              scan = key - 1024;
            } else {
              scan = SDL.scanCodes[key] || key;
            }
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type]
            HEAP8[(((ptr)+(8))|0)]=down ? 1 : 0
            HEAP8[(((ptr)+(9))|0)]=0 // TODO
            HEAP32[(((ptr)+(12))>>2)]=scan
            HEAP32[(((ptr)+(16))>>2)]=key
            HEAP16[(((ptr)+(20))>>1)]=SDL.modState
            // some non-character keys (e.g. backspace and tab) won't have keypressCharCode set, fill in with the keyCode.
            HEAP32[(((ptr)+(24))>>2)]=event.keypressCharCode || key
            break;
          }
          case 'keypress': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type]
            // Not filling in windowID for now
            var cStr = intArrayFromString(String.fromCharCode(event.charCode));
            for (var i = 0; i < cStr.length; ++i) {
              HEAP8[(((ptr)+(8 + i))|0)]=cStr[i];
            }
            break;
          }
          case 'mousedown': case 'mouseup': case 'mousemove': {
            if (event.type != 'mousemove') {
              var down = event.type === 'mousedown';
              HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
              HEAP8[(((ptr)+(8))|0)]=event.button+1; // DOM buttons are 0-2, SDL 1-3
              HEAP8[(((ptr)+(9))|0)]=down ? 1 : 0;
              HEAP32[(((ptr)+(12))>>2)]=Browser.mouseX;
              HEAP32[(((ptr)+(16))>>2)]=Browser.mouseY;
            } else {
              HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
              HEAP8[(((ptr)+(8))|0)]=SDL.buttonState;
              HEAP32[(((ptr)+(12))>>2)]=Browser.mouseX;
              HEAP32[(((ptr)+(16))>>2)]=Browser.mouseY;
              HEAP32[(((ptr)+(20))>>2)]=Browser.mouseMovementX;
              HEAP32[(((ptr)+(24))>>2)]=Browser.mouseMovementY;
            }
            break;
          }
          case 'unload': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            break;
          }
          case 'resize': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP32[(((ptr)+(4))>>2)]=event.w;
            HEAP32[(((ptr)+(8))>>2)]=event.h;
            break;
          }
          case 'joystick_button_up': case 'joystick_button_down': {
            var state = event.type === 'joystick_button_up' ? 0 : 1;
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.button;
            HEAP8[(((ptr)+(6))|0)]=state;
            break;
          }
          case 'joystick_axis_motion': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.axis;
            HEAP32[(((ptr)+(8))>>2)]=SDL.joystickAxisValueConversion(event.value);
            break;
          }
          default: throw 'Unhandled SDL event: ' + event.type;
        }
      },estimateTextWidth:function (fontData, text) {
        var h = fontData.size;
        var fontString = h + 'px ' + fontData.name;
        var tempCtx = SDL.ttfContext;
        assert(tempCtx, 'TTF_Init must have been called');
        tempCtx.save();
        tempCtx.font = fontString;
        var ret = tempCtx.measureText(text).width | 0;
        tempCtx.restore();
        return ret;
      },allocateChannels:function (num) { // called from Mix_AllocateChannels and init
        if (SDL.numChannels && SDL.numChannels >= num && num != 0) return;
        SDL.numChannels = num;
        SDL.channels = [];
        for (var i = 0; i < num; i++) {
          SDL.channels[i] = {
            audio: null,
            volume: 1.0
          };
        }
      },setGetVolume:function (info, volume) {
        if (!info) return 0;
        var ret = info.volume * 128; // MIX_MAX_VOLUME
        if (volume != -1) {
          info.volume = volume / 128;
          if (info.audio) info.audio.volume = info.volume;
        }
        return ret;
      },debugSurface:function (surfData) {
        console.log('dumping surface ' + [surfData.surf, surfData.source, surfData.width, surfData.height]);
        var image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
        var data = image.data;
        var num = Math.min(surfData.width, surfData.height);
        for (var i = 0; i < num; i++) {
          console.log('   diagonal ' + i + ':' + [data[i*surfData.width*4 + i*4 + 0], data[i*surfData.width*4 + i*4 + 1], data[i*surfData.width*4 + i*4 + 2], data[i*surfData.width*4 + i*4 + 3]]);
        }
      },joystickEventState:1,lastJoystickState:{},joystickNamePool:{},recordJoystickState:function (joystick, state) {
        // Standardize button state.
        var buttons = new Array(state.buttons.length);
        for (var i = 0; i < state.buttons.length; i++) {
          buttons[i] = SDL.getJoystickButtonState(state.buttons[i]);
        }
        SDL.lastJoystickState[joystick] = {
          buttons: buttons,
          axes: state.axes.slice(0),
          timestamp: state.timestamp,
          index: state.index,
          id: state.id
        };
      },getJoystickButtonState:function (button) {
        if (typeof button === 'object') {
          // Current gamepad API editor's draft (Firefox Nightly)
          // https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#idl-def-GamepadButton
          return button.pressed;
        } else {
          // Current gamepad API working draft (Firefox / Chrome Stable)
          // http://www.w3.org/TR/2012/WD-gamepad-20120529/#gamepad-interface
          return button > 0;
        }
      },queryJoysticks:function () {
        for (var joystick in SDL.lastJoystickState) {
          var state = SDL.getGamepad(joystick - 1);
          var prevState = SDL.lastJoystickState[joystick];
          // Check only if the timestamp has differed.
          // NOTE: Timestamp is not available in Firefox.
          if (typeof state.timestamp !== 'number' || state.timestamp !== prevState.timestamp) {
            var i;
            for (i = 0; i < state.buttons.length; i++) {
              var buttonState = SDL.getJoystickButtonState(state.buttons[i]);
              // NOTE: The previous state already has a boolean representation of
              //       its button, so no need to standardize its button state here.
              if (buttonState !== prevState.buttons[i]) {
                // Insert button-press event.
                SDL.events.push({
                  type: buttonState ? 'joystick_button_down' : 'joystick_button_up',
                  joystick: joystick,
                  index: joystick - 1,
                  button: i
                });
              }
            }
            for (i = 0; i < state.axes.length; i++) {
              if (state.axes[i] !== prevState.axes[i]) {
                // Insert axes-change event.
                SDL.events.push({
                  type: 'joystick_axis_motion',
                  joystick: joystick,
                  index: joystick - 1,
                  axis: i,
                  value: state.axes[i]
                });
              }
            }
            SDL.recordJoystickState(joystick, state);
          }
        }
      },joystickAxisValueConversion:function (value) {
        // Ensures that 0 is 0, 1 is 32767, and -1 is 32768.
        return Math.ceil(((value+1) * 32767.5) - 32768);
      },getGamepads:function () {
        var fcn = navigator.getGamepads || navigator.webkitGamepads || navigator.mozGamepads || navigator.gamepads || navigator.webkitGetGamepads;
        if (fcn !== undefined) {
          // The function must be applied on the navigator object.
          return fcn.apply(navigator);
        } else {
          return [];
        }
      },getGamepad:function (deviceIndex) {
        var gamepads = SDL.getGamepads();
        if (gamepads.length > deviceIndex && deviceIndex >= 0) {
          return gamepads[deviceIndex];
        }
        return null;
      }};function _SDL_OpenAudio(desired, obtained) {
      try {
        SDL.audio = {
          freq: HEAPU32[((desired)>>2)],
          format: HEAPU16[(((desired)+(4))>>1)],
          channels: HEAPU8[(((desired)+(6))|0)],
          samples: HEAPU16[(((desired)+(8))>>1)], // Samples in the CB buffer per single sound channel.
          callback: HEAPU32[(((desired)+(16))>>2)],
          userdata: HEAPU32[(((desired)+(20))>>2)],
          paused: true,
          timer: null
        };
        // The .silence field tells the constant sample value that corresponds to the safe un-skewed silence value for the wave data.
        if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
          SDL.audio.silence = 128; // Audio ranges in [0, 255], so silence is half-way in between.
        } else if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
          SDL.audio.silence = 0; // Signed data in range [-32768, 32767], silence is 0.
        } else {
          throw 'Invalid SDL audio format ' + SDL.audio.format + '!';
        }
        // Round the desired audio frequency up to the next 'common' frequency value.
        // Web Audio API spec states 'An implementation must support sample-rates in at least the range 22050 to 96000.'
        if (SDL.audio.freq <= 0) {
          throw 'Unsupported sound frequency ' + SDL.audio.freq + '!';
        } else if (SDL.audio.freq <= 22050) {
          SDL.audio.freq = 22050; // Take it safe and clamp everything lower than 22kHz to that.
        } else if (SDL.audio.freq <= 32000) {
          SDL.audio.freq = 32000;
        } else if (SDL.audio.freq <= 44100) {
          SDL.audio.freq = 44100;
        } else if (SDL.audio.freq <= 48000) {
          SDL.audio.freq = 48000;
        } else if (SDL.audio.freq <= 96000) {
          SDL.audio.freq = 96000;
        } else {
          throw 'Unsupported sound frequency ' + SDL.audio.freq + '!';
        }
        if (SDL.audio.channels == 0) {
          SDL.audio.channels = 1; // In SDL both 0 and 1 mean mono.
        } else if (SDL.audio.channels < 0 || SDL.audio.channels > 32) {
          throw 'Unsupported number of audio channels for SDL audio: ' + SDL.audio.channels + '!';
        } else if (SDL.audio.channels != 1 && SDL.audio.channels != 2) { // Unsure what SDL audio spec supports. Web Audio spec supports up to 32 channels.
          console.log('Warning: Using untested number of audio channels ' + SDL.audio.channels);
        }
        if (SDL.audio.samples < 128 || SDL.audio.samples > 524288 /* arbitrary cap */) {
          throw 'Unsupported audio callback buffer size ' + SDL.audio.samples + '!';
        } else if ((SDL.audio.samples & (SDL.audio.samples-1)) != 0) {
          throw 'Audio callback buffer size ' + SDL.audio.samples + ' must be a power-of-two!';
        }
        var totalSamples = SDL.audio.samples*SDL.audio.channels;
        SDL.audio.bytesPerSample = (SDL.audio.format == 0x0008 /*AUDIO_U8*/ || SDL.audio.format == 0x8008 /*AUDIO_S8*/) ? 1 : 2;
        SDL.audio.bufferSize = totalSamples*SDL.audio.bytesPerSample;
        SDL.audio.buffer = _malloc(SDL.audio.bufferSize);
        // To account for jittering in frametimes, always have multiple audio buffers queued up for the audio output device.
        // This helps that we won't starve that easily if a frame takes long to complete.
        SDL.audio.numSimultaneouslyQueuedBuffers = Module['SDL_numSimultaneouslyQueuedBuffers'] || 3;
        // Create a callback function that will be routinely called to ask more audio data from the user application.
        SDL.audio.caller = function SDL_audio_caller() {
          if (!SDL.audio) {
            return;
          }
          Runtime.dynCall('viii', SDL.audio.callback, [SDL.audio.userdata, SDL.audio.buffer, SDL.audio.bufferSize]);
          SDL.audio.pushAudio(SDL.audio.buffer, SDL.audio.bufferSize);
        };
        SDL.audio.audioOutput = new Audio();
        // As a workaround use Mozilla Audio Data API on Firefox until it ships with Web Audio and sound quality issues are fixed.
        if (typeof(SDL.audio.audioOutput['mozSetup'])==='function') {
          SDL.audio.audioOutput['mozSetup'](SDL.audio.channels, SDL.audio.freq); // use string attributes on mozOutput for closure compiler
          SDL.audio.mozBuffer = new Float32Array(totalSamples);
          SDL.audio.nextPlayTime = 0;
          SDL.audio.pushAudio = function SDL_audio_pushAudio(ptr, size) {
            --SDL.audio.numAudioTimersPending;
            var mozBuffer = SDL.audio.mozBuffer;
            // The input audio data for SDL audio is either 8-bit or 16-bit interleaved across channels, output for Mozilla Audio Data API
            // needs to be Float32 interleaved, so perform a sample conversion.
            if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
              for (var i = 0; i < totalSamples; i++) {
                mozBuffer[i] = (HEAP16[(((ptr)+(i*2))>>1)]) / 0x8000;
              }
            } else if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
              for (var i = 0; i < totalSamples; i++) {
                var v = (HEAP8[(((ptr)+(i))|0)]);
                mozBuffer[i] = ((v >= 0) ? v-128 : v+128) /128;
              }
            }
            // Submit the audio data to audio device.
            SDL.audio.audioOutput['mozWriteAudio'](mozBuffer);
            // Compute when the next audio callback should be called.
            var curtime = Date.now() / 1000.0 - SDL.audio.startTime;
            if (curtime > SDL.audio.nextPlayTime && SDL.audio.nextPlayTime != 0) {
              console.log('warning: Audio callback had starved sending audio by ' + (curtime - SDL.audio.nextPlayTime) + ' seconds.');
            }
            var playtime = Math.max(curtime, SDL.audio.nextPlayTime);
            var buffer_duration = SDL.audio.samples / SDL.audio.freq;
            SDL.audio.nextPlayTime = playtime + buffer_duration;
            // Schedule the next audio callback call to occur when the current one finishes.
            SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1000.0 * (playtime-curtime));
            ++SDL.audio.numAudioTimersPending;
            // And also schedule extra buffers _now_ if we have too few in queue.
            if (SDL.audio.numAudioTimersPending < SDL.audio.numSimultaneouslyQueuedBuffers) {
              ++SDL.audio.numAudioTimersPending;
              Browser.safeSetTimeout(SDL.audio.caller, 1.0);
            }
          }
        } else {
          // Initialize Web Audio API if we haven't done so yet. Note: Only initialize Web Audio context ever once on the web page,
          // since initializing multiple times fails on Chrome saying 'audio resources have been exhausted'.
          if (!SDL.audioContext) {
            if (typeof(AudioContext) === 'function') {
              SDL.audioContext = new AudioContext();
            } else if (typeof(webkitAudioContext) === 'function') {
              SDL.audioContext = new webkitAudioContext();
            } else {
              throw 'Web Audio API is not available!';
            }
          }
          SDL.audio.soundSource = new Array(); // Use an array of sound sources as a ring buffer to queue blocks of synthesized audio to Web Audio API.
          SDL.audio.nextSoundSource = 0; // Index of the next sound buffer in the ring buffer queue to play.
          SDL.audio.nextPlayTime = 0; // Time in seconds when the next audio block is due to start.
          // The pushAudio function with a new audio buffer whenever there is new audio data to schedule to be played back on the device.
          SDL.audio.pushAudio=function(ptr,sizeBytes) {
            try {
              --SDL.audio.numAudioTimersPending;
              var sizeSamples = sizeBytes / SDL.audio.bytesPerSample; // How many samples fit in the callback buffer?
              var sizeSamplesPerChannel = sizeSamples / SDL.audio.channels; // How many samples per a single channel fit in the cb buffer?
              if (sizeSamplesPerChannel != SDL.audio.samples) {
                throw 'Received mismatching audio buffer size!';
              }
              // Allocate new sound buffer to be played.
              var source = SDL.audioContext['createBufferSource']();
              if (SDL.audio.soundSource[SDL.audio.nextSoundSource]) {
                SDL.audio.soundSource[SDL.audio.nextSoundSource]['disconnect'](); // Explicitly disconnect old source, since we know it shouldn't be running anymore.
              }
              SDL.audio.soundSource[SDL.audio.nextSoundSource] = source;
              var soundBuffer = SDL.audioContext['createBuffer'](SDL.audio.channels,sizeSamplesPerChannel,SDL.audio.freq);
              SDL.audio.soundSource[SDL.audio.nextSoundSource]['connect'](SDL.audioContext['destination']);
              // The input audio data is interleaved across the channels, i.e. [L, R, L, R, L, R, ...] and is either 8-bit or 16-bit as
              // supported by the SDL API. The output audio wave data for Web Audio API must be in planar buffers of [-1,1]-normalized Float32 data,
              // so perform a buffer conversion for the data.
              var numChannels = SDL.audio.channels;
              for(var i = 0; i < numChannels; ++i) {
                var channelData = soundBuffer['getChannelData'](i);
                if (channelData.length != sizeSamplesPerChannel) {
                  throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + sizeSamplesPerChannel + ' samples!';
                }
                if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
                  for(var j = 0; j < sizeSamplesPerChannel; ++j) {
                    channelData[j] = (HEAP16[(((ptr)+((j*numChannels + i)*2))>>1)]) / 0x8000;
                  }
                } else if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
                  for(var j = 0; j < sizeSamplesPerChannel; ++j) {
                    var v = (HEAP8[(((ptr)+(j*numChannels + i))|0)]);
                    channelData[j] = ((v >= 0) ? v-128 : v+128) /128;
                  }
                }
              }
              // Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=883675 by setting the buffer only after filling. The order is important here!
              source['buffer'] = soundBuffer;
              // Schedule the generated sample buffer to be played out at the correct time right after the previously scheduled
              // sample buffer has finished.
              var curtime = SDL.audioContext['currentTime'];
              if (curtime > SDL.audio.nextPlayTime && SDL.audio.nextPlayTime != 0) {
                console.log('warning: Audio callback had starved sending audio by ' + (curtime - SDL.audio.nextPlayTime) + ' seconds.');
              }
              var playtime = Math.max(curtime, SDL.audio.nextPlayTime);
              SDL.audio.soundSource[SDL.audio.nextSoundSource]['start'](playtime);
              var buffer_duration = sizeSamplesPerChannel / SDL.audio.freq;
              SDL.audio.nextPlayTime = playtime + buffer_duration;
              SDL.audio.nextSoundSource = (SDL.audio.nextSoundSource + 1) % 4;
              var secsUntilNextCall = playtime-curtime;
              // Queue the next audio frame push to be performed when the previously queued buffer has finished playing.
              if (SDL.audio.numAudioTimersPending == 0) {
                var preemptBufferFeedMSecs = buffer_duration/2.0;
                SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, Math.max(0.0, 1000.0*secsUntilNextCall-preemptBufferFeedMSecs));
                ++SDL.audio.numAudioTimersPending;
              }
              // If we are risking starving, immediately queue extra buffers.
              if (secsUntilNextCall <= buffer_duration && SDL.audio.numAudioTimersPending < SDL.audio.numSimultaneouslyQueuedBuffers) {
                ++SDL.audio.numAudioTimersPending;
                Browser.safeSetTimeout(SDL.audio.caller, 1.0);
              }
            } catch(e) {
              console.log('Web Audio API error playing back audio: ' + e.toString());
            }
          }
        }
        if (obtained) {
          // Report back the initialized audio parameters.
          HEAP32[((obtained)>>2)]=SDL.audio.freq;
          HEAP16[(((obtained)+(4))>>1)]=SDL.audio.format;
          HEAP8[(((obtained)+(6))|0)]=SDL.audio.channels;
          HEAP8[(((obtained)+(7))|0)]=SDL.audio.silence;
          HEAP16[(((obtained)+(8))>>1)]=SDL.audio.samples;
          HEAP32[(((obtained)+(16))>>2)]=SDL.audio.callback;
          HEAP32[(((obtained)+(20))>>2)]=SDL.audio.userdata;
        }
        SDL.allocateChannels(32);
      } catch(e) {
        console.log('Initializing SDL audio threw an exception: "' + e.toString() + '"! Continuing without audio.');
        SDL.audio = null;
        SDL.allocateChannels(0);
        if (obtained) {
          HEAP32[((obtained)>>2)]=0;
          HEAP16[(((obtained)+(4))>>1)]=0;
          HEAP8[(((obtained)+(6))|0)]=0;
          HEAP8[(((obtained)+(7))|0)]=0;
          HEAP16[(((obtained)+(8))>>1)]=0;
          HEAP32[(((obtained)+(16))>>2)]=0;
          HEAP32[(((obtained)+(20))>>2)]=0;
        }
      }
      if (!SDL.audio) {
        return -1;
      }
      return 0;
    }
  function _SDL_GetError() {
      if (!SDL.errorMessage) {
        SDL.errorMessage = allocate(intArrayFromString("unknown SDL-emscripten error"), 'i8', ALLOC_NORMAL);
      }
      return SDL.errorMessage;
    }
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }
  function _SDL_PauseAudio(pauseOn) {
      if (!SDL.audio) {
        return;
      }
      if (pauseOn) {
        if (SDL.audio.timer !== undefined) {
          clearTimeout(SDL.audio.timer);
          SDL.audio.numAudioTimersPending = 0;
          SDL.audio.timer = undefined;
        }
      } else if (!SDL.audio.timer) {
        // Start the audio playback timer callback loop.
        SDL.audio.numAudioTimersPending = 1;
        SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1);
        SDL.audio.startTime = Date.now() / 1000.0; // Only used for Mozilla Audio Data API. Not needed for Web Audio API.
      }
      SDL.audio.paused = pauseOn;
    }
  function _SDL_CloseAudio() {
      if (SDL.audio) {
        try{
          for(var i = 0; i < SDL.audio.soundSource.length; ++i) {
            if (!(typeof(SDL.audio.soundSource[i]==='undefined'))) {
              SDL.audio.soundSource[i].stop(0);
            }
          }
        } catch(e) {}
        SDL.audio.soundSource = null;
        _SDL_PauseAudio(1);
        _free(SDL.audio.buffer);
        SDL.audio = null;
        SDL.allocateChannels(0);
      }
    }
  function _memset(ptr, value, num) {
      ptr = ptr|0; value = value|0; num = num|0;
      var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
      stop = (ptr + num)|0;
      if ((num|0) >= 20) {
        // This is unaligned, but quite large, so work hard to get to aligned settings
        value = value & 0xff;
        unaligned = ptr & 3;
        value4 = value | (value << 8) | (value << 16) | (value << 24);
        stop4 = stop & ~3;
        if (unaligned) {
          unaligned = (ptr + 4 - unaligned)|0;
          while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
            HEAP8[(ptr)]=value;
            ptr = (ptr+1)|0;
          }
        }
        while ((ptr|0) < (stop4|0)) {
          HEAP32[((ptr)>>2)]=value4;
          ptr = (ptr+4)|0;
        }
      }
      while ((ptr|0) < (stop|0)) {
        HEAP8[(ptr)]=value;
        ptr = (ptr+1)|0;
      }
      return (ptr-num)|0;
    }var _llvm_memset_p0i8_i32=_memset;
  function _SDL_GetTicks() {
      return Math.floor(Date.now() - SDL.startTime);
    }
  function _SDL_LockSurface(surf) {
      var surfData = SDL.surfaces[surf];
      surfData.locked++;
      if (surfData.locked > 1) return 0;
      // Mark in C/C++-accessible SDL structure
      // SDL_Surface has the following fields: Uint32 flags, SDL_PixelFormat *format; int w, h; Uint16 pitch; void *pixels; ...
      // So we have fields all of the same size, and 5 of them before us.
      // TODO: Use macros like in library.js
      HEAP32[(((surf)+(20))>>2)]=surfData.buffer;
      if (surf == SDL.screen && Module.screenIsReadOnly && surfData.image) return 0;
      surfData.image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
      if (surf == SDL.screen) {
        var data = surfData.image.data;
        var num = data.length;
        for (var i = 0; i < num/4; i++) {
          data[i*4+3] = 255; // opacity, as canvases blend alpha
        }
      }
      if (SDL.defaults.copyOnLock) {
        // Copy pixel data to somewhere accessible to 'C/C++'
        if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
          // If this is neaded then
          // we should compact the data from 32bpp to 8bpp index.
          // I think best way to implement this is use
          // additional colorMap hash (color->index).
          // Something like this:
          //
          // var size = surfData.width * surfData.height;
          // var data = '';
          // for (var i = 0; i<size; i++) {
          //   var color = SDL.translateRGBAToColor(
          //     surfData.image.data[i*4   ], 
          //     surfData.image.data[i*4 +1], 
          //     surfData.image.data[i*4 +2], 
          //     255);
          //   var index = surfData.colorMap[color];
          //   HEAP8[(((surfData.buffer)+(i))|0)]=index;
          // }
          throw 'CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set' + new Error().stack;
        } else {
        HEAPU8.set(surfData.image.data, surfData.buffer);
        }
      }
      return 0;
    }
  function _SDL_FillRect(surf, rect, color) {
      var surfData = SDL.surfaces[surf];
      assert(!surfData.locked); // but we could unlock and re-lock if we must..
      if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
        //in SDL_HWPALETTE color is index (0..255)
        //so we should translate 1 byte value to
        //32 bit canvas
        var index = color * 3;
        color = SDL.translateRGBAToColor(surfData.colors[index], surfData.colors[index +1], surfData.colors[index +2], 255);
      }
      var r = rect ? SDL.loadRect(rect) : { x: 0, y: 0, w: surfData.width, h: surfData.height };
      surfData.ctx.save();
      surfData.ctx.fillStyle = SDL.translateColorToCSSRGBA(color);
      surfData.ctx.fillRect(r.x, r.y, r.w, r.h);
      surfData.ctx.restore();
      return 0;
    }
  function _SDL_MapRGB(fmt, r, g, b) {
      // Canvas screens are always RGBA. We assume the machine is little-endian.
      return r&0xff|(g&0xff)<<8|(b&0xff)<<16|0xff000000;
    }
  function _SDL_UnlockSurface(surf) {
      assert(!SDL.GL); // in GL mode we do not keep around 2D canvases and contexts
      var surfData = SDL.surfaces[surf];
      surfData.locked--;
      if (surfData.locked > 0) return;
      // Copy pixel data to image
      if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
        SDL.copyIndexedColorData(surfData);
      } else if (!surfData.colors) {
        var data = surfData.image.data;
        var buffer = surfData.buffer;
        assert(buffer % 4 == 0, 'Invalid buffer offset: ' + buffer);
        var src = buffer >> 2;
        var dst = 0;
        var isScreen = surf == SDL.screen;
        var data32 = new Uint32Array(data.buffer);
        var num = data32.length;
        while (dst < num) {
          // HEAP32[src++] is an optimization. Instead, we could do HEAP32[(((buffer)+(dst))>>2)];
          data32[dst++] = HEAP32[src++] | (isScreen ? 0xff000000 : 0);
        }
      } else {
        var width = Module['canvas'].width;
        var height = Module['canvas'].height;
        var s = surfData.buffer;
        var data = surfData.image.data;
        var colors = surfData.colors;
        for (var y = 0; y < height; y++) {
          var base = y*width*4;
          for (var x = 0; x < width; x++) {
            // See comment above about signs
            var val = HEAPU8[((s++)|0)] * 3;
            var start = base + x*4;
            data[start]   = colors[val];
            data[start+1] = colors[val+1];
            data[start+2] = colors[val+2];
          }
          s += width*3;
        }
      }
      // Copy to canvas
      surfData.ctx.putImageData(surfData.image, 0, 0);
      // Note that we save the image, so future writes are fast. But, memory is not yet released
    }
  function _SDL_UpdateRect(surf, x, y, w, h) {
      // We actually do the whole screen in Unlock...
    }
  function _SDL_SetVideoMode(width, height, depth, flags) {
      ['mousedown', 'mouseup', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mouseout'].forEach(function(event) {
        Module['canvas'].addEventListener(event, SDL.receiveEvent, true);
      });
      // (0,0) means 'use fullscreen' in native; in Emscripten, use the current canvas size.
      if (width == 0 && height == 0) {
        var canvas = Module['canvas'];
        width = canvas.width;
        height = canvas.height;
      }
      Browser.setCanvasSize(width, height, true);
      // Free the old surface first.
      if (SDL.screen) {
        SDL.freeSurface(SDL.screen);
        SDL.screen = null;
      }
      SDL.screen = SDL.makeSurface(width, height, flags, true, 'screen');
      if (!SDL.addedResizeListener) {
        SDL.addedResizeListener = true;
        Browser.resizeListeners.push(function(w, h) {
          SDL.receiveEvent({
            type: 'resize',
            w: w,
            h: h
          });
        });
      }
      return SDL.screen;
    }
  function _SDL_FreeRW(rwopsID) {
      SDL.rwops[rwopsID] = null;
      while (SDL.rwops.length > 0 && SDL.rwops[SDL.rwops.length-1] === null) {
        SDL.rwops.pop();
      }
    }function _IMG_Load_RW(rwopsID, freeSrc) {
      try {
        // stb_image integration support
        function cleanup() {
          if (rwops && freeSrc) _SDL_FreeRW(rwopsID);
        };
        function addCleanup(func) {
          var old = cleanup;
          cleanup = function added_cleanup() {
            old();
            func();
          }
        }
        function callStbImage(func, params) {
          var x = Module['_malloc'](4);
          var y = Module['_malloc'](4);
          var comp = Module['_malloc'](4);
          addCleanup(function() {
            Module['_free'](x);
            Module['_free'](y);
            Module['_free'](comp);
            if (data) Module['_stbi_image_free'](data);
          });
          var data = Module['_' + func].apply(null, params.concat([x, y, comp, 0]));
          if (!data) return null;
          return {
            rawData: true,
            data: data,
            width: HEAP32[((x)>>2)],
            height: HEAP32[((y)>>2)],
            size: HEAP32[((x)>>2)] * HEAP32[((y)>>2)] * HEAP32[((comp)>>2)],
            bpp: HEAP32[((comp)>>2)]
          };
        }
        var rwops = SDL.rwops[rwopsID];
        if (rwops === undefined) {
          return 0;
        }
        var filename = rwops.filename;
        if (filename === undefined) {
          Runtime.warnOnce('Only file names that have been preloaded are supported for IMG_Load_RW. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js)');
          return 0;
        }
        if (!raw) {
          filename = PATH.resolve(filename);
          var raw = Module["preloadedImages"][filename];
          if (!raw) {
            if (raw === null) Module.printErr('Trying to reuse preloaded image, but freePreloadedMediaOnUse is set!');
            Runtime.warnOnce('Cannot find preloaded image ' + filename);
            Runtime.warnOnce('Cannot find preloaded image ' + filename + '. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js)');
            return 0;
          } else if (Module['freePreloadedMediaOnUse']) {
            Module["preloadedImages"][filename] = null;
          }
        }
        var surf = SDL.makeSurface(raw.width, raw.height, 0, false, 'load:' + filename);
        var surfData = SDL.surfaces[surf];
        surfData.ctx.globalCompositeOperation = "copy";
        if (!raw.rawData) {
          surfData.ctx.drawImage(raw, 0, 0, raw.width, raw.height, 0, 0, raw.width, raw.height);
        } else {
          var imageData = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
          if (raw.bpp == 4) {
            imageData.data.set(HEAPU8.subarray((raw.data),(raw.data+raw.size)));
          } else if (raw.bpp == 3) {
            var pixels = raw.size/3;
            var data = imageData.data;
            var sourcePtr = raw.data;
            var destPtr = 0;
            for (var i = 0; i < pixels; i++) {
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = 255;
            }
          } else {
            Module.printErr('cannot handle bpp ' + raw.bpp);
            return 0;
          }
          surfData.ctx.putImageData(imageData, 0, 0);
        }
        surfData.ctx.globalCompositeOperation = "source-over";
        // XXX SDL does not specify that loaded images must have available pixel data, in fact
        //     there are cases where you just want to blit them, so you just need the hardware
        //     accelerated version. However, code everywhere seems to assume that the pixels
        //     are in fact available, so we retrieve it here. This does add overhead though.
        _SDL_LockSurface(surf);
        surfData.locked--; // The surface is not actually locked in this hack
        if (SDL.GL) {
          // After getting the pixel data, we can free the canvas and context if we do not need to do 2D canvas blitting
          surfData.canvas = surfData.ctx = null;
        }
        return surf;
      } finally {
        cleanup();
      }
    }
  function _SDL_RWFromFile(_name, mode) {
      var id = SDL.rwops.length; // TODO: recycle ids when they are null
      var name = Pointer_stringify(_name)
      SDL.rwops.push({ filename: name, mimetype: Browser.getMimetype(name) });
      return id;
    }function _IMG_Load(filename){
      var rwops = _SDL_RWFromFile(filename);
      var result = _IMG_Load_RW(rwops, 1);
      return result;
    }
  function _SDL_Init(initFlags) {
      SDL.startTime = Date.now();
      SDL.initFlags = initFlags;
      // capture all key events. we just keep down and up, but also capture press to prevent default actions
      if (!Module['doNotCaptureKeyboard']) {
        document.addEventListener("keydown", SDL.receiveEvent);
        document.addEventListener("keyup", SDL.receiveEvent);
        document.addEventListener("keypress", SDL.receiveEvent);
        window.addEventListener("blur", SDL.receiveEvent);
        document.addEventListener("visibilitychange", SDL.receiveEvent);
      }
      if (initFlags & 0x200) {
        // SDL_INIT_JOYSTICK
        // Firefox will not give us Joystick data unless we register this NOP
        // callback.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=936104
        addEventListener("gamepadconnected", function() {});
      }
      window.addEventListener("unload", SDL.receiveEvent);
      SDL.keyboardState = _malloc(0x10000); // Our SDL needs 512, but 64K is safe for older SDLs
      _memset(SDL.keyboardState, 0, 0x10000);
      // Initialize this structure carefully for closure
      SDL.DOMEventToSDLEvent['keydown'] = 0x300 /* SDL_KEYDOWN */;
      SDL.DOMEventToSDLEvent['keyup'] = 0x301 /* SDL_KEYUP */;
      SDL.DOMEventToSDLEvent['keypress'] = 0x303 /* SDL_TEXTINPUT */;
      SDL.DOMEventToSDLEvent['mousedown'] = 0x401 /* SDL_MOUSEBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['mouseup'] = 0x402 /* SDL_MOUSEBUTTONUP */;
      SDL.DOMEventToSDLEvent['mousemove'] = 0x400 /* SDL_MOUSEMOTION */;
      SDL.DOMEventToSDLEvent['unload'] = 0x100 /* SDL_QUIT */;
      SDL.DOMEventToSDLEvent['resize'] = 0x7001 /* SDL_VIDEORESIZE/SDL_EVENT_COMPAT2 */;
      // These are not technically DOM events; the HTML gamepad API is poll-based.
      // However, we define them here, as the rest of the SDL code assumes that
      // all SDL events originate as DOM events.
      SDL.DOMEventToSDLEvent['joystick_axis_motion'] = 0x600 /* SDL_JOYAXISMOTION */;
      SDL.DOMEventToSDLEvent['joystick_button_down'] = 0x603 /* SDL_JOYBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['joystick_button_up'] = 0x604 /* SDL_JOYBUTTONUP */;
      return 0; // success
    }
  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
      Module['noExitRuntime'] = true;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from non-main loop sources
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        if (Module['preMainLoop']) {
          Module['preMainLoop']();
        }
        try {
          Runtime.dynCall('v', func);
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
            throw e;
          }
        }
        if (Module['postMainLoop']) {
          Module['postMainLoop']();
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from the main loop itself
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        Browser.mainLoop.scheduler();
      }
      if (fps && fps > 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          setTimeout(Browser.mainLoop.runner, 1000/fps); // doing this each time means that on exception, we stop
        }
      } else {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        }
      }
      Browser.mainLoop.scheduler();
      if (simulateInfiniteLoop) {
        throw 'SimulateInfiniteLoop';
      }
    }
  function _SDL_Quit() {
      for (var i = 0; i < SDL.numChannels; ++i) {
        if (SDL.channels[i].audio) {
          SDL.channels[i].audio.pause();
        }
      }
      if (SDL.music.audio) {
        SDL.music.audio.pause();
      }
      Module.print('SDL_Quit called (and ignored)');
    }
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = HEAP32[((varargs)>>2)];
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var ret = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return (ret == -1) ? 0 : ret;
    }
  function _fputs(s, stream) {
      // int fputs(const char *restrict s, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputs.html
      return _write(stream, s, _strlen(s));
    }
  function _fputc(c, stream) {
      // int fputc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputc.html
      var chr = unSign(c & 0xFF);
      HEAP8[((_fputc.ret)|0)]=chr
      var ret = _write(stream, _fputc.ret, 1);
      if (ret == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return -1;
      } else {
        return chr;
      }
    }function _puts(s) {
      // int puts(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/puts.html
      // NOTE: puts() always writes an extra newline.
      var stdout = HEAP32[((_stdout)>>2)];
      var ret = _fputs(s, stdout);
      if (ret < 0) {
        return ret;
      } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
      }
    }
  function _strerror_r(errnum, strerrbuf, buflen) {
      if (errnum in ERRNO_MESSAGES) {
        if (ERRNO_MESSAGES[errnum].length > buflen - 1) {
          return ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          var msg = ERRNO_MESSAGES[errnum];
          writeAsciiToMemory(msg, strerrbuf);
          return 0;
        }
      } else {
        return ___setErrNo(ERRNO_CODES.EINVAL);
      }
    }function _strerror(errnum) {
      if (!_strerror.buffer) _strerror.buffer = _malloc(256);
      _strerror_r(errnum, _strerror.buffer, 256);
      return _strerror.buffer;
    }
  function ___errno_location() {
      return ___errno_state;
    }function _perror(s) {
      // void perror(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/perror.html
      var stdout = HEAP32[((_stdout)>>2)];
      if (s) {
        _fputs(s, stdout);
        _fputc(58, stdout);
        _fputc(32, stdout);
      }
      var errnum = HEAP32[((___errno_location())>>2)];
      _puts(_strerror(errnum));
    }
  function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStream(stream);
      if (!streamObj) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop()
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(stream, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      _fsync(stream);
      return _close(stream);
    }
  function _SDL_PollEvent(ptr) {
      if (SDL.initFlags & 0x200 && SDL.joystickEventState) {
        // If SDL_INIT_JOYSTICK was supplied AND the joystick system is configured
        // to automatically query for events, query for joystick events.
        SDL.queryJoysticks();
      }
      if (SDL.events.length === 0) return 0;
      if (ptr) {
        SDL.makeCEvent(SDL.events.shift(), ptr);
      }
      return 1;
    }
  function _abort() {
      Module['abort']();
    }
  function _memcpy(dest, src, num) {
      dest = dest|0; src = src|0; num = num|0;
      var ret = 0;
      ret = dest|0;
      if ((dest&3) == (src&3)) {
        while (dest & 3) {
          if ((num|0) == 0) return ret|0;
          HEAP8[(dest)]=HEAP8[(src)];
          dest = (dest+1)|0;
          src = (src+1)|0;
          num = (num-1)|0;
        }
        while ((num|0) >= 4) {
          HEAP32[((dest)>>2)]=HEAP32[((src)>>2)];
          dest = (dest+4)|0;
          src = (src+4)|0;
          num = (num-4)|0;
        }
      }
      while ((num|0) > 0) {
        HEAP8[(dest)]=HEAP8[(src)];
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      return ret|0;
    }var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;
  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }
  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret
      }
      return ret;
    }
FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); HEAP32[((___errno_state)>>2)]=0;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
staticSealed = true; // seal the static portion of memory
STACK_MAX = STACK_BASE + 5242880;
DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);
assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");
var FUNCTION_TABLE = [0,0,_write8,0,_read8,0,_e8910_callback,0,_mainloop,0];
// EMSCRIPTEN_START_FUNCS
function _inst_neg($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $i0;
 var $i1;
 var $r;
 $1=$data;
 $i0=0;
 var $2=$1;
 var $3=$2^-1;
 $i1=$3;
 var $4=$i0;
 var $5=$i1;
 var $6=((($4)+($5))|0);
 var $7=((($6)+(1))|0);
 $r=$7;
 var $8=$i0;
 var $9=$8<<4;
 var $10=$i1;
 var $11=$10<<4;
 var $12=$r;
 var $13=$12<<4;
 var $14=_test_c($9,$11,$13,0);
 _set_cc(32,$14);
 var $15=$r;
 var $16=_test_n($15);
 _set_cc(8,$16);
 var $17=$r;
 var $18=_test_z8($17);
 _set_cc(4,$18);
 var $19=$i0;
 var $20=$i1;
 var $21=$r;
 var $22=_test_v($19,$20,$21);
 _set_cc(2,$22);
 var $23=$i0;
 var $24=$i1;
 var $25=$r;
 var $26=_test_c($23,$24,$25,1);
 _set_cc(1,$26);
 var $27=$r;
 STACKTOP=sp;return $27;
}
function _set_cc($flag,$value){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 $1=$flag;
 $2=$value;
 var $3=$1;
 var $4=$3^-1;
 var $5=HEAP32[((2270960)>>2)];
 var $6=$5&$4;
 HEAP32[((2270960)>>2)]=$6;
 var $7=$2;
 var $8=$1;
 var $9=(Math_imul($7,$8)|0);
 var $10=HEAP32[((2270960)>>2)];
 var $11=$10|$9;
 HEAP32[((2270960)>>2)]=$11;
 STACKTOP=sp;return;
}
function _test_c($i0,$i1,$r,$sub){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $3;
 var $4;
 var $flag;
 $1=$i0;
 $2=$i1;
 $3=$r;
 $4=$sub;
 var $5=$1;
 var $6=$2;
 var $7=$5|$6;
 var $8=$3;
 var $9=$8^-1;
 var $10=$7&$9;
 $flag=$10;
 var $11=$1;
 var $12=$2;
 var $13=$11&$12;
 var $14=$flag;
 var $15=$14|$13;
 $flag=$15;
 var $16=$flag;
 var $17=$16>>>7;
 var $18=$17&1;
 $flag=$18;
 var $19=$4;
 var $20=$flag;
 var $21=$20^$19;
 $flag=$21;
 var $22=$flag;
 STACKTOP=sp;return $22;
}
function _test_n($r){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$r;
 var $2=$1;
 var $3=$2>>>7;
 var $4=$3&1;
 STACKTOP=sp;return $4;
}
function _test_z8($r){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $flag;
 $1=$r;
 var $2=$1;
 var $3=$2^-1;
 $flag=$3;
 var $4=$flag;
 var $5=$4>>>4;
 var $6=$flag;
 var $7=$6&15;
 var $8=$5&$7;
 $flag=$8;
 var $9=$flag;
 var $10=$9>>>2;
 var $11=$flag;
 var $12=$11&3;
 var $13=$10&$12;
 $flag=$13;
 var $14=$flag;
 var $15=$14>>>1;
 var $16=$flag;
 var $17=$16&1;
 var $18=$15&$17;
 $flag=$18;
 var $19=$flag;
 STACKTOP=sp;return $19;
}
function _test_v($i0,$i1,$r){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $3;
 var $flag;
 $1=$i0;
 $2=$i1;
 $3=$r;
 var $4=$1;
 var $5=$2;
 var $6=$4^$5;
 var $7=$6^-1;
 $flag=$7;
 var $8=$1;
 var $9=$3;
 var $10=$8^$9;
 var $11=$flag;
 var $12=$11&$10;
 $flag=$12;
 var $13=$flag;
 var $14=$13>>>7;
 var $15=$14&1;
 $flag=$15;
 var $16=$flag;
 STACKTOP=sp;return $16;
}
function _inst_com($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $r;
 $1=$data;
 var $2=$1;
 var $3=$2^-1;
 $r=$3;
 var $4=$r;
 var $5=_test_n($4);
 _set_cc(8,$5);
 var $6=$r;
 var $7=_test_z8($6);
 _set_cc(4,$7);
 _set_cc(2,0);
 _set_cc(1,1);
 var $8=$r;
 STACKTOP=sp;return $8;
}
function _inst_lsr($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $r;
 $1=$data;
 var $2=$1;
 var $3=$2>>>1;
 var $4=$3&127;
 $r=$4;
 _set_cc(8,0);
 var $5=$r;
 var $6=_test_z8($5);
 _set_cc(4,$6);
 var $7=$1;
 var $8=$7&1;
 _set_cc(1,$8);
 var $9=$r;
 STACKTOP=sp;return $9;
}
function _inst_ror($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $r;
 var $c;
 $1=$data;
 var $2=_get_cc(1);
 $c=$2;
 var $3=$1;
 var $4=$3>>>1;
 var $5=$4&127;
 var $6=$c;
 var $7=$6<<7;
 var $8=$5|$7;
 $r=$8;
 var $9=$r;
 var $10=_test_n($9);
 _set_cc(8,$10);
 var $11=$r;
 var $12=_test_z8($11);
 _set_cc(4,$12);
 var $13=$1;
 var $14=$13&1;
 _set_cc(1,$14);
 var $15=$r;
 STACKTOP=sp;return $15;
}
function _get_cc($flag){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$flag;
 var $2=HEAP32[((2270960)>>2)];
 var $3=$1;
 var $4=(((($2>>>0))/(($3>>>0)))&-1);
 var $5=$4&1;
 STACKTOP=sp;return $5;
}
function _inst_asr($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $r;
 $1=$data;
 var $2=$1;
 var $3=$2>>>1;
 var $4=$3&127;
 var $5=$1;
 var $6=$5&128;
 var $7=$4|$6;
 $r=$7;
 var $8=$r;
 var $9=_test_n($8);
 _set_cc(8,$9);
 var $10=$r;
 var $11=_test_z8($10);
 _set_cc(4,$11);
 var $12=$1;
 var $13=$12&1;
 _set_cc(1,$13);
 var $14=$r;
 STACKTOP=sp;return $14;
}
function _inst_asl($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $i0;
 var $i1;
 var $r;
 $1=$data;
 var $2=$1;
 $i0=$2;
 var $3=$1;
 $i1=$3;
 var $4=$i0;
 var $5=$i1;
 var $6=((($4)+($5))|0);
 $r=$6;
 var $7=$i0;
 var $8=$7<<4;
 var $9=$i1;
 var $10=$9<<4;
 var $11=$r;
 var $12=$11<<4;
 var $13=_test_c($8,$10,$12,0);
 _set_cc(32,$13);
 var $14=$r;
 var $15=_test_n($14);
 _set_cc(8,$15);
 var $16=$r;
 var $17=_test_z8($16);
 _set_cc(4,$17);
 var $18=$i0;
 var $19=$i1;
 var $20=$r;
 var $21=_test_v($18,$19,$20);
 _set_cc(2,$21);
 var $22=$i0;
 var $23=$i1;
 var $24=$r;
 var $25=_test_c($22,$23,$24,0);
 _set_cc(1,$25);
 var $26=$r;
 STACKTOP=sp;return $26;
}
function _inst_rol($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $i0;
 var $i1;
 var $c;
 var $r;
 $1=$data;
 var $2=$1;
 $i0=$2;
 var $3=$1;
 $i1=$3;
 var $4=_get_cc(1);
 $c=$4;
 var $5=$i0;
 var $6=$i1;
 var $7=((($5)+($6))|0);
 var $8=$c;
 var $9=((($7)+($8))|0);
 $r=$9;
 var $10=$r;
 var $11=_test_n($10);
 _set_cc(8,$11);
 var $12=$r;
 var $13=_test_z8($12);
 _set_cc(4,$13);
 var $14=$i0;
 var $15=$i1;
 var $16=$r;
 var $17=_test_v($14,$15,$16);
 _set_cc(2,$17);
 var $18=$i0;
 var $19=$i1;
 var $20=$r;
 var $21=_test_c($18,$19,$20,0);
 _set_cc(1,$21);
 var $22=$r;
 STACKTOP=sp;return $22;
}
function _inst_dec($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $i0;
 var $i1;
 var $r;
 $1=$data;
 var $2=$1;
 $i0=$2;
 $i1=255;
 var $3=$i0;
 var $4=$i1;
 var $5=((($3)+($4))|0);
 $r=$5;
 var $6=$r;
 var $7=_test_n($6);
 _set_cc(8,$7);
 var $8=$r;
 var $9=_test_z8($8);
 _set_cc(4,$9);
 var $10=$i0;
 var $11=$i1;
 var $12=$r;
 var $13=_test_v($10,$11,$12);
 _set_cc(2,$13);
 var $14=$r;
 STACKTOP=sp;return $14;
}
function _inst_inc($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $i0;
 var $i1;
 var $r;
 $1=$data;
 var $2=$1;
 $i0=$2;
 $i1=1;
 var $3=$i0;
 var $4=$i1;
 var $5=((($3)+($4))|0);
 $r=$5;
 var $6=$r;
 var $7=_test_n($6);
 _set_cc(8,$7);
 var $8=$r;
 var $9=_test_z8($8);
 _set_cc(4,$9);
 var $10=$i0;
 var $11=$i1;
 var $12=$r;
 var $13=_test_v($10,$11,$12);
 _set_cc(2,$13);
 var $14=$r;
 STACKTOP=sp;return $14;
}
function _inst_tst8($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$data;
 var $2=$1;
 var $3=_test_n($2);
 _set_cc(8,$3);
 var $4=$1;
 var $5=_test_z8($4);
 _set_cc(4,$5);
 _set_cc(2,0);
 STACKTOP=sp;return;
}
function _inst_tst16($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$data;
 var $2=$1;
 var $3=$2>>>8;
 var $4=_test_n($3);
 _set_cc(8,$4);
 var $5=$1;
 var $6=_test_z16($5);
 _set_cc(4,$6);
 _set_cc(2,0);
 STACKTOP=sp;return;
}
function _test_z16($r){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $flag;
 $1=$r;
 var $2=$1;
 var $3=$2^-1;
 $flag=$3;
 var $4=$flag;
 var $5=$4>>>8;
 var $6=$flag;
 var $7=$6&255;
 var $8=$5&$7;
 $flag=$8;
 var $9=$flag;
 var $10=$9>>>4;
 var $11=$flag;
 var $12=$11&15;
 var $13=$10&$12;
 $flag=$13;
 var $14=$flag;
 var $15=$14>>>2;
 var $16=$flag;
 var $17=$16&3;
 var $18=$15&$17;
 $flag=$18;
 var $19=$flag;
 var $20=$19>>>1;
 var $21=$flag;
 var $22=$21&1;
 var $23=$20&$22;
 $flag=$23;
 var $24=$flag;
 STACKTOP=sp;return $24;
}
function _inst_clr(){
 var label=0;
 _set_cc(8,0);
 _set_cc(4,1);
 _set_cc(2,0);
 _set_cc(1,0);
 return;
}
function _inst_sub8($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 var $5=$4^-1;
 $i1=$5;
 var $6=$i0;
 var $7=$i1;
 var $8=((($6)+($7))|0);
 var $9=((($8)+(1))|0);
 $r=$9;
 var $10=$i0;
 var $11=$10<<4;
 var $12=$i1;
 var $13=$12<<4;
 var $14=$r;
 var $15=$14<<4;
 var $16=_test_c($11,$13,$15,0);
 _set_cc(32,$16);
 var $17=$r;
 var $18=_test_n($17);
 _set_cc(8,$18);
 var $19=$r;
 var $20=_test_z8($19);
 _set_cc(4,$20);
 var $21=$i0;
 var $22=$i1;
 var $23=$r;
 var $24=_test_v($21,$22,$23);
 _set_cc(2,$24);
 var $25=$i0;
 var $26=$i1;
 var $27=$r;
 var $28=_test_c($25,$26,$27,1);
 _set_cc(1,$28);
 var $29=$r;
 STACKTOP=sp;return $29;
}
function _inst_sbc($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $c;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 var $5=$4^-1;
 $i1=$5;
 var $6=_get_cc(1);
 var $7=(((1)-($6))|0);
 $c=$7;
 var $8=$i0;
 var $9=$i1;
 var $10=((($8)+($9))|0);
 var $11=$c;
 var $12=((($10)+($11))|0);
 $r=$12;
 var $13=$i0;
 var $14=$13<<4;
 var $15=$i1;
 var $16=$15<<4;
 var $17=$r;
 var $18=$17<<4;
 var $19=_test_c($14,$16,$18,0);
 _set_cc(32,$19);
 var $20=$r;
 var $21=_test_n($20);
 _set_cc(8,$21);
 var $22=$r;
 var $23=_test_z8($22);
 _set_cc(4,$23);
 var $24=$i0;
 var $25=$i1;
 var $26=$r;
 var $27=_test_v($24,$25,$26);
 _set_cc(2,$27);
 var $28=$i0;
 var $29=$i1;
 var $30=$r;
 var $31=_test_c($28,$29,$30,1);
 _set_cc(1,$31);
 var $32=$r;
 STACKTOP=sp;return $32;
}
function _inst_and($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 var $4=$2;
 var $5=$3&$4;
 $r=$5;
 var $6=$r;
 _inst_tst8($6);
 var $7=$r;
 STACKTOP=sp;return $7;
}
function _inst_eor($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 var $4=$2;
 var $5=$3^$4;
 $r=$5;
 var $6=$r;
 _inst_tst8($6);
 var $7=$r;
 STACKTOP=sp;return $7;
}
function _inst_adc($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $c;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 $i1=$4;
 var $5=_get_cc(1);
 $c=$5;
 var $6=$i0;
 var $7=$i1;
 var $8=((($6)+($7))|0);
 var $9=$c;
 var $10=((($8)+($9))|0);
 $r=$10;
 var $11=$i0;
 var $12=$11<<4;
 var $13=$i1;
 var $14=$13<<4;
 var $15=$r;
 var $16=$15<<4;
 var $17=_test_c($12,$14,$16,0);
 _set_cc(32,$17);
 var $18=$r;
 var $19=_test_n($18);
 _set_cc(8,$19);
 var $20=$r;
 var $21=_test_z8($20);
 _set_cc(4,$21);
 var $22=$i0;
 var $23=$i1;
 var $24=$r;
 var $25=_test_v($22,$23,$24);
 _set_cc(2,$25);
 var $26=$i0;
 var $27=$i1;
 var $28=$r;
 var $29=_test_c($26,$27,$28,0);
 _set_cc(1,$29);
 var $30=$r;
 STACKTOP=sp;return $30;
}
function _inst_or($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 var $4=$2;
 var $5=$3|$4;
 $r=$5;
 var $6=$r;
 _inst_tst8($6);
 var $7=$r;
 STACKTOP=sp;return $7;
}
function _inst_add8($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 $i1=$4;
 var $5=$i0;
 var $6=$i1;
 var $7=((($5)+($6))|0);
 $r=$7;
 var $8=$i0;
 var $9=$8<<4;
 var $10=$i1;
 var $11=$10<<4;
 var $12=$r;
 var $13=$12<<4;
 var $14=_test_c($9,$11,$13,0);
 _set_cc(32,$14);
 var $15=$r;
 var $16=_test_n($15);
 _set_cc(8,$16);
 var $17=$r;
 var $18=_test_z8($17);
 _set_cc(4,$18);
 var $19=$i0;
 var $20=$i1;
 var $21=$r;
 var $22=_test_v($19,$20,$21);
 _set_cc(2,$22);
 var $23=$i0;
 var $24=$i1;
 var $25=$r;
 var $26=_test_c($23,$24,$25,0);
 _set_cc(1,$26);
 var $27=$r;
 STACKTOP=sp;return $27;
}
function _inst_add16($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 $i1=$4;
 var $5=$i0;
 var $6=$i1;
 var $7=((($5)+($6))|0);
 $r=$7;
 var $8=$r;
 var $9=$8>>>8;
 var $10=_test_n($9);
 _set_cc(8,$10);
 var $11=$r;
 var $12=_test_z16($11);
 _set_cc(4,$12);
 var $13=$i0;
 var $14=$13>>>8;
 var $15=$i1;
 var $16=$15>>>8;
 var $17=$r;
 var $18=$17>>>8;
 var $19=_test_v($14,$16,$18);
 _set_cc(2,$19);
 var $20=$i0;
 var $21=$20>>>8;
 var $22=$i1;
 var $23=$22>>>8;
 var $24=$r;
 var $25=$24>>>8;
 var $26=_test_c($21,$23,$25,0);
 _set_cc(1,$26);
 var $27=$r;
 STACKTOP=sp;return $27;
}
function _inst_sub16($data0,$data1){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $i0;
 var $i1;
 var $r;
 $1=$data0;
 $2=$data1;
 var $3=$1;
 $i0=$3;
 var $4=$2;
 var $5=$4^-1;
 $i1=$5;
 var $6=$i0;
 var $7=$i1;
 var $8=((($6)+($7))|0);
 var $9=((($8)+(1))|0);
 $r=$9;
 var $10=$r;
 var $11=$10>>>8;
 var $12=_test_n($11);
 _set_cc(8,$12);
 var $13=$r;
 var $14=_test_z16($13);
 _set_cc(4,$14);
 var $15=$i0;
 var $16=$15>>>8;
 var $17=$i1;
 var $18=$17>>>8;
 var $19=$r;
 var $20=$19>>>8;
 var $21=_test_v($16,$18,$20);
 _set_cc(2,$21);
 var $22=$i0;
 var $23=$22>>>8;
 var $24=$i1;
 var $25=$24>>>8;
 var $26=$r;
 var $27=$26>>>8;
 var $28=_test_c($23,$25,$27,1);
 _set_cc(1,$28);
 var $29=$r;
 STACKTOP=sp;return $29;
}
function _inst_bra8($test,$op,$cycles){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $3;
 var $offset;
 var $mask;
 $1=$test;
 $2=$op;
 $3=$cycles;
 var $4=_pc_read8();
 $offset=$4;
 var $5=$1;
 var $6=$2;
 var $7=$6&1;
 var $8=$5^$7;
 var $9=((($8)-(1))|0);
 $mask=$9;
 var $10=$offset;
 var $11=_sign_extend($10);
 var $12=$mask;
 var $13=$11&$12;
 var $14=HEAP32[((2270944)>>2)];
 var $15=((($14)+($13))|0);
 HEAP32[((2270944)>>2)]=$15;
 var $16=$3;
 var $17=HEAP32[(($16)>>2)];
 var $18=((($17)+(3))|0);
 HEAP32[(($16)>>2)]=$18;
 STACKTOP=sp;return;
}
function _pc_read8(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $data;
 var $1=HEAP32[((2270944)>>2)];
 var $2=_read826($1);
 $data=$2;
 var $3=HEAP32[((2270944)>>2)];
 var $4=((($3)+(1))|0);
 HEAP32[((2270944)>>2)]=$4;
 var $5=$data;
 STACKTOP=sp;return $5;
}
function _sign_extend($data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$data;
 var $2=$1;
 var $3=$2&128;
 var $4=$3^-1;
 var $5=((($4)+(1))|0);
 var $6=$1;
 var $7=$6&255;
 var $8=$5|$7;
 STACKTOP=sp;return $8;
}
function _inst_bra16($test,$op,$cycles){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $3;
 var $offset;
 var $mask;
 $1=$test;
 $2=$op;
 $3=$cycles;
 var $4=_pc_read16();
 $offset=$4;
 var $5=$1;
 var $6=$2;
 var $7=$6&1;
 var $8=$5^$7;
 var $9=((($8)-(1))|0);
 $mask=$9;
 var $10=$offset;
 var $11=$mask;
 var $12=$10&$11;
 var $13=HEAP32[((2270944)>>2)];
 var $14=((($13)+($12))|0);
 HEAP32[((2270944)>>2)]=$14;
 var $15=$mask;
 var $16=(((5)-($15))|0);
 var $17=$3;
 var $18=HEAP32[(($17)>>2)];
 var $19=((($18)+($16))|0);
 HEAP32[(($17)>>2)]=$19;
 STACKTOP=sp;return;
}
function _pc_read16(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $data;
 var $1=HEAP32[((2270944)>>2)];
 var $2=_read16($1);
 $data=$2;
 var $3=HEAP32[((2270944)>>2)];
 var $4=((($3)+(2))|0);
 HEAP32[((2270944)>>2)]=$4;
 var $5=$data;
 STACKTOP=sp;return $5;
}
function _inst_psh($op,$sp,$data,$cycles){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $4;
 $1=$op;
 $2=$sp;
 $3=$data;
 $4=$cycles;
 var $5=$1;
 var $6=$5&128;
 var $7=($6|0)!=0;
 if($7){label=2;break;}else{label=3;break;}
 case 2: 
 var $9=$2;
 var $10=HEAP32[((2270944)>>2)];
 _push16($9,$10);
 var $11=$4;
 var $12=HEAP32[(($11)>>2)];
 var $13=((($12)+(2))|0);
 HEAP32[(($11)>>2)]=$13;
 label=3;break;
 case 3: 
 var $15=$1;
 var $16=$15&64;
 var $17=($16|0)!=0;
 if($17){label=4;break;}else{label=5;break;}
 case 4: 
 var $19=$2;
 var $20=$3;
 _push16($19,$20);
 var $21=$4;
 var $22=HEAP32[(($21)>>2)];
 var $23=((($22)+(2))|0);
 HEAP32[(($21)>>2)]=$23;
 label=5;break;
 case 5: 
 var $25=$1;
 var $26=$25&32;
 var $27=($26|0)!=0;
 if($27){label=6;break;}else{label=7;break;}
 case 6: 
 var $29=$2;
 var $30=HEAP32[((2270912)>>2)];
 _push16($29,$30);
 var $31=$4;
 var $32=HEAP32[(($31)>>2)];
 var $33=((($32)+(2))|0);
 HEAP32[(($31)>>2)]=$33;
 label=7;break;
 case 7: 
 var $35=$1;
 var $36=$35&16;
 var $37=($36|0)!=0;
 if($37){label=8;break;}else{label=9;break;}
 case 8: 
 var $39=$2;
 var $40=HEAP32[((2270920)>>2)];
 _push16($39,$40);
 var $41=$4;
 var $42=HEAP32[(($41)>>2)];
 var $43=((($42)+(2))|0);
 HEAP32[(($41)>>2)]=$43;
 label=9;break;
 case 9: 
 var $45=$1;
 var $46=$45&8;
 var $47=($46|0)!=0;
 if($47){label=10;break;}else{label=11;break;}
 case 10: 
 var $49=$2;
 var $50=HEAP32[((2270952)>>2)];
 _push8($49,$50);
 var $51=$4;
 var $52=HEAP32[(($51)>>2)];
 var $53=((($52)+(1))|0);
 HEAP32[(($51)>>2)]=$53;
 label=11;break;
 case 11: 
 var $55=$1;
 var $56=$55&4;
 var $57=($56|0)!=0;
 if($57){label=12;break;}else{label=13;break;}
 case 12: 
 var $59=$2;
 var $60=HEAP32[((2270968)>>2)];
 _push8($59,$60);
 var $61=$4;
 var $62=HEAP32[(($61)>>2)];
 var $63=((($62)+(1))|0);
 HEAP32[(($61)>>2)]=$63;
 label=13;break;
 case 13: 
 var $65=$1;
 var $66=$65&2;
 var $67=($66|0)!=0;
 if($67){label=14;break;}else{label=15;break;}
 case 14: 
 var $69=$2;
 var $70=HEAP32[((2270976)>>2)];
 _push8($69,$70);
 var $71=$4;
 var $72=HEAP32[(($71)>>2)];
 var $73=((($72)+(1))|0);
 HEAP32[(($71)>>2)]=$73;
 label=15;break;
 case 15: 
 var $75=$1;
 var $76=$75&1;
 var $77=($76|0)!=0;
 if($77){label=16;break;}else{label=17;break;}
 case 16: 
 var $79=$2;
 var $80=HEAP32[((2270960)>>2)];
 _push8($79,$80);
 var $81=$4;
 var $82=HEAP32[(($81)>>2)];
 var $83=((($82)+(1))|0);
 HEAP32[(($81)>>2)]=$83;
 label=17;break;
 case 17: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _push16($sp,$data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 $1=$sp;
 $2=$data;
 var $3=$1;
 var $4=$2;
 _push8($3,$4);
 var $5=$1;
 var $6=$2;
 var $7=$6>>>8;
 _push8($5,$7);
 STACKTOP=sp;return;
}
function _push8($sp,$data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 $1=$sp;
 $2=$data;
 var $3=$1;
 var $4=HEAP32[(($3)>>2)];
 var $5=((($4)-(1))|0);
 HEAP32[(($3)>>2)]=$5;
 var $6=$1;
 var $7=HEAP32[(($6)>>2)];
 var $8=$2;
 _write828($7,$8);
 STACKTOP=sp;return;
}
function _inst_pul($op,$sp,$osp,$cycles){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $4;
 $1=$op;
 $2=$sp;
 $3=$osp;
 $4=$cycles;
 var $5=$1;
 var $6=$5&1;
 var $7=($6|0)!=0;
 if($7){label=2;break;}else{label=3;break;}
 case 2: 
 var $9=$2;
 var $10=_pull8($9);
 HEAP32[((2270960)>>2)]=$10;
 var $11=$4;
 var $12=HEAP32[(($11)>>2)];
 var $13=((($12)+(1))|0);
 HEAP32[(($11)>>2)]=$13;
 label=3;break;
 case 3: 
 var $15=$1;
 var $16=$15&2;
 var $17=($16|0)!=0;
 if($17){label=4;break;}else{label=5;break;}
 case 4: 
 var $19=$2;
 var $20=_pull8($19);
 HEAP32[((2270976)>>2)]=$20;
 var $21=$4;
 var $22=HEAP32[(($21)>>2)];
 var $23=((($22)+(1))|0);
 HEAP32[(($21)>>2)]=$23;
 label=5;break;
 case 5: 
 var $25=$1;
 var $26=$25&4;
 var $27=($26|0)!=0;
 if($27){label=6;break;}else{label=7;break;}
 case 6: 
 var $29=$2;
 var $30=_pull8($29);
 HEAP32[((2270968)>>2)]=$30;
 var $31=$4;
 var $32=HEAP32[(($31)>>2)];
 var $33=((($32)+(1))|0);
 HEAP32[(($31)>>2)]=$33;
 label=7;break;
 case 7: 
 var $35=$1;
 var $36=$35&8;
 var $37=($36|0)!=0;
 if($37){label=8;break;}else{label=9;break;}
 case 8: 
 var $39=$2;
 var $40=_pull8($39);
 HEAP32[((2270952)>>2)]=$40;
 var $41=$4;
 var $42=HEAP32[(($41)>>2)];
 var $43=((($42)+(1))|0);
 HEAP32[(($41)>>2)]=$43;
 label=9;break;
 case 9: 
 var $45=$1;
 var $46=$45&16;
 var $47=($46|0)!=0;
 if($47){label=10;break;}else{label=11;break;}
 case 10: 
 var $49=$2;
 var $50=_pull16($49);
 HEAP32[((2270920)>>2)]=$50;
 var $51=$4;
 var $52=HEAP32[(($51)>>2)];
 var $53=((($52)+(2))|0);
 HEAP32[(($51)>>2)]=$53;
 label=11;break;
 case 11: 
 var $55=$1;
 var $56=$55&32;
 var $57=($56|0)!=0;
 if($57){label=12;break;}else{label=13;break;}
 case 12: 
 var $59=$2;
 var $60=_pull16($59);
 HEAP32[((2270912)>>2)]=$60;
 var $61=$4;
 var $62=HEAP32[(($61)>>2)];
 var $63=((($62)+(2))|0);
 HEAP32[(($61)>>2)]=$63;
 label=13;break;
 case 13: 
 var $65=$1;
 var $66=$65&64;
 var $67=($66|0)!=0;
 if($67){label=14;break;}else{label=15;break;}
 case 14: 
 var $69=$2;
 var $70=_pull16($69);
 var $71=$3;
 HEAP32[(($71)>>2)]=$70;
 var $72=$4;
 var $73=HEAP32[(($72)>>2)];
 var $74=((($73)+(2))|0);
 HEAP32[(($72)>>2)]=$74;
 label=15;break;
 case 15: 
 var $76=$1;
 var $77=$76&128;
 var $78=($77|0)!=0;
 if($78){label=16;break;}else{label=17;break;}
 case 16: 
 var $80=$2;
 var $81=_pull16($80);
 HEAP32[((2270944)>>2)]=$81;
 var $82=$4;
 var $83=HEAP32[(($82)>>2)];
 var $84=((($83)+(2))|0);
 HEAP32[(($82)>>2)]=$84;
 label=17;break;
 case 17: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _pull8($sp){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $data;
 $1=$sp;
 var $2=$1;
 var $3=HEAP32[(($2)>>2)];
 var $4=_read826($3);
 $data=$4;
 var $5=$1;
 var $6=HEAP32[(($5)>>2)];
 var $7=((($6)+(1))|0);
 HEAP32[(($5)>>2)]=$7;
 var $8=$data;
 STACKTOP=sp;return $8;
}
function _pull16($sp){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $datahi;
 var $datalo;
 $1=$sp;
 var $2=$1;
 var $3=_pull8($2);
 $datahi=$3;
 var $4=$1;
 var $5=_pull8($4);
 $datalo=$5;
 var $6=$datahi;
 var $7=$6<<8;
 var $8=$datalo;
 var $9=$7|$8;
 STACKTOP=sp;return $9;
}
function _exgtfr_read($reg){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $data;
 $1=$reg;
 var $2=$1;
 switch(($2|0)){case 10:{ label=10;break;}case 11:{ label=11;break;}case 0:{ label=2;break;}case 1:{ label=3;break;}case 2:{ label=4;break;}case 3:{ label=5;break;}case 4:{ label=6;break;}case 5:{ label=7;break;}case 8:{ label=8;break;}case 9:{ label=9;break;}default:{label=12;break;}}break;
 case 2: 
 var $4=_get_reg_d();
 $data=$4;
 label=13;break;
 case 3: 
 var $6=HEAP32[((2270920)>>2)];
 $data=$6;
 label=13;break;
 case 4: 
 var $8=HEAP32[((2270912)>>2)];
 $data=$8;
 label=13;break;
 case 5: 
 var $10=HEAP32[((2270928)>>2)];
 $data=$10;
 label=13;break;
 case 6: 
 var $12=HEAP32[((2270936)>>2)];
 $data=$12;
 label=13;break;
 case 7: 
 var $14=HEAP32[((2270944)>>2)];
 $data=$14;
 label=13;break;
 case 8: 
 var $16=HEAP32[((2270976)>>2)];
 var $17=65280|$16;
 $data=$17;
 label=13;break;
 case 9: 
 var $19=HEAP32[((2270968)>>2)];
 var $20=65280|$19;
 $data=$20;
 label=13;break;
 case 10: 
 var $22=HEAP32[((2270960)>>2)];
 var $23=65280|$22;
 $data=$23;
 label=13;break;
 case 11: 
 var $25=HEAP32[((2270952)>>2)];
 var $26=65280|$25;
 $data=$26;
 label=13;break;
 case 12: 
 $data=65535;
 var $28=$1;
 var $29=_printf(280,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$28,tempVarArgs)); STACKTOP=tempVarArgs;
 label=13;break;
 case 13: 
 var $31=$data;
 STACKTOP=sp;return $31;
  default: assert(0, "bad label: " + label);
 }
}
function _get_reg_d(){
 var label=0;
 var $1=HEAP32[((2270976)>>2)];
 var $2=$1<<8;
 var $3=HEAP32[((2270968)>>2)];
 var $4=$3&255;
 var $5=$2|$4;
 return $5;
}
function _exgtfr_write($reg,$data){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 $1=$reg;
 $2=$data;
 var $3=$1;
 switch(($3|0)){case 10:{ label=10;break;}case 11:{ label=11;break;}case 0:{ label=2;break;}case 1:{ label=3;break;}case 2:{ label=4;break;}case 3:{ label=5;break;}case 4:{ label=6;break;}case 5:{ label=7;break;}case 8:{ label=8;break;}case 9:{ label=9;break;}default:{label=12;break;}}break;
 case 2: 
 var $5=$2;
 _set_reg_d($5);
 label=13;break;
 case 3: 
 var $7=$2;
 HEAP32[((2270920)>>2)]=$7;
 label=13;break;
 case 4: 
 var $9=$2;
 HEAP32[((2270912)>>2)]=$9;
 label=13;break;
 case 5: 
 var $11=$2;
 HEAP32[((2270928)>>2)]=$11;
 label=13;break;
 case 6: 
 var $13=$2;
 HEAP32[((2270936)>>2)]=$13;
 label=13;break;
 case 7: 
 var $15=$2;
 HEAP32[((2270944)>>2)]=$15;
 label=13;break;
 case 8: 
 var $17=$2;
 HEAP32[((2270976)>>2)]=$17;
 label=13;break;
 case 9: 
 var $19=$2;
 HEAP32[((2270968)>>2)]=$19;
 label=13;break;
 case 10: 
 var $21=$2;
 HEAP32[((2270960)>>2)]=$21;
 label=13;break;
 case 11: 
 var $23=$2;
 HEAP32[((2270952)>>2)]=$23;
 label=13;break;
 case 12: 
 var $25=$1;
 var $26=_printf(280,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$25,tempVarArgs)); STACKTOP=tempVarArgs;
 label=13;break;
 case 13: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _set_reg_d($value){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$value;
 var $2=$1;
 var $3=$2>>>8;
 HEAP32[((2270976)>>2)]=$3;
 var $4=$1;
 HEAP32[((2270968)>>2)]=$4;
 STACKTOP=sp;return;
}
function _inst_exg(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $op;
 var $tmp;
 var $1=_pc_read8();
 $op=$1;
 var $2=$op;
 var $3=$2&15;
 var $4=_exgtfr_read($3);
 $tmp=$4;
 var $5=$op;
 var $6=$5&15;
 var $7=$op;
 var $8=$7>>>4;
 var $9=_exgtfr_read($8);
 _exgtfr_write($6,$9);
 var $10=$op;
 var $11=$10>>>4;
 var $12=$tmp;
 _exgtfr_write($11,$12);
 STACKTOP=sp;return;
}
function _inst_tfr(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $op;
 var $1=_pc_read8();
 $op=$1;
 var $2=$op;
 var $3=$2&15;
 var $4=$op;
 var $5=$4>>>4;
 var $6=_exgtfr_read($5);
 _exgtfr_write($3,$6);
 STACKTOP=sp;return;
}
function _e6809_reset(){
 var label=0;
 HEAP32[((2270920)>>2)]=0;
 HEAP32[((2270912)>>2)]=0;
 HEAP32[((2270928)>>2)]=0;
 HEAP32[((2270936)>>2)]=0;
 HEAP32[((2270976)>>2)]=0;
 HEAP32[((2270968)>>2)]=0;
 HEAP32[((2270952)>>2)]=0;
 HEAP32[((2270960)>>2)]=80;
 HEAP32[((2272072)>>2)]=0;
 var $1=_read16(65534);
 HEAP32[((2270944)>>2)]=$1;
 return;
}
function _read16($address){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $datahi;
 var $datalo;
 $1=$address;
 var $2=$1;
 var $3=_read826($2);
 $datahi=$3;
 var $4=$1;
 var $5=((($4)+(1))|0);
 var $6=_read826($5);
 $datalo=$6;
 var $7=$datahi;
 var $8=$7<<8;
 var $9=$datalo;
 var $10=$8|$9;
 STACKTOP=sp;return $10;
}
function _e6809_sstep($irq_i,$irq_f){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP;STACKTOP=(STACKTOP+8)|0; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $op;
 var $cycles=sp;
 var $ea;
 var $i0;
 var $i1;
 var $r;
 $2=$irq_i;
 $3=$irq_f;
 HEAP32[(($cycles)>>2)]=0;
 var $4=$3;
 var $5=($4|0)!=0;
 if($5){label=2;break;}else{label=10;break;}
 case 2: 
 var $7=_get_cc(64);
 var $8=($7|0)==0;
 if($8){label=3;break;}else{label=6;break;}
 case 3: 
 var $10=HEAP32[((2272072)>>2)];
 var $11=($10|0)!=2;
 if($11){label=4;break;}else{label=5;break;}
 case 4: 
 _set_cc(128,0);
 var $13=HEAP32[((2270928)>>2)];
 _inst_psh(129,2270936,$13,$cycles);
 label=5;break;
 case 5: 
 _set_cc(16,1);
 _set_cc(64,1);
 var $15=_read16(65526);
 HEAP32[((2270944)>>2)]=$15;
 HEAP32[((2272072)>>2)]=0;
 var $16=HEAP32[(($cycles)>>2)];
 var $17=((($16)+(7))|0);
 HEAP32[(($cycles)>>2)]=$17;
 label=9;break;
 case 6: 
 var $19=HEAP32[((2272072)>>2)];
 var $20=($19|0)==1;
 if($20){label=7;break;}else{label=8;break;}
 case 7: 
 HEAP32[((2272072)>>2)]=0;
 label=8;break;
 case 8: 
 label=9;break;
 case 9: 
 label=10;break;
 case 10: 
 var $25=$2;
 var $26=($25|0)!=0;
 if($26){label=11;break;}else{label=19;break;}
 case 11: 
 var $28=_get_cc(16);
 var $29=($28|0)==0;
 if($29){label=12;break;}else{label=15;break;}
 case 12: 
 var $31=HEAP32[((2272072)>>2)];
 var $32=($31|0)!=2;
 if($32){label=13;break;}else{label=14;break;}
 case 13: 
 _set_cc(128,1);
 var $34=HEAP32[((2270928)>>2)];
 _inst_psh(255,2270936,$34,$cycles);
 label=14;break;
 case 14: 
 _set_cc(16,1);
 var $36=_read16(65528);
 HEAP32[((2270944)>>2)]=$36;
 HEAP32[((2272072)>>2)]=0;
 var $37=HEAP32[(($cycles)>>2)];
 var $38=((($37)+(7))|0);
 HEAP32[(($cycles)>>2)]=$38;
 label=18;break;
 case 15: 
 var $40=HEAP32[((2272072)>>2)];
 var $41=($40|0)==1;
 if($41){label=16;break;}else{label=17;break;}
 case 16: 
 HEAP32[((2272072)>>2)]=0;
 label=17;break;
 case 17: 
 label=18;break;
 case 18: 
 label=19;break;
 case 19: 
 var $46=HEAP32[((2272072)>>2)];
 var $47=($46|0)!=0;
 if($47){label=20;break;}else{label=21;break;}
 case 20: 
 var $49=HEAP32[(($cycles)>>2)];
 var $50=((($49)+(1))|0);
 $1=$50;
 label=295;break;
 case 21: 
 var $52=_pc_read8();
 $op=$52;
 var $53=$op;
 switch(($53|0)){case 194:{ label=100;break;}case 210:{ label=101;break;}case 226:{ label=102;break;}case 242:{ label=103;break;}case 132:{ label=104;break;}case 148:{ label=105;break;}case 164:{ label=106;break;}case 180:{ label=107;break;}case 196:{ label=108;break;}case 212:{ label=109;break;}case 228:{ label=110;break;}case 244:{ label=111;break;}case 133:{ label=112;break;}case 149:{ label=113;break;}case 165:{ label=114;break;}case 181:{ label=115;break;}case 197:{ label=116;break;}case 213:{ label=117;break;}case 229:{ label=118;break;}case 245:{ label=119;break;}case 134:{ label=120;break;}case 150:{ label=121;break;}case 166:{ label=122;break;}case 182:{ label=123;break;}case 198:{ label=124;break;}case 214:{ label=125;break;}case 230:{ label=126;break;}case 246:{ label=127;break;}case 151:{ label=128;break;}case 167:{ label=129;break;}case 183:{ label=130;break;}case 215:{ label=131;break;}case 231:{ label=132;break;}case 247:{ label=133;break;}case 136:{ label=134;break;}case 152:{ label=135;break;}case 168:{ label=136;break;}case 184:{ label=137;break;}case 200:{ label=138;break;}case 216:{ label=139;break;}case 232:{ label=140;break;}case 248:{ label=141;break;}case 137:{ label=142;break;}case 153:{ label=143;break;}case 169:{ label=144;break;}case 185:{ label=145;break;}case 201:{ label=146;break;}case 217:{ label=147;break;}case 233:{ label=148;break;}case 249:{ label=149;break;}case 138:{ label=150;break;}case 154:{ label=151;break;}case 170:{ label=152;break;}case 186:{ label=153;break;}case 202:{ label=154;break;}case 218:{ label=155;break;}case 234:{ label=156;break;}case 250:{ label=157;break;}case 139:{ label=158;break;}case 155:{ label=159;break;}case 171:{ label=160;break;}case 187:{ label=161;break;}case 203:{ label=162;break;}case 219:{ label=163;break;}case 235:{ label=164;break;}case 251:{ label=165;break;}case 131:{ label=166;break;}case 147:{ label=167;break;}case 163:{ label=168;break;}case 179:{ label=169;break;}case 140:{ label=170;break;}case 156:{ label=171;break;}case 172:{ label=172;break;}case 188:{ label=173;break;}case 142:{ label=174;break;}case 158:{ label=175;break;}case 174:{ label=176;break;}case 190:{ label=177;break;}case 206:{ label=178;break;}case 222:{ label=179;break;}case 238:{ label=180;break;}case 254:{ label=181;break;}case 159:{ label=182;break;}case 175:{ label=183;break;}case 191:{ label=184;break;}case 223:{ label=185;break;}case 239:{ label=186;break;}case 255:{ label=187;break;}case 195:{ label=188;break;}case 211:{ label=189;break;}case 227:{ label=190;break;}case 243:{ label=191;break;}case 204:{ label=192;break;}case 220:{ label=193;break;}case 236:{ label=194;break;}case 252:{ label=195;break;}case 221:{ label=196;break;}case 237:{ label=197;break;}case 253:{ label=198;break;}case 18:{ label=199;break;}case 61:{ label=200;break;}case 32:case 33:{ label=201;break;}case 34:case 35:{ label=202;break;}case 36:case 37:{ label=203;break;}case 38:case 39:{ label=204;break;}case 40:case 41:{ label=205;break;}case 42:case 43:{ label=206;break;}case 44:case 45:{ label=207;break;}case 46:case 47:{ label=208;break;}case 22:{ label=209;break;}case 23:{ label=210;break;}case 141:{ label=211;break;}case 157:{ label=212;break;}case 173:{ label=213;break;}case 189:{ label=214;break;}case 48:{ label=215;break;}case 49:{ label=216;break;}case 50:{ label=217;break;}case 51:{ label=218;break;}case 52:{ label=219;break;}case 0:{ label=22;break;}case 53:{ label=220;break;}case 54:{ label=221;break;}case 55:{ label=222;break;}case 57:{ label=223;break;}case 58:{ label=224;break;}case 26:{ label=225;break;}case 28:{ label=226;break;}case 29:{ label=227;break;}case 30:{ label=228;break;}case 31:{ label=229;break;}case 64:{ label=23;break;}case 59:{ label=230;break;}case 63:{ label=234;break;}case 19:{ label=235;break;}case 25:{ label=236;break;}case 80:{ label=24;break;}case 60:{ label=246;break;}case 16:{ label=247;break;}case 96:{ label=25;break;}case 112:{ label=26;break;}case 3:{ label=27;break;}case 67:{ label=28;break;}case 17:{ label=281;break;}case 83:{ label=29;break;}case 99:{ label=30;break;}case 115:{ label=31;break;}case 4:{ label=32;break;}case 68:{ label=33;break;}case 84:{ label=34;break;}case 100:{ label=35;break;}case 116:{ label=36;break;}case 6:{ label=37;break;}case 70:{ label=38;break;}case 86:{ label=39;break;}case 102:{ label=40;break;}case 118:{ label=41;break;}case 7:{ label=42;break;}case 71:{ label=43;break;}case 87:{ label=44;break;}case 103:{ label=45;break;}case 119:{ label=46;break;}case 8:{ label=47;break;}case 72:{ label=48;break;}case 88:{ label=49;break;}case 104:{ label=50;break;}case 120:{ label=51;break;}case 9:{ label=52;break;}case 73:{ label=53;break;}case 89:{ label=54;break;}case 105:{ label=55;break;}case 121:{ label=56;break;}case 10:{ label=57;break;}case 74:{ label=58;break;}case 90:{ label=59;break;}case 106:{ label=60;break;}case 122:{ label=61;break;}case 12:{ label=62;break;}case 76:{ label=63;break;}case 92:{ label=64;break;}case 108:{ label=65;break;}case 124:{ label=66;break;}case 13:{ label=67;break;}case 77:{ label=68;break;}case 93:{ label=69;break;}case 109:{ label=70;break;}case 125:{ label=71;break;}case 14:{ label=72;break;}case 110:{ label=73;break;}case 126:{ label=74;break;}case 15:{ label=75;break;}case 79:{ label=76;break;}case 95:{ label=77;break;}case 111:{ label=78;break;}case 127:{ label=79;break;}case 128:{ label=80;break;}case 144:{ label=81;break;}case 160:{ label=82;break;}case 176:{ label=83;break;}case 192:{ label=84;break;}case 208:{ label=85;break;}case 224:{ label=86;break;}case 240:{ label=87;break;}case 129:{ label=88;break;}case 145:{ label=89;break;}case 161:{ label=90;break;}case 177:{ label=91;break;}case 193:{ label=92;break;}case 209:{ label=93;break;}case 225:{ label=94;break;}case 241:{ label=95;break;}case 130:{ label=96;break;}case 146:{ label=97;break;}case 162:{ label=98;break;}case 178:{ label=99;break;}default:{label=293;break;}}break;
 case 22: 
 var $55=_ea_direct();
 $ea=$55;
 var $56=$ea;
 var $57=_read826($56);
 var $58=_inst_neg($57);
 $r=$58;
 var $59=$ea;
 var $60=$r;
 _write828($59,$60);
 var $61=HEAP32[(($cycles)>>2)];
 var $62=((($61)+(6))|0);
 HEAP32[(($cycles)>>2)]=$62;
 label=294;break;
 case 23: 
 var $64=HEAP32[((2270976)>>2)];
 var $65=_inst_neg($64);
 HEAP32[((2270976)>>2)]=$65;
 var $66=HEAP32[(($cycles)>>2)];
 var $67=((($66)+(2))|0);
 HEAP32[(($cycles)>>2)]=$67;
 label=294;break;
 case 24: 
 var $69=HEAP32[((2270968)>>2)];
 var $70=_inst_neg($69);
 HEAP32[((2270968)>>2)]=$70;
 var $71=HEAP32[(($cycles)>>2)];
 var $72=((($71)+(2))|0);
 HEAP32[(($cycles)>>2)]=$72;
 label=294;break;
 case 25: 
 var $74=_ea_indexed($cycles);
 $ea=$74;
 var $75=$ea;
 var $76=_read826($75);
 var $77=_inst_neg($76);
 $r=$77;
 var $78=$ea;
 var $79=$r;
 _write828($78,$79);
 var $80=HEAP32[(($cycles)>>2)];
 var $81=((($80)+(6))|0);
 HEAP32[(($cycles)>>2)]=$81;
 label=294;break;
 case 26: 
 var $83=_ea_extended();
 $ea=$83;
 var $84=$ea;
 var $85=_read826($84);
 var $86=_inst_neg($85);
 $r=$86;
 var $87=$ea;
 var $88=$r;
 _write828($87,$88);
 var $89=HEAP32[(($cycles)>>2)];
 var $90=((($89)+(7))|0);
 HEAP32[(($cycles)>>2)]=$90;
 label=294;break;
 case 27: 
 var $92=_ea_direct();
 $ea=$92;
 var $93=$ea;
 var $94=_read826($93);
 var $95=_inst_com($94);
 $r=$95;
 var $96=$ea;
 var $97=$r;
 _write828($96,$97);
 var $98=HEAP32[(($cycles)>>2)];
 var $99=((($98)+(6))|0);
 HEAP32[(($cycles)>>2)]=$99;
 label=294;break;
 case 28: 
 var $101=HEAP32[((2270976)>>2)];
 var $102=_inst_com($101);
 HEAP32[((2270976)>>2)]=$102;
 var $103=HEAP32[(($cycles)>>2)];
 var $104=((($103)+(2))|0);
 HEAP32[(($cycles)>>2)]=$104;
 label=294;break;
 case 29: 
 var $106=HEAP32[((2270968)>>2)];
 var $107=_inst_com($106);
 HEAP32[((2270968)>>2)]=$107;
 var $108=HEAP32[(($cycles)>>2)];
 var $109=((($108)+(2))|0);
 HEAP32[(($cycles)>>2)]=$109;
 label=294;break;
 case 30: 
 var $111=_ea_indexed($cycles);
 $ea=$111;
 var $112=$ea;
 var $113=_read826($112);
 var $114=_inst_com($113);
 $r=$114;
 var $115=$ea;
 var $116=$r;
 _write828($115,$116);
 var $117=HEAP32[(($cycles)>>2)];
 var $118=((($117)+(6))|0);
 HEAP32[(($cycles)>>2)]=$118;
 label=294;break;
 case 31: 
 var $120=_ea_extended();
 $ea=$120;
 var $121=$ea;
 var $122=_read826($121);
 var $123=_inst_com($122);
 $r=$123;
 var $124=$ea;
 var $125=$r;
 _write828($124,$125);
 var $126=HEAP32[(($cycles)>>2)];
 var $127=((($126)+(7))|0);
 HEAP32[(($cycles)>>2)]=$127;
 label=294;break;
 case 32: 
 var $129=_ea_direct();
 $ea=$129;
 var $130=$ea;
 var $131=_read826($130);
 var $132=_inst_lsr($131);
 $r=$132;
 var $133=$ea;
 var $134=$r;
 _write828($133,$134);
 var $135=HEAP32[(($cycles)>>2)];
 var $136=((($135)+(6))|0);
 HEAP32[(($cycles)>>2)]=$136;
 label=294;break;
 case 33: 
 var $138=HEAP32[((2270976)>>2)];
 var $139=_inst_lsr($138);
 HEAP32[((2270976)>>2)]=$139;
 var $140=HEAP32[(($cycles)>>2)];
 var $141=((($140)+(2))|0);
 HEAP32[(($cycles)>>2)]=$141;
 label=294;break;
 case 34: 
 var $143=HEAP32[((2270968)>>2)];
 var $144=_inst_lsr($143);
 HEAP32[((2270968)>>2)]=$144;
 var $145=HEAP32[(($cycles)>>2)];
 var $146=((($145)+(2))|0);
 HEAP32[(($cycles)>>2)]=$146;
 label=294;break;
 case 35: 
 var $148=_ea_indexed($cycles);
 $ea=$148;
 var $149=$ea;
 var $150=_read826($149);
 var $151=_inst_lsr($150);
 $r=$151;
 var $152=$ea;
 var $153=$r;
 _write828($152,$153);
 var $154=HEAP32[(($cycles)>>2)];
 var $155=((($154)+(6))|0);
 HEAP32[(($cycles)>>2)]=$155;
 label=294;break;
 case 36: 
 var $157=_ea_extended();
 $ea=$157;
 var $158=$ea;
 var $159=_read826($158);
 var $160=_inst_lsr($159);
 $r=$160;
 var $161=$ea;
 var $162=$r;
 _write828($161,$162);
 var $163=HEAP32[(($cycles)>>2)];
 var $164=((($163)+(7))|0);
 HEAP32[(($cycles)>>2)]=$164;
 label=294;break;
 case 37: 
 var $166=_ea_direct();
 $ea=$166;
 var $167=$ea;
 var $168=_read826($167);
 var $169=_inst_ror($168);
 $r=$169;
 var $170=$ea;
 var $171=$r;
 _write828($170,$171);
 var $172=HEAP32[(($cycles)>>2)];
 var $173=((($172)+(6))|0);
 HEAP32[(($cycles)>>2)]=$173;
 label=294;break;
 case 38: 
 var $175=HEAP32[((2270976)>>2)];
 var $176=_inst_ror($175);
 HEAP32[((2270976)>>2)]=$176;
 var $177=HEAP32[(($cycles)>>2)];
 var $178=((($177)+(2))|0);
 HEAP32[(($cycles)>>2)]=$178;
 label=294;break;
 case 39: 
 var $180=HEAP32[((2270968)>>2)];
 var $181=_inst_ror($180);
 HEAP32[((2270968)>>2)]=$181;
 var $182=HEAP32[(($cycles)>>2)];
 var $183=((($182)+(2))|0);
 HEAP32[(($cycles)>>2)]=$183;
 label=294;break;
 case 40: 
 var $185=_ea_indexed($cycles);
 $ea=$185;
 var $186=$ea;
 var $187=_read826($186);
 var $188=_inst_ror($187);
 $r=$188;
 var $189=$ea;
 var $190=$r;
 _write828($189,$190);
 var $191=HEAP32[(($cycles)>>2)];
 var $192=((($191)+(6))|0);
 HEAP32[(($cycles)>>2)]=$192;
 label=294;break;
 case 41: 
 var $194=_ea_extended();
 $ea=$194;
 var $195=$ea;
 var $196=_read826($195);
 var $197=_inst_ror($196);
 $r=$197;
 var $198=$ea;
 var $199=$r;
 _write828($198,$199);
 var $200=HEAP32[(($cycles)>>2)];
 var $201=((($200)+(7))|0);
 HEAP32[(($cycles)>>2)]=$201;
 label=294;break;
 case 42: 
 var $203=_ea_direct();
 $ea=$203;
 var $204=$ea;
 var $205=_read826($204);
 var $206=_inst_asr($205);
 $r=$206;
 var $207=$ea;
 var $208=$r;
 _write828($207,$208);
 var $209=HEAP32[(($cycles)>>2)];
 var $210=((($209)+(6))|0);
 HEAP32[(($cycles)>>2)]=$210;
 label=294;break;
 case 43: 
 var $212=HEAP32[((2270976)>>2)];
 var $213=_inst_asr($212);
 HEAP32[((2270976)>>2)]=$213;
 var $214=HEAP32[(($cycles)>>2)];
 var $215=((($214)+(2))|0);
 HEAP32[(($cycles)>>2)]=$215;
 label=294;break;
 case 44: 
 var $217=HEAP32[((2270968)>>2)];
 var $218=_inst_asr($217);
 HEAP32[((2270968)>>2)]=$218;
 var $219=HEAP32[(($cycles)>>2)];
 var $220=((($219)+(2))|0);
 HEAP32[(($cycles)>>2)]=$220;
 label=294;break;
 case 45: 
 var $222=_ea_indexed($cycles);
 $ea=$222;
 var $223=$ea;
 var $224=_read826($223);
 var $225=_inst_asr($224);
 $r=$225;
 var $226=$ea;
 var $227=$r;
 _write828($226,$227);
 var $228=HEAP32[(($cycles)>>2)];
 var $229=((($228)+(6))|0);
 HEAP32[(($cycles)>>2)]=$229;
 label=294;break;
 case 46: 
 var $231=_ea_extended();
 $ea=$231;
 var $232=$ea;
 var $233=_read826($232);
 var $234=_inst_asr($233);
 $r=$234;
 var $235=$ea;
 var $236=$r;
 _write828($235,$236);
 var $237=HEAP32[(($cycles)>>2)];
 var $238=((($237)+(7))|0);
 HEAP32[(($cycles)>>2)]=$238;
 label=294;break;
 case 47: 
 var $240=_ea_direct();
 $ea=$240;
 var $241=$ea;
 var $242=_read826($241);
 var $243=_inst_asl($242);
 $r=$243;
 var $244=$ea;
 var $245=$r;
 _write828($244,$245);
 var $246=HEAP32[(($cycles)>>2)];
 var $247=((($246)+(6))|0);
 HEAP32[(($cycles)>>2)]=$247;
 label=294;break;
 case 48: 
 var $249=HEAP32[((2270976)>>2)];
 var $250=_inst_asl($249);
 HEAP32[((2270976)>>2)]=$250;
 var $251=HEAP32[(($cycles)>>2)];
 var $252=((($251)+(2))|0);
 HEAP32[(($cycles)>>2)]=$252;
 label=294;break;
 case 49: 
 var $254=HEAP32[((2270968)>>2)];
 var $255=_inst_asl($254);
 HEAP32[((2270968)>>2)]=$255;
 var $256=HEAP32[(($cycles)>>2)];
 var $257=((($256)+(2))|0);
 HEAP32[(($cycles)>>2)]=$257;
 label=294;break;
 case 50: 
 var $259=_ea_indexed($cycles);
 $ea=$259;
 var $260=$ea;
 var $261=_read826($260);
 var $262=_inst_asl($261);
 $r=$262;
 var $263=$ea;
 var $264=$r;
 _write828($263,$264);
 var $265=HEAP32[(($cycles)>>2)];
 var $266=((($265)+(6))|0);
 HEAP32[(($cycles)>>2)]=$266;
 label=294;break;
 case 51: 
 var $268=_ea_extended();
 $ea=$268;
 var $269=$ea;
 var $270=_read826($269);
 var $271=_inst_asl($270);
 $r=$271;
 var $272=$ea;
 var $273=$r;
 _write828($272,$273);
 var $274=HEAP32[(($cycles)>>2)];
 var $275=((($274)+(7))|0);
 HEAP32[(($cycles)>>2)]=$275;
 label=294;break;
 case 52: 
 var $277=_ea_direct();
 $ea=$277;
 var $278=$ea;
 var $279=_read826($278);
 var $280=_inst_rol($279);
 $r=$280;
 var $281=$ea;
 var $282=$r;
 _write828($281,$282);
 var $283=HEAP32[(($cycles)>>2)];
 var $284=((($283)+(6))|0);
 HEAP32[(($cycles)>>2)]=$284;
 label=294;break;
 case 53: 
 var $286=HEAP32[((2270976)>>2)];
 var $287=_inst_rol($286);
 HEAP32[((2270976)>>2)]=$287;
 var $288=HEAP32[(($cycles)>>2)];
 var $289=((($288)+(2))|0);
 HEAP32[(($cycles)>>2)]=$289;
 label=294;break;
 case 54: 
 var $291=HEAP32[((2270968)>>2)];
 var $292=_inst_rol($291);
 HEAP32[((2270968)>>2)]=$292;
 var $293=HEAP32[(($cycles)>>2)];
 var $294=((($293)+(2))|0);
 HEAP32[(($cycles)>>2)]=$294;
 label=294;break;
 case 55: 
 var $296=_ea_indexed($cycles);
 $ea=$296;
 var $297=$ea;
 var $298=_read826($297);
 var $299=_inst_rol($298);
 $r=$299;
 var $300=$ea;
 var $301=$r;
 _write828($300,$301);
 var $302=HEAP32[(($cycles)>>2)];
 var $303=((($302)+(6))|0);
 HEAP32[(($cycles)>>2)]=$303;
 label=294;break;
 case 56: 
 var $305=_ea_extended();
 $ea=$305;
 var $306=$ea;
 var $307=_read826($306);
 var $308=_inst_rol($307);
 $r=$308;
 var $309=$ea;
 var $310=$r;
 _write828($309,$310);
 var $311=HEAP32[(($cycles)>>2)];
 var $312=((($311)+(7))|0);
 HEAP32[(($cycles)>>2)]=$312;
 label=294;break;
 case 57: 
 var $314=_ea_direct();
 $ea=$314;
 var $315=$ea;
 var $316=_read826($315);
 var $317=_inst_dec($316);
 $r=$317;
 var $318=$ea;
 var $319=$r;
 _write828($318,$319);
 var $320=HEAP32[(($cycles)>>2)];
 var $321=((($320)+(6))|0);
 HEAP32[(($cycles)>>2)]=$321;
 label=294;break;
 case 58: 
 var $323=HEAP32[((2270976)>>2)];
 var $324=_inst_dec($323);
 HEAP32[((2270976)>>2)]=$324;
 var $325=HEAP32[(($cycles)>>2)];
 var $326=((($325)+(2))|0);
 HEAP32[(($cycles)>>2)]=$326;
 label=294;break;
 case 59: 
 var $328=HEAP32[((2270968)>>2)];
 var $329=_inst_dec($328);
 HEAP32[((2270968)>>2)]=$329;
 var $330=HEAP32[(($cycles)>>2)];
 var $331=((($330)+(2))|0);
 HEAP32[(($cycles)>>2)]=$331;
 label=294;break;
 case 60: 
 var $333=_ea_indexed($cycles);
 $ea=$333;
 var $334=$ea;
 var $335=_read826($334);
 var $336=_inst_dec($335);
 $r=$336;
 var $337=$ea;
 var $338=$r;
 _write828($337,$338);
 var $339=HEAP32[(($cycles)>>2)];
 var $340=((($339)+(6))|0);
 HEAP32[(($cycles)>>2)]=$340;
 label=294;break;
 case 61: 
 var $342=_ea_extended();
 $ea=$342;
 var $343=$ea;
 var $344=_read826($343);
 var $345=_inst_dec($344);
 $r=$345;
 var $346=$ea;
 var $347=$r;
 _write828($346,$347);
 var $348=HEAP32[(($cycles)>>2)];
 var $349=((($348)+(7))|0);
 HEAP32[(($cycles)>>2)]=$349;
 label=294;break;
 case 62: 
 var $351=_ea_direct();
 $ea=$351;
 var $352=$ea;
 var $353=_read826($352);
 var $354=_inst_inc($353);
 $r=$354;
 var $355=$ea;
 var $356=$r;
 _write828($355,$356);
 var $357=HEAP32[(($cycles)>>2)];
 var $358=((($357)+(6))|0);
 HEAP32[(($cycles)>>2)]=$358;
 label=294;break;
 case 63: 
 var $360=HEAP32[((2270976)>>2)];
 var $361=_inst_inc($360);
 HEAP32[((2270976)>>2)]=$361;
 var $362=HEAP32[(($cycles)>>2)];
 var $363=((($362)+(2))|0);
 HEAP32[(($cycles)>>2)]=$363;
 label=294;break;
 case 64: 
 var $365=HEAP32[((2270968)>>2)];
 var $366=_inst_inc($365);
 HEAP32[((2270968)>>2)]=$366;
 var $367=HEAP32[(($cycles)>>2)];
 var $368=((($367)+(2))|0);
 HEAP32[(($cycles)>>2)]=$368;
 label=294;break;
 case 65: 
 var $370=_ea_indexed($cycles);
 $ea=$370;
 var $371=$ea;
 var $372=_read826($371);
 var $373=_inst_inc($372);
 $r=$373;
 var $374=$ea;
 var $375=$r;
 _write828($374,$375);
 var $376=HEAP32[(($cycles)>>2)];
 var $377=((($376)+(6))|0);
 HEAP32[(($cycles)>>2)]=$377;
 label=294;break;
 case 66: 
 var $379=_ea_extended();
 $ea=$379;
 var $380=$ea;
 var $381=_read826($380);
 var $382=_inst_inc($381);
 $r=$382;
 var $383=$ea;
 var $384=$r;
 _write828($383,$384);
 var $385=HEAP32[(($cycles)>>2)];
 var $386=((($385)+(7))|0);
 HEAP32[(($cycles)>>2)]=$386;
 label=294;break;
 case 67: 
 var $388=_ea_direct();
 $ea=$388;
 var $389=$ea;
 var $390=_read826($389);
 _inst_tst8($390);
 var $391=HEAP32[(($cycles)>>2)];
 var $392=((($391)+(6))|0);
 HEAP32[(($cycles)>>2)]=$392;
 label=294;break;
 case 68: 
 var $394=HEAP32[((2270976)>>2)];
 _inst_tst8($394);
 var $395=HEAP32[(($cycles)>>2)];
 var $396=((($395)+(2))|0);
 HEAP32[(($cycles)>>2)]=$396;
 label=294;break;
 case 69: 
 var $398=HEAP32[((2270968)>>2)];
 _inst_tst8($398);
 var $399=HEAP32[(($cycles)>>2)];
 var $400=((($399)+(2))|0);
 HEAP32[(($cycles)>>2)]=$400;
 label=294;break;
 case 70: 
 var $402=_ea_indexed($cycles);
 $ea=$402;
 var $403=$ea;
 var $404=_read826($403);
 _inst_tst8($404);
 var $405=HEAP32[(($cycles)>>2)];
 var $406=((($405)+(6))|0);
 HEAP32[(($cycles)>>2)]=$406;
 label=294;break;
 case 71: 
 var $408=_ea_extended();
 $ea=$408;
 var $409=$ea;
 var $410=_read826($409);
 _inst_tst8($410);
 var $411=HEAP32[(($cycles)>>2)];
 var $412=((($411)+(7))|0);
 HEAP32[(($cycles)>>2)]=$412;
 label=294;break;
 case 72: 
 var $414=_ea_direct();
 HEAP32[((2270944)>>2)]=$414;
 var $415=HEAP32[(($cycles)>>2)];
 var $416=((($415)+(3))|0);
 HEAP32[(($cycles)>>2)]=$416;
 label=294;break;
 case 73: 
 var $418=_ea_indexed($cycles);
 HEAP32[((2270944)>>2)]=$418;
 var $419=HEAP32[(($cycles)>>2)];
 var $420=((($419)+(3))|0);
 HEAP32[(($cycles)>>2)]=$420;
 label=294;break;
 case 74: 
 var $422=_ea_extended();
 HEAP32[((2270944)>>2)]=$422;
 var $423=HEAP32[(($cycles)>>2)];
 var $424=((($423)+(4))|0);
 HEAP32[(($cycles)>>2)]=$424;
 label=294;break;
 case 75: 
 var $426=_ea_direct();
 $ea=$426;
 _inst_clr();
 var $427=$ea;
 _write828($427,0);
 var $428=HEAP32[(($cycles)>>2)];
 var $429=((($428)+(6))|0);
 HEAP32[(($cycles)>>2)]=$429;
 label=294;break;
 case 76: 
 _inst_clr();
 HEAP32[((2270976)>>2)]=0;
 var $431=HEAP32[(($cycles)>>2)];
 var $432=((($431)+(2))|0);
 HEAP32[(($cycles)>>2)]=$432;
 label=294;break;
 case 77: 
 _inst_clr();
 HEAP32[((2270968)>>2)]=0;
 var $434=HEAP32[(($cycles)>>2)];
 var $435=((($434)+(2))|0);
 HEAP32[(($cycles)>>2)]=$435;
 label=294;break;
 case 78: 
 var $437=_ea_indexed($cycles);
 $ea=$437;
 _inst_clr();
 var $438=$ea;
 _write828($438,0);
 var $439=HEAP32[(($cycles)>>2)];
 var $440=((($439)+(6))|0);
 HEAP32[(($cycles)>>2)]=$440;
 label=294;break;
 case 79: 
 var $442=_ea_extended();
 $ea=$442;
 _inst_clr();
 var $443=$ea;
 _write828($443,0);
 var $444=HEAP32[(($cycles)>>2)];
 var $445=((($444)+(7))|0);
 HEAP32[(($cycles)>>2)]=$445;
 label=294;break;
 case 80: 
 var $447=HEAP32[((2270976)>>2)];
 var $448=_pc_read8();
 var $449=_inst_sub8($447,$448);
 HEAP32[((2270976)>>2)]=$449;
 var $450=HEAP32[(($cycles)>>2)];
 var $451=((($450)+(2))|0);
 HEAP32[(($cycles)>>2)]=$451;
 label=294;break;
 case 81: 
 var $453=_ea_direct();
 $ea=$453;
 var $454=HEAP32[((2270976)>>2)];
 var $455=$ea;
 var $456=_read826($455);
 var $457=_inst_sub8($454,$456);
 HEAP32[((2270976)>>2)]=$457;
 var $458=HEAP32[(($cycles)>>2)];
 var $459=((($458)+(4))|0);
 HEAP32[(($cycles)>>2)]=$459;
 label=294;break;
 case 82: 
 var $461=_ea_indexed($cycles);
 $ea=$461;
 var $462=HEAP32[((2270976)>>2)];
 var $463=$ea;
 var $464=_read826($463);
 var $465=_inst_sub8($462,$464);
 HEAP32[((2270976)>>2)]=$465;
 var $466=HEAP32[(($cycles)>>2)];
 var $467=((($466)+(4))|0);
 HEAP32[(($cycles)>>2)]=$467;
 label=294;break;
 case 83: 
 var $469=_ea_extended();
 $ea=$469;
 var $470=HEAP32[((2270976)>>2)];
 var $471=$ea;
 var $472=_read826($471);
 var $473=_inst_sub8($470,$472);
 HEAP32[((2270976)>>2)]=$473;
 var $474=HEAP32[(($cycles)>>2)];
 var $475=((($474)+(5))|0);
 HEAP32[(($cycles)>>2)]=$475;
 label=294;break;
 case 84: 
 var $477=HEAP32[((2270968)>>2)];
 var $478=_pc_read8();
 var $479=_inst_sub8($477,$478);
 HEAP32[((2270968)>>2)]=$479;
 var $480=HEAP32[(($cycles)>>2)];
 var $481=((($480)+(2))|0);
 HEAP32[(($cycles)>>2)]=$481;
 label=294;break;
 case 85: 
 var $483=_ea_direct();
 $ea=$483;
 var $484=HEAP32[((2270968)>>2)];
 var $485=$ea;
 var $486=_read826($485);
 var $487=_inst_sub8($484,$486);
 HEAP32[((2270968)>>2)]=$487;
 var $488=HEAP32[(($cycles)>>2)];
 var $489=((($488)+(4))|0);
 HEAP32[(($cycles)>>2)]=$489;
 label=294;break;
 case 86: 
 var $491=_ea_indexed($cycles);
 $ea=$491;
 var $492=HEAP32[((2270968)>>2)];
 var $493=$ea;
 var $494=_read826($493);
 var $495=_inst_sub8($492,$494);
 HEAP32[((2270968)>>2)]=$495;
 var $496=HEAP32[(($cycles)>>2)];
 var $497=((($496)+(4))|0);
 HEAP32[(($cycles)>>2)]=$497;
 label=294;break;
 case 87: 
 var $499=_ea_extended();
 $ea=$499;
 var $500=HEAP32[((2270968)>>2)];
 var $501=$ea;
 var $502=_read826($501);
 var $503=_inst_sub8($500,$502);
 HEAP32[((2270968)>>2)]=$503;
 var $504=HEAP32[(($cycles)>>2)];
 var $505=((($504)+(5))|0);
 HEAP32[(($cycles)>>2)]=$505;
 label=294;break;
 case 88: 
 var $507=HEAP32[((2270976)>>2)];
 var $508=_pc_read8();
 var $509=_inst_sub8($507,$508);
 var $510=HEAP32[(($cycles)>>2)];
 var $511=((($510)+(2))|0);
 HEAP32[(($cycles)>>2)]=$511;
 label=294;break;
 case 89: 
 var $513=_ea_direct();
 $ea=$513;
 var $514=HEAP32[((2270976)>>2)];
 var $515=$ea;
 var $516=_read826($515);
 var $517=_inst_sub8($514,$516);
 var $518=HEAP32[(($cycles)>>2)];
 var $519=((($518)+(4))|0);
 HEAP32[(($cycles)>>2)]=$519;
 label=294;break;
 case 90: 
 var $521=_ea_indexed($cycles);
 $ea=$521;
 var $522=HEAP32[((2270976)>>2)];
 var $523=$ea;
 var $524=_read826($523);
 var $525=_inst_sub8($522,$524);
 var $526=HEAP32[(($cycles)>>2)];
 var $527=((($526)+(4))|0);
 HEAP32[(($cycles)>>2)]=$527;
 label=294;break;
 case 91: 
 var $529=_ea_extended();
 $ea=$529;
 var $530=HEAP32[((2270976)>>2)];
 var $531=$ea;
 var $532=_read826($531);
 var $533=_inst_sub8($530,$532);
 var $534=HEAP32[(($cycles)>>2)];
 var $535=((($534)+(5))|0);
 HEAP32[(($cycles)>>2)]=$535;
 label=294;break;
 case 92: 
 var $537=HEAP32[((2270968)>>2)];
 var $538=_pc_read8();
 var $539=_inst_sub8($537,$538);
 var $540=HEAP32[(($cycles)>>2)];
 var $541=((($540)+(2))|0);
 HEAP32[(($cycles)>>2)]=$541;
 label=294;break;
 case 93: 
 var $543=_ea_direct();
 $ea=$543;
 var $544=HEAP32[((2270968)>>2)];
 var $545=$ea;
 var $546=_read826($545);
 var $547=_inst_sub8($544,$546);
 var $548=HEAP32[(($cycles)>>2)];
 var $549=((($548)+(4))|0);
 HEAP32[(($cycles)>>2)]=$549;
 label=294;break;
 case 94: 
 var $551=_ea_indexed($cycles);
 $ea=$551;
 var $552=HEAP32[((2270968)>>2)];
 var $553=$ea;
 var $554=_read826($553);
 var $555=_inst_sub8($552,$554);
 var $556=HEAP32[(($cycles)>>2)];
 var $557=((($556)+(4))|0);
 HEAP32[(($cycles)>>2)]=$557;
 label=294;break;
 case 95: 
 var $559=_ea_extended();
 $ea=$559;
 var $560=HEAP32[((2270968)>>2)];
 var $561=$ea;
 var $562=_read826($561);
 var $563=_inst_sub8($560,$562);
 var $564=HEAP32[(($cycles)>>2)];
 var $565=((($564)+(5))|0);
 HEAP32[(($cycles)>>2)]=$565;
 label=294;break;
 case 96: 
 var $567=HEAP32[((2270976)>>2)];
 var $568=_pc_read8();
 var $569=_inst_sbc($567,$568);
 HEAP32[((2270976)>>2)]=$569;
 var $570=HEAP32[(($cycles)>>2)];
 var $571=((($570)+(2))|0);
 HEAP32[(($cycles)>>2)]=$571;
 label=294;break;
 case 97: 
 var $573=_ea_direct();
 $ea=$573;
 var $574=HEAP32[((2270976)>>2)];
 var $575=$ea;
 var $576=_read826($575);
 var $577=_inst_sbc($574,$576);
 HEAP32[((2270976)>>2)]=$577;
 var $578=HEAP32[(($cycles)>>2)];
 var $579=((($578)+(4))|0);
 HEAP32[(($cycles)>>2)]=$579;
 label=294;break;
 case 98: 
 var $581=_ea_indexed($cycles);
 $ea=$581;
 var $582=HEAP32[((2270976)>>2)];
 var $583=$ea;
 var $584=_read826($583);
 var $585=_inst_sbc($582,$584);
 HEAP32[((2270976)>>2)]=$585;
 var $586=HEAP32[(($cycles)>>2)];
 var $587=((($586)+(4))|0);
 HEAP32[(($cycles)>>2)]=$587;
 label=294;break;
 case 99: 
 var $589=_ea_extended();
 $ea=$589;
 var $590=HEAP32[((2270976)>>2)];
 var $591=$ea;
 var $592=_read826($591);
 var $593=_inst_sbc($590,$592);
 HEAP32[((2270976)>>2)]=$593;
 var $594=HEAP32[(($cycles)>>2)];
 var $595=((($594)+(5))|0);
 HEAP32[(($cycles)>>2)]=$595;
 label=294;break;
 case 100: 
 var $597=HEAP32[((2270968)>>2)];
 var $598=_pc_read8();
 var $599=_inst_sbc($597,$598);
 HEAP32[((2270968)>>2)]=$599;
 var $600=HEAP32[(($cycles)>>2)];
 var $601=((($600)+(2))|0);
 HEAP32[(($cycles)>>2)]=$601;
 label=294;break;
 case 101: 
 var $603=_ea_direct();
 $ea=$603;
 var $604=HEAP32[((2270968)>>2)];
 var $605=$ea;
 var $606=_read826($605);
 var $607=_inst_sbc($604,$606);
 HEAP32[((2270968)>>2)]=$607;
 var $608=HEAP32[(($cycles)>>2)];
 var $609=((($608)+(4))|0);
 HEAP32[(($cycles)>>2)]=$609;
 label=294;break;
 case 102: 
 var $611=_ea_indexed($cycles);
 $ea=$611;
 var $612=HEAP32[((2270968)>>2)];
 var $613=$ea;
 var $614=_read826($613);
 var $615=_inst_sbc($612,$614);
 HEAP32[((2270968)>>2)]=$615;
 var $616=HEAP32[(($cycles)>>2)];
 var $617=((($616)+(4))|0);
 HEAP32[(($cycles)>>2)]=$617;
 label=294;break;
 case 103: 
 var $619=_ea_extended();
 $ea=$619;
 var $620=HEAP32[((2270968)>>2)];
 var $621=$ea;
 var $622=_read826($621);
 var $623=_inst_sbc($620,$622);
 HEAP32[((2270968)>>2)]=$623;
 var $624=HEAP32[(($cycles)>>2)];
 var $625=((($624)+(5))|0);
 HEAP32[(($cycles)>>2)]=$625;
 label=294;break;
 case 104: 
 var $627=HEAP32[((2270976)>>2)];
 var $628=_pc_read8();
 var $629=_inst_and($627,$628);
 HEAP32[((2270976)>>2)]=$629;
 var $630=HEAP32[(($cycles)>>2)];
 var $631=((($630)+(2))|0);
 HEAP32[(($cycles)>>2)]=$631;
 label=294;break;
 case 105: 
 var $633=_ea_direct();
 $ea=$633;
 var $634=HEAP32[((2270976)>>2)];
 var $635=$ea;
 var $636=_read826($635);
 var $637=_inst_and($634,$636);
 HEAP32[((2270976)>>2)]=$637;
 var $638=HEAP32[(($cycles)>>2)];
 var $639=((($638)+(4))|0);
 HEAP32[(($cycles)>>2)]=$639;
 label=294;break;
 case 106: 
 var $641=_ea_indexed($cycles);
 $ea=$641;
 var $642=HEAP32[((2270976)>>2)];
 var $643=$ea;
 var $644=_read826($643);
 var $645=_inst_and($642,$644);
 HEAP32[((2270976)>>2)]=$645;
 var $646=HEAP32[(($cycles)>>2)];
 var $647=((($646)+(4))|0);
 HEAP32[(($cycles)>>2)]=$647;
 label=294;break;
 case 107: 
 var $649=_ea_extended();
 $ea=$649;
 var $650=HEAP32[((2270976)>>2)];
 var $651=$ea;
 var $652=_read826($651);
 var $653=_inst_and($650,$652);
 HEAP32[((2270976)>>2)]=$653;
 var $654=HEAP32[(($cycles)>>2)];
 var $655=((($654)+(5))|0);
 HEAP32[(($cycles)>>2)]=$655;
 label=294;break;
 case 108: 
 var $657=HEAP32[((2270968)>>2)];
 var $658=_pc_read8();
 var $659=_inst_and($657,$658);
 HEAP32[((2270968)>>2)]=$659;
 var $660=HEAP32[(($cycles)>>2)];
 var $661=((($660)+(2))|0);
 HEAP32[(($cycles)>>2)]=$661;
 label=294;break;
 case 109: 
 var $663=_ea_direct();
 $ea=$663;
 var $664=HEAP32[((2270968)>>2)];
 var $665=$ea;
 var $666=_read826($665);
 var $667=_inst_and($664,$666);
 HEAP32[((2270968)>>2)]=$667;
 var $668=HEAP32[(($cycles)>>2)];
 var $669=((($668)+(4))|0);
 HEAP32[(($cycles)>>2)]=$669;
 label=294;break;
 case 110: 
 var $671=_ea_indexed($cycles);
 $ea=$671;
 var $672=HEAP32[((2270968)>>2)];
 var $673=$ea;
 var $674=_read826($673);
 var $675=_inst_and($672,$674);
 HEAP32[((2270968)>>2)]=$675;
 var $676=HEAP32[(($cycles)>>2)];
 var $677=((($676)+(4))|0);
 HEAP32[(($cycles)>>2)]=$677;
 label=294;break;
 case 111: 
 var $679=_ea_extended();
 $ea=$679;
 var $680=HEAP32[((2270968)>>2)];
 var $681=$ea;
 var $682=_read826($681);
 var $683=_inst_and($680,$682);
 HEAP32[((2270968)>>2)]=$683;
 var $684=HEAP32[(($cycles)>>2)];
 var $685=((($684)+(5))|0);
 HEAP32[(($cycles)>>2)]=$685;
 label=294;break;
 case 112: 
 var $687=HEAP32[((2270976)>>2)];
 var $688=_pc_read8();
 var $689=_inst_and($687,$688);
 var $690=HEAP32[(($cycles)>>2)];
 var $691=((($690)+(2))|0);
 HEAP32[(($cycles)>>2)]=$691;
 label=294;break;
 case 113: 
 var $693=_ea_direct();
 $ea=$693;
 var $694=HEAP32[((2270976)>>2)];
 var $695=$ea;
 var $696=_read826($695);
 var $697=_inst_and($694,$696);
 var $698=HEAP32[(($cycles)>>2)];
 var $699=((($698)+(4))|0);
 HEAP32[(($cycles)>>2)]=$699;
 label=294;break;
 case 114: 
 var $701=_ea_indexed($cycles);
 $ea=$701;
 var $702=HEAP32[((2270976)>>2)];
 var $703=$ea;
 var $704=_read826($703);
 var $705=_inst_and($702,$704);
 var $706=HEAP32[(($cycles)>>2)];
 var $707=((($706)+(4))|0);
 HEAP32[(($cycles)>>2)]=$707;
 label=294;break;
 case 115: 
 var $709=_ea_extended();
 $ea=$709;
 var $710=HEAP32[((2270976)>>2)];
 var $711=$ea;
 var $712=_read826($711);
 var $713=_inst_and($710,$712);
 var $714=HEAP32[(($cycles)>>2)];
 var $715=((($714)+(5))|0);
 HEAP32[(($cycles)>>2)]=$715;
 label=294;break;
 case 116: 
 var $717=HEAP32[((2270968)>>2)];
 var $718=_pc_read8();
 var $719=_inst_and($717,$718);
 var $720=HEAP32[(($cycles)>>2)];
 var $721=((($720)+(2))|0);
 HEAP32[(($cycles)>>2)]=$721;
 label=294;break;
 case 117: 
 var $723=_ea_direct();
 $ea=$723;
 var $724=HEAP32[((2270968)>>2)];
 var $725=$ea;
 var $726=_read826($725);
 var $727=_inst_and($724,$726);
 var $728=HEAP32[(($cycles)>>2)];
 var $729=((($728)+(4))|0);
 HEAP32[(($cycles)>>2)]=$729;
 label=294;break;
 case 118: 
 var $731=_ea_indexed($cycles);
 $ea=$731;
 var $732=HEAP32[((2270968)>>2)];
 var $733=$ea;
 var $734=_read826($733);
 var $735=_inst_and($732,$734);
 var $736=HEAP32[(($cycles)>>2)];
 var $737=((($736)+(4))|0);
 HEAP32[(($cycles)>>2)]=$737;
 label=294;break;
 case 119: 
 var $739=_ea_extended();
 $ea=$739;
 var $740=HEAP32[((2270968)>>2)];
 var $741=$ea;
 var $742=_read826($741);
 var $743=_inst_and($740,$742);
 var $744=HEAP32[(($cycles)>>2)];
 var $745=((($744)+(5))|0);
 HEAP32[(($cycles)>>2)]=$745;
 label=294;break;
 case 120: 
 var $747=_pc_read8();
 HEAP32[((2270976)>>2)]=$747;
 var $748=HEAP32[((2270976)>>2)];
 _inst_tst8($748);
 var $749=HEAP32[(($cycles)>>2)];
 var $750=((($749)+(2))|0);
 HEAP32[(($cycles)>>2)]=$750;
 label=294;break;
 case 121: 
 var $752=_ea_direct();
 $ea=$752;
 var $753=$ea;
 var $754=_read826($753);
 HEAP32[((2270976)>>2)]=$754;
 var $755=HEAP32[((2270976)>>2)];
 _inst_tst8($755);
 var $756=HEAP32[(($cycles)>>2)];
 var $757=((($756)+(4))|0);
 HEAP32[(($cycles)>>2)]=$757;
 label=294;break;
 case 122: 
 var $759=_ea_indexed($cycles);
 $ea=$759;
 var $760=$ea;
 var $761=_read826($760);
 HEAP32[((2270976)>>2)]=$761;
 var $762=HEAP32[((2270976)>>2)];
 _inst_tst8($762);
 var $763=HEAP32[(($cycles)>>2)];
 var $764=((($763)+(4))|0);
 HEAP32[(($cycles)>>2)]=$764;
 label=294;break;
 case 123: 
 var $766=_ea_extended();
 $ea=$766;
 var $767=$ea;
 var $768=_read826($767);
 HEAP32[((2270976)>>2)]=$768;
 var $769=HEAP32[((2270976)>>2)];
 _inst_tst8($769);
 var $770=HEAP32[(($cycles)>>2)];
 var $771=((($770)+(5))|0);
 HEAP32[(($cycles)>>2)]=$771;
 label=294;break;
 case 124: 
 var $773=_pc_read8();
 HEAP32[((2270968)>>2)]=$773;
 var $774=HEAP32[((2270968)>>2)];
 _inst_tst8($774);
 var $775=HEAP32[(($cycles)>>2)];
 var $776=((($775)+(2))|0);
 HEAP32[(($cycles)>>2)]=$776;
 label=294;break;
 case 125: 
 var $778=_ea_direct();
 $ea=$778;
 var $779=$ea;
 var $780=_read826($779);
 HEAP32[((2270968)>>2)]=$780;
 var $781=HEAP32[((2270968)>>2)];
 _inst_tst8($781);
 var $782=HEAP32[(($cycles)>>2)];
 var $783=((($782)+(4))|0);
 HEAP32[(($cycles)>>2)]=$783;
 label=294;break;
 case 126: 
 var $785=_ea_indexed($cycles);
 $ea=$785;
 var $786=$ea;
 var $787=_read826($786);
 HEAP32[((2270968)>>2)]=$787;
 var $788=HEAP32[((2270968)>>2)];
 _inst_tst8($788);
 var $789=HEAP32[(($cycles)>>2)];
 var $790=((($789)+(4))|0);
 HEAP32[(($cycles)>>2)]=$790;
 label=294;break;
 case 127: 
 var $792=_ea_extended();
 $ea=$792;
 var $793=$ea;
 var $794=_read826($793);
 HEAP32[((2270968)>>2)]=$794;
 var $795=HEAP32[((2270968)>>2)];
 _inst_tst8($795);
 var $796=HEAP32[(($cycles)>>2)];
 var $797=((($796)+(5))|0);
 HEAP32[(($cycles)>>2)]=$797;
 label=294;break;
 case 128: 
 var $799=_ea_direct();
 $ea=$799;
 var $800=$ea;
 var $801=HEAP32[((2270976)>>2)];
 _write828($800,$801);
 var $802=HEAP32[((2270976)>>2)];
 _inst_tst8($802);
 var $803=HEAP32[(($cycles)>>2)];
 var $804=((($803)+(4))|0);
 HEAP32[(($cycles)>>2)]=$804;
 label=294;break;
 case 129: 
 var $806=_ea_indexed($cycles);
 $ea=$806;
 var $807=$ea;
 var $808=HEAP32[((2270976)>>2)];
 _write828($807,$808);
 var $809=HEAP32[((2270976)>>2)];
 _inst_tst8($809);
 var $810=HEAP32[(($cycles)>>2)];
 var $811=((($810)+(4))|0);
 HEAP32[(($cycles)>>2)]=$811;
 label=294;break;
 case 130: 
 var $813=_ea_extended();
 $ea=$813;
 var $814=$ea;
 var $815=HEAP32[((2270976)>>2)];
 _write828($814,$815);
 var $816=HEAP32[((2270976)>>2)];
 _inst_tst8($816);
 var $817=HEAP32[(($cycles)>>2)];
 var $818=((($817)+(5))|0);
 HEAP32[(($cycles)>>2)]=$818;
 label=294;break;
 case 131: 
 var $820=_ea_direct();
 $ea=$820;
 var $821=$ea;
 var $822=HEAP32[((2270968)>>2)];
 _write828($821,$822);
 var $823=HEAP32[((2270968)>>2)];
 _inst_tst8($823);
 var $824=HEAP32[(($cycles)>>2)];
 var $825=((($824)+(4))|0);
 HEAP32[(($cycles)>>2)]=$825;
 label=294;break;
 case 132: 
 var $827=_ea_indexed($cycles);
 $ea=$827;
 var $828=$ea;
 var $829=HEAP32[((2270968)>>2)];
 _write828($828,$829);
 var $830=HEAP32[((2270968)>>2)];
 _inst_tst8($830);
 var $831=HEAP32[(($cycles)>>2)];
 var $832=((($831)+(4))|0);
 HEAP32[(($cycles)>>2)]=$832;
 label=294;break;
 case 133: 
 var $834=_ea_extended();
 $ea=$834;
 var $835=$ea;
 var $836=HEAP32[((2270968)>>2)];
 _write828($835,$836);
 var $837=HEAP32[((2270968)>>2)];
 _inst_tst8($837);
 var $838=HEAP32[(($cycles)>>2)];
 var $839=((($838)+(5))|0);
 HEAP32[(($cycles)>>2)]=$839;
 label=294;break;
 case 134: 
 var $841=HEAP32[((2270976)>>2)];
 var $842=_pc_read8();
 var $843=_inst_eor($841,$842);
 HEAP32[((2270976)>>2)]=$843;
 var $844=HEAP32[(($cycles)>>2)];
 var $845=((($844)+(2))|0);
 HEAP32[(($cycles)>>2)]=$845;
 label=294;break;
 case 135: 
 var $847=_ea_direct();
 $ea=$847;
 var $848=HEAP32[((2270976)>>2)];
 var $849=$ea;
 var $850=_read826($849);
 var $851=_inst_eor($848,$850);
 HEAP32[((2270976)>>2)]=$851;
 var $852=HEAP32[(($cycles)>>2)];
 var $853=((($852)+(4))|0);
 HEAP32[(($cycles)>>2)]=$853;
 label=294;break;
 case 136: 
 var $855=_ea_indexed($cycles);
 $ea=$855;
 var $856=HEAP32[((2270976)>>2)];
 var $857=$ea;
 var $858=_read826($857);
 var $859=_inst_eor($856,$858);
 HEAP32[((2270976)>>2)]=$859;
 var $860=HEAP32[(($cycles)>>2)];
 var $861=((($860)+(4))|0);
 HEAP32[(($cycles)>>2)]=$861;
 label=294;break;
 case 137: 
 var $863=_ea_extended();
 $ea=$863;
 var $864=HEAP32[((2270976)>>2)];
 var $865=$ea;
 var $866=_read826($865);
 var $867=_inst_eor($864,$866);
 HEAP32[((2270976)>>2)]=$867;
 var $868=HEAP32[(($cycles)>>2)];
 var $869=((($868)+(5))|0);
 HEAP32[(($cycles)>>2)]=$869;
 label=294;break;
 case 138: 
 var $871=HEAP32[((2270968)>>2)];
 var $872=_pc_read8();
 var $873=_inst_eor($871,$872);
 HEAP32[((2270968)>>2)]=$873;
 var $874=HEAP32[(($cycles)>>2)];
 var $875=((($874)+(2))|0);
 HEAP32[(($cycles)>>2)]=$875;
 label=294;break;
 case 139: 
 var $877=_ea_direct();
 $ea=$877;
 var $878=HEAP32[((2270968)>>2)];
 var $879=$ea;
 var $880=_read826($879);
 var $881=_inst_eor($878,$880);
 HEAP32[((2270968)>>2)]=$881;
 var $882=HEAP32[(($cycles)>>2)];
 var $883=((($882)+(4))|0);
 HEAP32[(($cycles)>>2)]=$883;
 label=294;break;
 case 140: 
 var $885=_ea_indexed($cycles);
 $ea=$885;
 var $886=HEAP32[((2270968)>>2)];
 var $887=$ea;
 var $888=_read826($887);
 var $889=_inst_eor($886,$888);
 HEAP32[((2270968)>>2)]=$889;
 var $890=HEAP32[(($cycles)>>2)];
 var $891=((($890)+(4))|0);
 HEAP32[(($cycles)>>2)]=$891;
 label=294;break;
 case 141: 
 var $893=_ea_extended();
 $ea=$893;
 var $894=HEAP32[((2270968)>>2)];
 var $895=$ea;
 var $896=_read826($895);
 var $897=_inst_eor($894,$896);
 HEAP32[((2270968)>>2)]=$897;
 var $898=HEAP32[(($cycles)>>2)];
 var $899=((($898)+(5))|0);
 HEAP32[(($cycles)>>2)]=$899;
 label=294;break;
 case 142: 
 var $901=HEAP32[((2270976)>>2)];
 var $902=_pc_read8();
 var $903=_inst_adc($901,$902);
 HEAP32[((2270976)>>2)]=$903;
 var $904=HEAP32[(($cycles)>>2)];
 var $905=((($904)+(2))|0);
 HEAP32[(($cycles)>>2)]=$905;
 label=294;break;
 case 143: 
 var $907=_ea_direct();
 $ea=$907;
 var $908=HEAP32[((2270976)>>2)];
 var $909=$ea;
 var $910=_read826($909);
 var $911=_inst_adc($908,$910);
 HEAP32[((2270976)>>2)]=$911;
 var $912=HEAP32[(($cycles)>>2)];
 var $913=((($912)+(4))|0);
 HEAP32[(($cycles)>>2)]=$913;
 label=294;break;
 case 144: 
 var $915=_ea_indexed($cycles);
 $ea=$915;
 var $916=HEAP32[((2270976)>>2)];
 var $917=$ea;
 var $918=_read826($917);
 var $919=_inst_adc($916,$918);
 HEAP32[((2270976)>>2)]=$919;
 var $920=HEAP32[(($cycles)>>2)];
 var $921=((($920)+(4))|0);
 HEAP32[(($cycles)>>2)]=$921;
 label=294;break;
 case 145: 
 var $923=_ea_extended();
 $ea=$923;
 var $924=HEAP32[((2270976)>>2)];
 var $925=$ea;
 var $926=_read826($925);
 var $927=_inst_adc($924,$926);
 HEAP32[((2270976)>>2)]=$927;
 var $928=HEAP32[(($cycles)>>2)];
 var $929=((($928)+(5))|0);
 HEAP32[(($cycles)>>2)]=$929;
 label=294;break;
 case 146: 
 var $931=HEAP32[((2270968)>>2)];
 var $932=_pc_read8();
 var $933=_inst_adc($931,$932);
 HEAP32[((2270968)>>2)]=$933;
 var $934=HEAP32[(($cycles)>>2)];
 var $935=((($934)+(2))|0);
 HEAP32[(($cycles)>>2)]=$935;
 label=294;break;
 case 147: 
 var $937=_ea_direct();
 $ea=$937;
 var $938=HEAP32[((2270968)>>2)];
 var $939=$ea;
 var $940=_read826($939);
 var $941=_inst_adc($938,$940);
 HEAP32[((2270968)>>2)]=$941;
 var $942=HEAP32[(($cycles)>>2)];
 var $943=((($942)+(4))|0);
 HEAP32[(($cycles)>>2)]=$943;
 label=294;break;
 case 148: 
 var $945=_ea_indexed($cycles);
 $ea=$945;
 var $946=HEAP32[((2270968)>>2)];
 var $947=$ea;
 var $948=_read826($947);
 var $949=_inst_adc($946,$948);
 HEAP32[((2270968)>>2)]=$949;
 var $950=HEAP32[(($cycles)>>2)];
 var $951=((($950)+(4))|0);
 HEAP32[(($cycles)>>2)]=$951;
 label=294;break;
 case 149: 
 var $953=_ea_extended();
 $ea=$953;
 var $954=HEAP32[((2270968)>>2)];
 var $955=$ea;
 var $956=_read826($955);
 var $957=_inst_adc($954,$956);
 HEAP32[((2270968)>>2)]=$957;
 var $958=HEAP32[(($cycles)>>2)];
 var $959=((($958)+(5))|0);
 HEAP32[(($cycles)>>2)]=$959;
 label=294;break;
 case 150: 
 var $961=HEAP32[((2270976)>>2)];
 var $962=_pc_read8();
 var $963=_inst_or($961,$962);
 HEAP32[((2270976)>>2)]=$963;
 var $964=HEAP32[(($cycles)>>2)];
 var $965=((($964)+(2))|0);
 HEAP32[(($cycles)>>2)]=$965;
 label=294;break;
 case 151: 
 var $967=_ea_direct();
 $ea=$967;
 var $968=HEAP32[((2270976)>>2)];
 var $969=$ea;
 var $970=_read826($969);
 var $971=_inst_or($968,$970);
 HEAP32[((2270976)>>2)]=$971;
 var $972=HEAP32[(($cycles)>>2)];
 var $973=((($972)+(4))|0);
 HEAP32[(($cycles)>>2)]=$973;
 label=294;break;
 case 152: 
 var $975=_ea_indexed($cycles);
 $ea=$975;
 var $976=HEAP32[((2270976)>>2)];
 var $977=$ea;
 var $978=_read826($977);
 var $979=_inst_or($976,$978);
 HEAP32[((2270976)>>2)]=$979;
 var $980=HEAP32[(($cycles)>>2)];
 var $981=((($980)+(4))|0);
 HEAP32[(($cycles)>>2)]=$981;
 label=294;break;
 case 153: 
 var $983=_ea_extended();
 $ea=$983;
 var $984=HEAP32[((2270976)>>2)];
 var $985=$ea;
 var $986=_read826($985);
 var $987=_inst_or($984,$986);
 HEAP32[((2270976)>>2)]=$987;
 var $988=HEAP32[(($cycles)>>2)];
 var $989=((($988)+(5))|0);
 HEAP32[(($cycles)>>2)]=$989;
 label=294;break;
 case 154: 
 var $991=HEAP32[((2270968)>>2)];
 var $992=_pc_read8();
 var $993=_inst_or($991,$992);
 HEAP32[((2270968)>>2)]=$993;
 var $994=HEAP32[(($cycles)>>2)];
 var $995=((($994)+(2))|0);
 HEAP32[(($cycles)>>2)]=$995;
 label=294;break;
 case 155: 
 var $997=_ea_direct();
 $ea=$997;
 var $998=HEAP32[((2270968)>>2)];
 var $999=$ea;
 var $1000=_read826($999);
 var $1001=_inst_or($998,$1000);
 HEAP32[((2270968)>>2)]=$1001;
 var $1002=HEAP32[(($cycles)>>2)];
 var $1003=((($1002)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1003;
 label=294;break;
 case 156: 
 var $1005=_ea_indexed($cycles);
 $ea=$1005;
 var $1006=HEAP32[((2270968)>>2)];
 var $1007=$ea;
 var $1008=_read826($1007);
 var $1009=_inst_or($1006,$1008);
 HEAP32[((2270968)>>2)]=$1009;
 var $1010=HEAP32[(($cycles)>>2)];
 var $1011=((($1010)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1011;
 label=294;break;
 case 157: 
 var $1013=_ea_extended();
 $ea=$1013;
 var $1014=HEAP32[((2270968)>>2)];
 var $1015=$ea;
 var $1016=_read826($1015);
 var $1017=_inst_or($1014,$1016);
 HEAP32[((2270968)>>2)]=$1017;
 var $1018=HEAP32[(($cycles)>>2)];
 var $1019=((($1018)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1019;
 label=294;break;
 case 158: 
 var $1021=HEAP32[((2270976)>>2)];
 var $1022=_pc_read8();
 var $1023=_inst_add8($1021,$1022);
 HEAP32[((2270976)>>2)]=$1023;
 var $1024=HEAP32[(($cycles)>>2)];
 var $1025=((($1024)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1025;
 label=294;break;
 case 159: 
 var $1027=_ea_direct();
 $ea=$1027;
 var $1028=HEAP32[((2270976)>>2)];
 var $1029=$ea;
 var $1030=_read826($1029);
 var $1031=_inst_add8($1028,$1030);
 HEAP32[((2270976)>>2)]=$1031;
 var $1032=HEAP32[(($cycles)>>2)];
 var $1033=((($1032)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1033;
 label=294;break;
 case 160: 
 var $1035=_ea_indexed($cycles);
 $ea=$1035;
 var $1036=HEAP32[((2270976)>>2)];
 var $1037=$ea;
 var $1038=_read826($1037);
 var $1039=_inst_add8($1036,$1038);
 HEAP32[((2270976)>>2)]=$1039;
 var $1040=HEAP32[(($cycles)>>2)];
 var $1041=((($1040)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1041;
 label=294;break;
 case 161: 
 var $1043=_ea_extended();
 $ea=$1043;
 var $1044=HEAP32[((2270976)>>2)];
 var $1045=$ea;
 var $1046=_read826($1045);
 var $1047=_inst_add8($1044,$1046);
 HEAP32[((2270976)>>2)]=$1047;
 var $1048=HEAP32[(($cycles)>>2)];
 var $1049=((($1048)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1049;
 label=294;break;
 case 162: 
 var $1051=HEAP32[((2270968)>>2)];
 var $1052=_pc_read8();
 var $1053=_inst_add8($1051,$1052);
 HEAP32[((2270968)>>2)]=$1053;
 var $1054=HEAP32[(($cycles)>>2)];
 var $1055=((($1054)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1055;
 label=294;break;
 case 163: 
 var $1057=_ea_direct();
 $ea=$1057;
 var $1058=HEAP32[((2270968)>>2)];
 var $1059=$ea;
 var $1060=_read826($1059);
 var $1061=_inst_add8($1058,$1060);
 HEAP32[((2270968)>>2)]=$1061;
 var $1062=HEAP32[(($cycles)>>2)];
 var $1063=((($1062)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1063;
 label=294;break;
 case 164: 
 var $1065=_ea_indexed($cycles);
 $ea=$1065;
 var $1066=HEAP32[((2270968)>>2)];
 var $1067=$ea;
 var $1068=_read826($1067);
 var $1069=_inst_add8($1066,$1068);
 HEAP32[((2270968)>>2)]=$1069;
 var $1070=HEAP32[(($cycles)>>2)];
 var $1071=((($1070)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1071;
 label=294;break;
 case 165: 
 var $1073=_ea_extended();
 $ea=$1073;
 var $1074=HEAP32[((2270968)>>2)];
 var $1075=$ea;
 var $1076=_read826($1075);
 var $1077=_inst_add8($1074,$1076);
 HEAP32[((2270968)>>2)]=$1077;
 var $1078=HEAP32[(($cycles)>>2)];
 var $1079=((($1078)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1079;
 label=294;break;
 case 166: 
 var $1081=_get_reg_d();
 var $1082=_pc_read16();
 var $1083=_inst_sub16($1081,$1082);
 _set_reg_d($1083);
 var $1084=HEAP32[(($cycles)>>2)];
 var $1085=((($1084)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1085;
 label=294;break;
 case 167: 
 var $1087=_ea_direct();
 $ea=$1087;
 var $1088=_get_reg_d();
 var $1089=$ea;
 var $1090=_read16($1089);
 var $1091=_inst_sub16($1088,$1090);
 _set_reg_d($1091);
 var $1092=HEAP32[(($cycles)>>2)];
 var $1093=((($1092)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1093;
 label=294;break;
 case 168: 
 var $1095=_ea_indexed($cycles);
 $ea=$1095;
 var $1096=_get_reg_d();
 var $1097=$ea;
 var $1098=_read16($1097);
 var $1099=_inst_sub16($1096,$1098);
 _set_reg_d($1099);
 var $1100=HEAP32[(($cycles)>>2)];
 var $1101=((($1100)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1101;
 label=294;break;
 case 169: 
 var $1103=_ea_extended();
 $ea=$1103;
 var $1104=_get_reg_d();
 var $1105=$ea;
 var $1106=_read16($1105);
 var $1107=_inst_sub16($1104,$1106);
 _set_reg_d($1107);
 var $1108=HEAP32[(($cycles)>>2)];
 var $1109=((($1108)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1109;
 label=294;break;
 case 170: 
 var $1111=HEAP32[((2270920)>>2)];
 var $1112=_pc_read16();
 var $1113=_inst_sub16($1111,$1112);
 var $1114=HEAP32[(($cycles)>>2)];
 var $1115=((($1114)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1115;
 label=294;break;
 case 171: 
 var $1117=_ea_direct();
 $ea=$1117;
 var $1118=HEAP32[((2270920)>>2)];
 var $1119=$ea;
 var $1120=_read16($1119);
 var $1121=_inst_sub16($1118,$1120);
 var $1122=HEAP32[(($cycles)>>2)];
 var $1123=((($1122)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1123;
 label=294;break;
 case 172: 
 var $1125=_ea_indexed($cycles);
 $ea=$1125;
 var $1126=HEAP32[((2270920)>>2)];
 var $1127=$ea;
 var $1128=_read16($1127);
 var $1129=_inst_sub16($1126,$1128);
 var $1130=HEAP32[(($cycles)>>2)];
 var $1131=((($1130)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1131;
 label=294;break;
 case 173: 
 var $1133=_ea_extended();
 $ea=$1133;
 var $1134=HEAP32[((2270920)>>2)];
 var $1135=$ea;
 var $1136=_read16($1135);
 var $1137=_inst_sub16($1134,$1136);
 var $1138=HEAP32[(($cycles)>>2)];
 var $1139=((($1138)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1139;
 label=294;break;
 case 174: 
 var $1141=_pc_read16();
 HEAP32[((2270920)>>2)]=$1141;
 var $1142=HEAP32[((2270920)>>2)];
 _inst_tst16($1142);
 var $1143=HEAP32[(($cycles)>>2)];
 var $1144=((($1143)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1144;
 label=294;break;
 case 175: 
 var $1146=_ea_direct();
 $ea=$1146;
 var $1147=$ea;
 var $1148=_read16($1147);
 HEAP32[((2270920)>>2)]=$1148;
 var $1149=HEAP32[((2270920)>>2)];
 _inst_tst16($1149);
 var $1150=HEAP32[(($cycles)>>2)];
 var $1151=((($1150)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1151;
 label=294;break;
 case 176: 
 var $1153=_ea_indexed($cycles);
 $ea=$1153;
 var $1154=$ea;
 var $1155=_read16($1154);
 HEAP32[((2270920)>>2)]=$1155;
 var $1156=HEAP32[((2270920)>>2)];
 _inst_tst16($1156);
 var $1157=HEAP32[(($cycles)>>2)];
 var $1158=((($1157)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1158;
 label=294;break;
 case 177: 
 var $1160=_ea_extended();
 $ea=$1160;
 var $1161=$ea;
 var $1162=_read16($1161);
 HEAP32[((2270920)>>2)]=$1162;
 var $1163=HEAP32[((2270920)>>2)];
 _inst_tst16($1163);
 var $1164=HEAP32[(($cycles)>>2)];
 var $1165=((($1164)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1165;
 label=294;break;
 case 178: 
 var $1167=_pc_read16();
 HEAP32[((2270928)>>2)]=$1167;
 var $1168=HEAP32[((2270928)>>2)];
 _inst_tst16($1168);
 var $1169=HEAP32[(($cycles)>>2)];
 var $1170=((($1169)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1170;
 label=294;break;
 case 179: 
 var $1172=_ea_direct();
 $ea=$1172;
 var $1173=$ea;
 var $1174=_read16($1173);
 HEAP32[((2270928)>>2)]=$1174;
 var $1175=HEAP32[((2270928)>>2)];
 _inst_tst16($1175);
 var $1176=HEAP32[(($cycles)>>2)];
 var $1177=((($1176)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1177;
 label=294;break;
 case 180: 
 var $1179=_ea_indexed($cycles);
 $ea=$1179;
 var $1180=$ea;
 var $1181=_read16($1180);
 HEAP32[((2270928)>>2)]=$1181;
 var $1182=HEAP32[((2270928)>>2)];
 _inst_tst16($1182);
 var $1183=HEAP32[(($cycles)>>2)];
 var $1184=((($1183)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1184;
 label=294;break;
 case 181: 
 var $1186=_ea_extended();
 $ea=$1186;
 var $1187=$ea;
 var $1188=_read16($1187);
 HEAP32[((2270928)>>2)]=$1188;
 var $1189=HEAP32[((2270928)>>2)];
 _inst_tst16($1189);
 var $1190=HEAP32[(($cycles)>>2)];
 var $1191=((($1190)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1191;
 label=294;break;
 case 182: 
 var $1193=_ea_direct();
 $ea=$1193;
 var $1194=$ea;
 var $1195=HEAP32[((2270920)>>2)];
 _write16($1194,$1195);
 var $1196=HEAP32[((2270920)>>2)];
 _inst_tst16($1196);
 var $1197=HEAP32[(($cycles)>>2)];
 var $1198=((($1197)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1198;
 label=294;break;
 case 183: 
 var $1200=_ea_indexed($cycles);
 $ea=$1200;
 var $1201=$ea;
 var $1202=HEAP32[((2270920)>>2)];
 _write16($1201,$1202);
 var $1203=HEAP32[((2270920)>>2)];
 _inst_tst16($1203);
 var $1204=HEAP32[(($cycles)>>2)];
 var $1205=((($1204)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1205;
 label=294;break;
 case 184: 
 var $1207=_ea_extended();
 $ea=$1207;
 var $1208=$ea;
 var $1209=HEAP32[((2270920)>>2)];
 _write16($1208,$1209);
 var $1210=HEAP32[((2270920)>>2)];
 _inst_tst16($1210);
 var $1211=HEAP32[(($cycles)>>2)];
 var $1212=((($1211)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1212;
 label=294;break;
 case 185: 
 var $1214=_ea_direct();
 $ea=$1214;
 var $1215=$ea;
 var $1216=HEAP32[((2270928)>>2)];
 _write16($1215,$1216);
 var $1217=HEAP32[((2270928)>>2)];
 _inst_tst16($1217);
 var $1218=HEAP32[(($cycles)>>2)];
 var $1219=((($1218)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1219;
 label=294;break;
 case 186: 
 var $1221=_ea_indexed($cycles);
 $ea=$1221;
 var $1222=$ea;
 var $1223=HEAP32[((2270928)>>2)];
 _write16($1222,$1223);
 var $1224=HEAP32[((2270928)>>2)];
 _inst_tst16($1224);
 var $1225=HEAP32[(($cycles)>>2)];
 var $1226=((($1225)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1226;
 label=294;break;
 case 187: 
 var $1228=_ea_extended();
 $ea=$1228;
 var $1229=$ea;
 var $1230=HEAP32[((2270928)>>2)];
 _write16($1229,$1230);
 var $1231=HEAP32[((2270928)>>2)];
 _inst_tst16($1231);
 var $1232=HEAP32[(($cycles)>>2)];
 var $1233=((($1232)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1233;
 label=294;break;
 case 188: 
 var $1235=_get_reg_d();
 var $1236=_pc_read16();
 var $1237=_inst_add16($1235,$1236);
 _set_reg_d($1237);
 var $1238=HEAP32[(($cycles)>>2)];
 var $1239=((($1238)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1239;
 label=294;break;
 case 189: 
 var $1241=_ea_direct();
 $ea=$1241;
 var $1242=_get_reg_d();
 var $1243=$ea;
 var $1244=_read16($1243);
 var $1245=_inst_add16($1242,$1244);
 _set_reg_d($1245);
 var $1246=HEAP32[(($cycles)>>2)];
 var $1247=((($1246)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1247;
 label=294;break;
 case 190: 
 var $1249=_ea_indexed($cycles);
 $ea=$1249;
 var $1250=_get_reg_d();
 var $1251=$ea;
 var $1252=_read16($1251);
 var $1253=_inst_add16($1250,$1252);
 _set_reg_d($1253);
 var $1254=HEAP32[(($cycles)>>2)];
 var $1255=((($1254)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1255;
 label=294;break;
 case 191: 
 var $1257=_ea_extended();
 $ea=$1257;
 var $1258=_get_reg_d();
 var $1259=$ea;
 var $1260=_read16($1259);
 var $1261=_inst_add16($1258,$1260);
 _set_reg_d($1261);
 var $1262=HEAP32[(($cycles)>>2)];
 var $1263=((($1262)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1263;
 label=294;break;
 case 192: 
 var $1265=_pc_read16();
 _set_reg_d($1265);
 var $1266=_get_reg_d();
 _inst_tst16($1266);
 var $1267=HEAP32[(($cycles)>>2)];
 var $1268=((($1267)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1268;
 label=294;break;
 case 193: 
 var $1270=_ea_direct();
 $ea=$1270;
 var $1271=$ea;
 var $1272=_read16($1271);
 _set_reg_d($1272);
 var $1273=_get_reg_d();
 _inst_tst16($1273);
 var $1274=HEAP32[(($cycles)>>2)];
 var $1275=((($1274)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1275;
 label=294;break;
 case 194: 
 var $1277=_ea_indexed($cycles);
 $ea=$1277;
 var $1278=$ea;
 var $1279=_read16($1278);
 _set_reg_d($1279);
 var $1280=_get_reg_d();
 _inst_tst16($1280);
 var $1281=HEAP32[(($cycles)>>2)];
 var $1282=((($1281)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1282;
 label=294;break;
 case 195: 
 var $1284=_ea_extended();
 $ea=$1284;
 var $1285=$ea;
 var $1286=_read16($1285);
 _set_reg_d($1286);
 var $1287=_get_reg_d();
 _inst_tst16($1287);
 var $1288=HEAP32[(($cycles)>>2)];
 var $1289=((($1288)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1289;
 label=294;break;
 case 196: 
 var $1291=_ea_direct();
 $ea=$1291;
 var $1292=$ea;
 var $1293=_get_reg_d();
 _write16($1292,$1293);
 var $1294=_get_reg_d();
 _inst_tst16($1294);
 var $1295=HEAP32[(($cycles)>>2)];
 var $1296=((($1295)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1296;
 label=294;break;
 case 197: 
 var $1298=_ea_indexed($cycles);
 $ea=$1298;
 var $1299=$ea;
 var $1300=_get_reg_d();
 _write16($1299,$1300);
 var $1301=_get_reg_d();
 _inst_tst16($1301);
 var $1302=HEAP32[(($cycles)>>2)];
 var $1303=((($1302)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1303;
 label=294;break;
 case 198: 
 var $1305=_ea_extended();
 $ea=$1305;
 var $1306=$ea;
 var $1307=_get_reg_d();
 _write16($1306,$1307);
 var $1308=_get_reg_d();
 _inst_tst16($1308);
 var $1309=HEAP32[(($cycles)>>2)];
 var $1310=((($1309)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1310;
 label=294;break;
 case 199: 
 var $1312=HEAP32[(($cycles)>>2)];
 var $1313=((($1312)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1313;
 label=294;break;
 case 200: 
 var $1315=HEAP32[((2270976)>>2)];
 var $1316=$1315&255;
 var $1317=HEAP32[((2270968)>>2)];
 var $1318=$1317&255;
 var $1319=(Math_imul($1316,$1318)|0);
 $r=$1319;
 var $1320=$r;
 _set_reg_d($1320);
 var $1321=$r;
 var $1322=_test_z16($1321);
 _set_cc(4,$1322);
 var $1323=$r;
 var $1324=$1323>>>7;
 var $1325=$1324&1;
 _set_cc(1,$1325);
 var $1326=HEAP32[(($cycles)>>2)];
 var $1327=((($1326)+(11))|0);
 HEAP32[(($cycles)>>2)]=$1327;
 label=294;break;
 case 201: 
 var $1329=$op;
 _inst_bra8(0,$1329,$cycles);
 label=294;break;
 case 202: 
 var $1331=_get_cc(1);
 var $1332=_get_cc(4);
 var $1333=$1331|$1332;
 var $1334=$op;
 _inst_bra8($1333,$1334,$cycles);
 label=294;break;
 case 203: 
 var $1336=_get_cc(1);
 var $1337=$op;
 _inst_bra8($1336,$1337,$cycles);
 label=294;break;
 case 204: 
 var $1339=_get_cc(4);
 var $1340=$op;
 _inst_bra8($1339,$1340,$cycles);
 label=294;break;
 case 205: 
 var $1342=_get_cc(2);
 var $1343=$op;
 _inst_bra8($1342,$1343,$cycles);
 label=294;break;
 case 206: 
 var $1345=_get_cc(8);
 var $1346=$op;
 _inst_bra8($1345,$1346,$cycles);
 label=294;break;
 case 207: 
 var $1348=_get_cc(8);
 var $1349=_get_cc(2);
 var $1350=$1348^$1349;
 var $1351=$op;
 _inst_bra8($1350,$1351,$cycles);
 label=294;break;
 case 208: 
 var $1353=_get_cc(4);
 var $1354=_get_cc(8);
 var $1355=_get_cc(2);
 var $1356=$1354^$1355;
 var $1357=$1353|$1356;
 var $1358=$op;
 _inst_bra8($1357,$1358,$cycles);
 label=294;break;
 case 209: 
 var $1360=_pc_read16();
 $r=$1360;
 var $1361=$r;
 var $1362=HEAP32[((2270944)>>2)];
 var $1363=((($1362)+($1361))|0);
 HEAP32[((2270944)>>2)]=$1363;
 var $1364=HEAP32[(($cycles)>>2)];
 var $1365=((($1364)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1365;
 label=294;break;
 case 210: 
 var $1367=_pc_read16();
 $r=$1367;
 var $1368=HEAP32[((2270944)>>2)];
 _push16(2270936,$1368);
 var $1369=$r;
 var $1370=HEAP32[((2270944)>>2)];
 var $1371=((($1370)+($1369))|0);
 HEAP32[((2270944)>>2)]=$1371;
 var $1372=HEAP32[(($cycles)>>2)];
 var $1373=((($1372)+(9))|0);
 HEAP32[(($cycles)>>2)]=$1373;
 label=294;break;
 case 211: 
 var $1375=_pc_read8();
 $r=$1375;
 var $1376=HEAP32[((2270944)>>2)];
 _push16(2270936,$1376);
 var $1377=$r;
 var $1378=_sign_extend($1377);
 var $1379=HEAP32[((2270944)>>2)];
 var $1380=((($1379)+($1378))|0);
 HEAP32[((2270944)>>2)]=$1380;
 var $1381=HEAP32[(($cycles)>>2)];
 var $1382=((($1381)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1382;
 label=294;break;
 case 212: 
 var $1384=_ea_direct();
 $ea=$1384;
 var $1385=HEAP32[((2270944)>>2)];
 _push16(2270936,$1385);
 var $1386=$ea;
 HEAP32[((2270944)>>2)]=$1386;
 var $1387=HEAP32[(($cycles)>>2)];
 var $1388=((($1387)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1388;
 label=294;break;
 case 213: 
 var $1390=_ea_indexed($cycles);
 $ea=$1390;
 var $1391=HEAP32[((2270944)>>2)];
 _push16(2270936,$1391);
 var $1392=$ea;
 HEAP32[((2270944)>>2)]=$1392;
 var $1393=HEAP32[(($cycles)>>2)];
 var $1394=((($1393)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1394;
 label=294;break;
 case 214: 
 var $1396=_ea_extended();
 $ea=$1396;
 var $1397=HEAP32[((2270944)>>2)];
 _push16(2270936,$1397);
 var $1398=$ea;
 HEAP32[((2270944)>>2)]=$1398;
 var $1399=HEAP32[(($cycles)>>2)];
 var $1400=((($1399)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1400;
 label=294;break;
 case 215: 
 var $1402=_ea_indexed($cycles);
 HEAP32[((2270920)>>2)]=$1402;
 var $1403=HEAP32[((2270920)>>2)];
 var $1404=_test_z16($1403);
 _set_cc(4,$1404);
 var $1405=HEAP32[(($cycles)>>2)];
 var $1406=((($1405)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1406;
 label=294;break;
 case 216: 
 var $1408=_ea_indexed($cycles);
 HEAP32[((2270912)>>2)]=$1408;
 var $1409=HEAP32[((2270912)>>2)];
 var $1410=_test_z16($1409);
 _set_cc(4,$1410);
 var $1411=HEAP32[(($cycles)>>2)];
 var $1412=((($1411)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1412;
 label=294;break;
 case 217: 
 var $1414=_ea_indexed($cycles);
 HEAP32[((2270936)>>2)]=$1414;
 var $1415=HEAP32[(($cycles)>>2)];
 var $1416=((($1415)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1416;
 label=294;break;
 case 218: 
 var $1418=_ea_indexed($cycles);
 HEAP32[((2270928)>>2)]=$1418;
 var $1419=HEAP32[(($cycles)>>2)];
 var $1420=((($1419)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1420;
 label=294;break;
 case 219: 
 var $1422=_pc_read8();
 var $1423=HEAP32[((2270928)>>2)];
 _inst_psh($1422,2270936,$1423,$cycles);
 var $1424=HEAP32[(($cycles)>>2)];
 var $1425=((($1424)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1425;
 label=294;break;
 case 220: 
 var $1427=_pc_read8();
 _inst_pul($1427,2270936,2270928,$cycles);
 var $1428=HEAP32[(($cycles)>>2)];
 var $1429=((($1428)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1429;
 label=294;break;
 case 221: 
 var $1431=_pc_read8();
 var $1432=HEAP32[((2270936)>>2)];
 _inst_psh($1431,2270928,$1432,$cycles);
 var $1433=HEAP32[(($cycles)>>2)];
 var $1434=((($1433)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1434;
 label=294;break;
 case 222: 
 var $1436=_pc_read8();
 _inst_pul($1436,2270928,2270936,$cycles);
 var $1437=HEAP32[(($cycles)>>2)];
 var $1438=((($1437)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1438;
 label=294;break;
 case 223: 
 var $1440=_pull16(2270936);
 HEAP32[((2270944)>>2)]=$1440;
 var $1441=HEAP32[(($cycles)>>2)];
 var $1442=((($1441)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1442;
 label=294;break;
 case 224: 
 var $1444=HEAP32[((2270968)>>2)];
 var $1445=$1444&255;
 var $1446=HEAP32[((2270920)>>2)];
 var $1447=((($1446)+($1445))|0);
 HEAP32[((2270920)>>2)]=$1447;
 var $1448=HEAP32[(($cycles)>>2)];
 var $1449=((($1448)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1449;
 label=294;break;
 case 225: 
 var $1451=_pc_read8();
 var $1452=HEAP32[((2270960)>>2)];
 var $1453=$1452|$1451;
 HEAP32[((2270960)>>2)]=$1453;
 var $1454=HEAP32[(($cycles)>>2)];
 var $1455=((($1454)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1455;
 label=294;break;
 case 226: 
 var $1457=_pc_read8();
 var $1458=HEAP32[((2270960)>>2)];
 var $1459=$1458&$1457;
 HEAP32[((2270960)>>2)]=$1459;
 var $1460=HEAP32[(($cycles)>>2)];
 var $1461=((($1460)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1461;
 label=294;break;
 case 227: 
 var $1463=HEAP32[((2270968)>>2)];
 var $1464=_sign_extend($1463);
 _set_reg_d($1464);
 var $1465=HEAP32[((2270976)>>2)];
 var $1466=_test_n($1465);
 _set_cc(8,$1466);
 var $1467=_get_reg_d();
 var $1468=_test_z16($1467);
 _set_cc(4,$1468);
 var $1469=HEAP32[(($cycles)>>2)];
 var $1470=((($1469)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1470;
 label=294;break;
 case 228: 
 _inst_exg();
 var $1472=HEAP32[(($cycles)>>2)];
 var $1473=((($1472)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1473;
 label=294;break;
 case 229: 
 _inst_tfr();
 var $1475=HEAP32[(($cycles)>>2)];
 var $1476=((($1475)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1476;
 label=294;break;
 case 230: 
 var $1478=_get_cc(128);
 var $1479=($1478|0)!=0;
 if($1479){label=231;break;}else{label=232;break;}
 case 231: 
 _inst_pul(255,2270936,2270928,$cycles);
 label=233;break;
 case 232: 
 _inst_pul(129,2270936,2270928,$cycles);
 label=233;break;
 case 233: 
 var $1483=HEAP32[(($cycles)>>2)];
 var $1484=((($1483)+(3))|0);
 HEAP32[(($cycles)>>2)]=$1484;
 label=294;break;
 case 234: 
 _set_cc(128,1);
 var $1486=HEAP32[((2270928)>>2)];
 _inst_psh(255,2270936,$1486,$cycles);
 _set_cc(16,1);
 _set_cc(64,1);
 var $1487=_read16(65530);
 HEAP32[((2270944)>>2)]=$1487;
 var $1488=HEAP32[(($cycles)>>2)];
 var $1489=((($1488)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1489;
 label=294;break;
 case 235: 
 HEAP32[((2272072)>>2)]=1;
 var $1491=HEAP32[(($cycles)>>2)];
 var $1492=((($1491)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1492;
 label=294;break;
 case 236: 
 var $1494=HEAP32[((2270976)>>2)];
 $i0=$1494;
 $i1=0;
 var $1495=HEAP32[((2270976)>>2)];
 var $1496=$1495&15;
 var $1497=($1496>>>0)>9;
 if($1497){label=238;break;}else{label=237;break;}
 case 237: 
 var $1499=_get_cc(32);
 var $1500=($1499|0)==1;
 if($1500){label=238;break;}else{label=239;break;}
 case 238: 
 var $1502=$i1;
 var $1503=$1502|6;
 $i1=$1503;
 label=239;break;
 case 239: 
 var $1505=HEAP32[((2270976)>>2)];
 var $1506=$1505&240;
 var $1507=($1506>>>0)>128;
 if($1507){label=240;break;}else{label=242;break;}
 case 240: 
 var $1509=HEAP32[((2270976)>>2)];
 var $1510=$1509&15;
 var $1511=($1510>>>0)>9;
 if($1511){label=241;break;}else{label=242;break;}
 case 241: 
 var $1513=$i1;
 var $1514=$1513|96;
 $i1=$1514;
 label=242;break;
 case 242: 
 var $1516=HEAP32[((2270976)>>2)];
 var $1517=$1516&240;
 var $1518=($1517>>>0)>144;
 if($1518){label=244;break;}else{label=243;break;}
 case 243: 
 var $1520=_get_cc(1);
 var $1521=($1520|0)==1;
 if($1521){label=244;break;}else{label=245;break;}
 case 244: 
 var $1523=$i1;
 var $1524=$1523|96;
 $i1=$1524;
 label=245;break;
 case 245: 
 var $1526=$i0;
 var $1527=$i1;
 var $1528=((($1526)+($1527))|0);
 HEAP32[((2270976)>>2)]=$1528;
 var $1529=HEAP32[((2270976)>>2)];
 var $1530=_test_n($1529);
 _set_cc(8,$1530);
 var $1531=HEAP32[((2270976)>>2)];
 var $1532=_test_z8($1531);
 _set_cc(4,$1532);
 _set_cc(2,0);
 var $1533=$i0;
 var $1534=$i1;
 var $1535=HEAP32[((2270976)>>2)];
 var $1536=_test_c($1533,$1534,$1535,0);
 _set_cc(1,$1536);
 var $1537=HEAP32[(($cycles)>>2)];
 var $1538=((($1537)+(2))|0);
 HEAP32[(($cycles)>>2)]=$1538;
 label=294;break;
 case 246: 
 var $1540=_pc_read8();
 var $1541=HEAP32[((2270960)>>2)];
 var $1542=$1541&$1540;
 HEAP32[((2270960)>>2)]=$1542;
 _set_cc(128,1);
 var $1543=HEAP32[((2270928)>>2)];
 _inst_psh(255,2270936,$1543,$cycles);
 HEAP32[((2272072)>>2)]=2;
 var $1544=HEAP32[(($cycles)>>2)];
 var $1545=((($1544)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1545;
 label=294;break;
 case 247: 
 var $1547=_pc_read8();
 $op=$1547;
 var $1548=$op;
 switch(($1548|0)){case 32:case 33:{ label=248;break;}case 34:case 35:{ label=249;break;}case 36:case 37:{ label=250;break;}case 38:case 39:{ label=251;break;}case 40:case 41:{ label=252;break;}case 42:case 43:{ label=253;break;}case 44:case 45:{ label=254;break;}case 46:case 47:{ label=255;break;}case 131:{ label=256;break;}case 147:{ label=257;break;}case 163:{ label=258;break;}case 179:{ label=259;break;}case 140:{ label=260;break;}case 156:{ label=261;break;}case 172:{ label=262;break;}case 188:{ label=263;break;}case 142:{ label=264;break;}case 158:{ label=265;break;}case 174:{ label=266;break;}case 190:{ label=267;break;}case 159:{ label=268;break;}case 175:{ label=269;break;}case 191:{ label=270;break;}case 206:{ label=271;break;}case 222:{ label=272;break;}case 238:{ label=273;break;}case 254:{ label=274;break;}case 223:{ label=275;break;}case 239:{ label=276;break;}case 255:{ label=277;break;}case 63:{ label=278;break;}default:{label=279;break;}}break;
 case 248: 
 var $1550=$op;
 _inst_bra16(0,$1550,$cycles);
 label=280;break;
 case 249: 
 var $1552=_get_cc(1);
 var $1553=_get_cc(4);
 var $1554=$1552|$1553;
 var $1555=$op;
 _inst_bra16($1554,$1555,$cycles);
 label=280;break;
 case 250: 
 var $1557=_get_cc(1);
 var $1558=$op;
 _inst_bra16($1557,$1558,$cycles);
 label=280;break;
 case 251: 
 var $1560=_get_cc(4);
 var $1561=$op;
 _inst_bra16($1560,$1561,$cycles);
 label=280;break;
 case 252: 
 var $1563=_get_cc(2);
 var $1564=$op;
 _inst_bra16($1563,$1564,$cycles);
 label=280;break;
 case 253: 
 var $1566=_get_cc(8);
 var $1567=$op;
 _inst_bra16($1566,$1567,$cycles);
 label=280;break;
 case 254: 
 var $1569=_get_cc(8);
 var $1570=_get_cc(2);
 var $1571=$1569^$1570;
 var $1572=$op;
 _inst_bra16($1571,$1572,$cycles);
 label=280;break;
 case 255: 
 var $1574=_get_cc(4);
 var $1575=_get_cc(8);
 var $1576=_get_cc(2);
 var $1577=$1575^$1576;
 var $1578=$1574|$1577;
 var $1579=$op;
 _inst_bra16($1578,$1579,$cycles);
 label=280;break;
 case 256: 
 var $1581=_get_reg_d();
 var $1582=_pc_read16();
 var $1583=_inst_sub16($1581,$1582);
 var $1584=HEAP32[(($cycles)>>2)];
 var $1585=((($1584)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1585;
 label=280;break;
 case 257: 
 var $1587=_ea_direct();
 $ea=$1587;
 var $1588=_get_reg_d();
 var $1589=$ea;
 var $1590=_read16($1589);
 var $1591=_inst_sub16($1588,$1590);
 var $1592=HEAP32[(($cycles)>>2)];
 var $1593=((($1592)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1593;
 label=280;break;
 case 258: 
 var $1595=_ea_indexed($cycles);
 $ea=$1595;
 var $1596=_get_reg_d();
 var $1597=$ea;
 var $1598=_read16($1597);
 var $1599=_inst_sub16($1596,$1598);
 var $1600=HEAP32[(($cycles)>>2)];
 var $1601=((($1600)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1601;
 label=280;break;
 case 259: 
 var $1603=_ea_extended();
 $ea=$1603;
 var $1604=_get_reg_d();
 var $1605=$ea;
 var $1606=_read16($1605);
 var $1607=_inst_sub16($1604,$1606);
 var $1608=HEAP32[(($cycles)>>2)];
 var $1609=((($1608)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1609;
 label=280;break;
 case 260: 
 var $1611=HEAP32[((2270912)>>2)];
 var $1612=_pc_read16();
 var $1613=_inst_sub16($1611,$1612);
 var $1614=HEAP32[(($cycles)>>2)];
 var $1615=((($1614)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1615;
 label=280;break;
 case 261: 
 var $1617=_ea_direct();
 $ea=$1617;
 var $1618=HEAP32[((2270912)>>2)];
 var $1619=$ea;
 var $1620=_read16($1619);
 var $1621=_inst_sub16($1618,$1620);
 var $1622=HEAP32[(($cycles)>>2)];
 var $1623=((($1622)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1623;
 label=280;break;
 case 262: 
 var $1625=_ea_indexed($cycles);
 $ea=$1625;
 var $1626=HEAP32[((2270912)>>2)];
 var $1627=$ea;
 var $1628=_read16($1627);
 var $1629=_inst_sub16($1626,$1628);
 var $1630=HEAP32[(($cycles)>>2)];
 var $1631=((($1630)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1631;
 label=280;break;
 case 263: 
 var $1633=_ea_extended();
 $ea=$1633;
 var $1634=HEAP32[((2270912)>>2)];
 var $1635=$ea;
 var $1636=_read16($1635);
 var $1637=_inst_sub16($1634,$1636);
 var $1638=HEAP32[(($cycles)>>2)];
 var $1639=((($1638)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1639;
 label=280;break;
 case 264: 
 var $1641=_pc_read16();
 HEAP32[((2270912)>>2)]=$1641;
 var $1642=HEAP32[((2270912)>>2)];
 _inst_tst16($1642);
 var $1643=HEAP32[(($cycles)>>2)];
 var $1644=((($1643)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1644;
 label=280;break;
 case 265: 
 var $1646=_ea_direct();
 $ea=$1646;
 var $1647=$ea;
 var $1648=_read16($1647);
 HEAP32[((2270912)>>2)]=$1648;
 var $1649=HEAP32[((2270912)>>2)];
 _inst_tst16($1649);
 var $1650=HEAP32[(($cycles)>>2)];
 var $1651=((($1650)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1651;
 label=280;break;
 case 266: 
 var $1653=_ea_indexed($cycles);
 $ea=$1653;
 var $1654=$ea;
 var $1655=_read16($1654);
 HEAP32[((2270912)>>2)]=$1655;
 var $1656=HEAP32[((2270912)>>2)];
 _inst_tst16($1656);
 var $1657=HEAP32[(($cycles)>>2)];
 var $1658=((($1657)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1658;
 label=280;break;
 case 267: 
 var $1660=_ea_extended();
 $ea=$1660;
 var $1661=$ea;
 var $1662=_read16($1661);
 HEAP32[((2270912)>>2)]=$1662;
 var $1663=HEAP32[((2270912)>>2)];
 _inst_tst16($1663);
 var $1664=HEAP32[(($cycles)>>2)];
 var $1665=((($1664)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1665;
 label=280;break;
 case 268: 
 var $1667=_ea_direct();
 $ea=$1667;
 var $1668=$ea;
 var $1669=HEAP32[((2270912)>>2)];
 _write16($1668,$1669);
 var $1670=HEAP32[((2270912)>>2)];
 _inst_tst16($1670);
 var $1671=HEAP32[(($cycles)>>2)];
 var $1672=((($1671)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1672;
 label=280;break;
 case 269: 
 var $1674=_ea_indexed($cycles);
 $ea=$1674;
 var $1675=$ea;
 var $1676=HEAP32[((2270912)>>2)];
 _write16($1675,$1676);
 var $1677=HEAP32[((2270912)>>2)];
 _inst_tst16($1677);
 var $1678=HEAP32[(($cycles)>>2)];
 var $1679=((($1678)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1679;
 label=280;break;
 case 270: 
 var $1681=_ea_extended();
 $ea=$1681;
 var $1682=$ea;
 var $1683=HEAP32[((2270912)>>2)];
 _write16($1682,$1683);
 var $1684=HEAP32[((2270912)>>2)];
 _inst_tst16($1684);
 var $1685=HEAP32[(($cycles)>>2)];
 var $1686=((($1685)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1686;
 label=280;break;
 case 271: 
 var $1688=_pc_read16();
 HEAP32[((2270936)>>2)]=$1688;
 var $1689=HEAP32[((2270936)>>2)];
 _inst_tst16($1689);
 var $1690=HEAP32[(($cycles)>>2)];
 var $1691=((($1690)+(4))|0);
 HEAP32[(($cycles)>>2)]=$1691;
 label=280;break;
 case 272: 
 var $1693=_ea_direct();
 $ea=$1693;
 var $1694=$ea;
 var $1695=_read16($1694);
 HEAP32[((2270936)>>2)]=$1695;
 var $1696=HEAP32[((2270936)>>2)];
 _inst_tst16($1696);
 var $1697=HEAP32[(($cycles)>>2)];
 var $1698=((($1697)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1698;
 label=280;break;
 case 273: 
 var $1700=_ea_indexed($cycles);
 $ea=$1700;
 var $1701=$ea;
 var $1702=_read16($1701);
 HEAP32[((2270936)>>2)]=$1702;
 var $1703=HEAP32[((2270936)>>2)];
 _inst_tst16($1703);
 var $1704=HEAP32[(($cycles)>>2)];
 var $1705=((($1704)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1705;
 label=280;break;
 case 274: 
 var $1707=_ea_extended();
 $ea=$1707;
 var $1708=$ea;
 var $1709=_read16($1708);
 HEAP32[((2270936)>>2)]=$1709;
 var $1710=HEAP32[((2270936)>>2)];
 _inst_tst16($1710);
 var $1711=HEAP32[(($cycles)>>2)];
 var $1712=((($1711)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1712;
 label=280;break;
 case 275: 
 var $1714=_ea_direct();
 $ea=$1714;
 var $1715=$ea;
 var $1716=HEAP32[((2270936)>>2)];
 _write16($1715,$1716);
 var $1717=HEAP32[((2270936)>>2)];
 _inst_tst16($1717);
 var $1718=HEAP32[(($cycles)>>2)];
 var $1719=((($1718)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1719;
 label=280;break;
 case 276: 
 var $1721=_ea_indexed($cycles);
 $ea=$1721;
 var $1722=$ea;
 var $1723=HEAP32[((2270936)>>2)];
 _write16($1722,$1723);
 var $1724=HEAP32[((2270936)>>2)];
 _inst_tst16($1724);
 var $1725=HEAP32[(($cycles)>>2)];
 var $1726=((($1725)+(6))|0);
 HEAP32[(($cycles)>>2)]=$1726;
 label=280;break;
 case 277: 
 var $1728=_ea_extended();
 $ea=$1728;
 var $1729=$ea;
 var $1730=HEAP32[((2270936)>>2)];
 _write16($1729,$1730);
 var $1731=HEAP32[((2270936)>>2)];
 _inst_tst16($1731);
 var $1732=HEAP32[(($cycles)>>2)];
 var $1733=((($1732)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1733;
 label=280;break;
 case 278: 
 _set_cc(128,1);
 var $1735=HEAP32[((2270928)>>2)];
 _inst_psh(255,2270936,$1735,$cycles);
 var $1736=_read16(65524);
 HEAP32[((2270944)>>2)]=$1736;
 var $1737=HEAP32[(($cycles)>>2)];
 var $1738=((($1737)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1738;
 label=280;break;
 case 279: 
 var $1740=$op;
 var $1741=_printf(248,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$1740,tempVarArgs)); STACKTOP=tempVarArgs;
 label=280;break;
 case 280: 
 label=294;break;
 case 281: 
 var $1744=_pc_read8();
 $op=$1744;
 var $1745=$op;
 switch(($1745|0)){case 131:{ label=282;break;}case 147:{ label=283;break;}case 163:{ label=284;break;}case 179:{ label=285;break;}case 140:{ label=286;break;}case 156:{ label=287;break;}case 172:{ label=288;break;}case 188:{ label=289;break;}case 63:{ label=290;break;}default:{label=291;break;}}break;
 case 282: 
 var $1747=HEAP32[((2270928)>>2)];
 var $1748=_pc_read16();
 var $1749=_inst_sub16($1747,$1748);
 var $1750=HEAP32[(($cycles)>>2)];
 var $1751=((($1750)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1751;
 label=292;break;
 case 283: 
 var $1753=_ea_direct();
 $ea=$1753;
 var $1754=HEAP32[((2270928)>>2)];
 var $1755=$ea;
 var $1756=_read16($1755);
 var $1757=_inst_sub16($1754,$1756);
 var $1758=HEAP32[(($cycles)>>2)];
 var $1759=((($1758)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1759;
 label=292;break;
 case 284: 
 var $1761=_ea_indexed($cycles);
 $ea=$1761;
 var $1762=HEAP32[((2270928)>>2)];
 var $1763=$ea;
 var $1764=_read16($1763);
 var $1765=_inst_sub16($1762,$1764);
 var $1766=HEAP32[(($cycles)>>2)];
 var $1767=((($1766)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1767;
 label=292;break;
 case 285: 
 var $1769=_ea_extended();
 $ea=$1769;
 var $1770=HEAP32[((2270928)>>2)];
 var $1771=$ea;
 var $1772=_read16($1771);
 var $1773=_inst_sub16($1770,$1772);
 var $1774=HEAP32[(($cycles)>>2)];
 var $1775=((($1774)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1775;
 label=292;break;
 case 286: 
 var $1777=HEAP32[((2270936)>>2)];
 var $1778=_pc_read16();
 var $1779=_inst_sub16($1777,$1778);
 var $1780=HEAP32[(($cycles)>>2)];
 var $1781=((($1780)+(5))|0);
 HEAP32[(($cycles)>>2)]=$1781;
 label=292;break;
 case 287: 
 var $1783=_ea_direct();
 $ea=$1783;
 var $1784=HEAP32[((2270936)>>2)];
 var $1785=$ea;
 var $1786=_read16($1785);
 var $1787=_inst_sub16($1784,$1786);
 var $1788=HEAP32[(($cycles)>>2)];
 var $1789=((($1788)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1789;
 label=292;break;
 case 288: 
 var $1791=_ea_indexed($cycles);
 $ea=$1791;
 var $1792=HEAP32[((2270936)>>2)];
 var $1793=$ea;
 var $1794=_read16($1793);
 var $1795=_inst_sub16($1792,$1794);
 var $1796=HEAP32[(($cycles)>>2)];
 var $1797=((($1796)+(7))|0);
 HEAP32[(($cycles)>>2)]=$1797;
 label=292;break;
 case 289: 
 var $1799=_ea_extended();
 $ea=$1799;
 var $1800=HEAP32[((2270936)>>2)];
 var $1801=$ea;
 var $1802=_read16($1801);
 var $1803=_inst_sub16($1800,$1802);
 var $1804=HEAP32[(($cycles)>>2)];
 var $1805=((($1804)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1805;
 label=292;break;
 case 290: 
 _set_cc(128,1);
 var $1807=HEAP32[((2270928)>>2)];
 _inst_psh(255,2270936,$1807,$cycles);
 var $1808=_read16(65522);
 HEAP32[((2270944)>>2)]=$1808;
 var $1809=HEAP32[(($cycles)>>2)];
 var $1810=((($1809)+(8))|0);
 HEAP32[(($cycles)>>2)]=$1810;
 label=292;break;
 case 291: 
 var $1812=$op;
 var $1813=_printf(184,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$1812,tempVarArgs)); STACKTOP=tempVarArgs;
 label=292;break;
 case 292: 
 label=294;break;
 case 293: 
 var $1816=$op;
 var $1817=_printf(144,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$1816,tempVarArgs)); STACKTOP=tempVarArgs;
 label=294;break;
 case 294: 
 var $1819=HEAP32[(($cycles)>>2)];
 $1=$1819;
 label=295;break;
 case 295: 
 var $1821=$1;
 STACKTOP=sp;return $1821;
  default: assert(0, "bad label: " + label);
 }
}
function _ea_direct(){
 var label=0;
 var $1=HEAP32[((2270952)>>2)];
 var $2=$1<<8;
 var $3=_pc_read8();
 var $4=$2|$3;
 return $4;
}
function _read826($address){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 $1=$address;
 var $2=HEAP32[((2272096)>>2)];
 var $3=$1;
 var $4=$3&65535;
 var $5=FUNCTION_TABLE[$2]($4);
 var $6=($5&255);
 STACKTOP=sp;return $6;
}
function _write828($address,$data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 $1=$address;
 $2=$data;
 var $3=HEAP32[((2272088)>>2)];
 var $4=$1;
 var $5=$4&65535;
 var $6=$2;
 var $7=(($6)&255);
 FUNCTION_TABLE[$3]($5,$7);
 STACKTOP=sp;return;
}
function _ea_indexed($cycles){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $r;
 var $op;
 var $ea;
 $1=$cycles;
 var $2=_pc_read8();
 $op=$2;
 var $3=$op;
 var $4=$3>>>5;
 var $5=$4&3;
 $r=$5;
 var $6=$op;
 switch(($6|0)){case 133:case 165:case 197:case 229:{ label=10;break;}case 149:case 181:case 213:case 245:{ label=11;break;}case 134:case 166:case 198:case 230:{ label=12;break;}case 150:case 182:case 214:case 246:{ label=13;break;}case 136:case 168:case 200:case 232:{ label=14;break;}case 152:case 184:case 216:case 248:{ label=15;break;}case 137:case 169:case 201:case 233:{ label=16;break;}case 153:case 185:case 217:case 249:{ label=17;break;}case 139:case 171:case 203:case 235:{ label=18;break;}case 155:case 187:case 219:case 251:{ label=19;break;}case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 64:case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:{ label=2;break;}case 140:case 172:case 204:case 236:{ label=20;break;}case 156:case 188:case 220:case 252:{ label=21;break;}case 141:case 173:case 205:case 237:{ label=22;break;}case 157:case 189:case 221:case 253:{ label=23;break;}case 159:{ label=24;break;}case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:case 60:case 61:case 62:case 63:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:case 123:case 124:case 125:case 126:case 127:{ label=3;break;}case 128:case 129:case 160:case 161:case 192:case 193:case 224:case 225:{ label=4;break;}case 144:case 145:case 176:case 177:case 208:case 209:case 240:case 241:{ label=5;break;}case 130:case 131:case 162:case 163:case 194:case 195:case 226:case 227:{ label=6;break;}case 146:case 147:case 178:case 179:case 210:case 211:case 242:case 243:{ label=7;break;}case 132:case 164:case 196:case 228:{ label=8;break;}case 148:case 180:case 212:case 244:{ label=9;break;}default:{label=25;break;}}break;
 case 2: 
 var $8=$r;
 var $9=((8+($8<<2))|0);
 var $10=HEAP32[(($9)>>2)];
 var $11=HEAP32[(($10)>>2)];
 var $12=$op;
 var $13=$12&15;
 var $14=((($11)+($13))|0);
 $ea=$14;
 var $15=$1;
 var $16=HEAP32[(($15)>>2)];
 var $17=((($16)+(1))|0);
 HEAP32[(($15)>>2)]=$17;
 label=26;break;
 case 3: 
 var $19=$r;
 var $20=((8+($19<<2))|0);
 var $21=HEAP32[(($20)>>2)];
 var $22=HEAP32[(($21)>>2)];
 var $23=$op;
 var $24=$23&15;
 var $25=((($22)+($24))|0);
 var $26=((($25)-(16))|0);
 $ea=$26;
 var $27=$1;
 var $28=HEAP32[(($27)>>2)];
 var $29=((($28)+(1))|0);
 HEAP32[(($27)>>2)]=$29;
 label=26;break;
 case 4: 
 var $31=$r;
 var $32=((8+($31<<2))|0);
 var $33=HEAP32[(($32)>>2)];
 var $34=HEAP32[(($33)>>2)];
 $ea=$34;
 var $35=$op;
 var $36=$35&1;
 var $37=((($36)+(1))|0);
 var $38=$r;
 var $39=((8+($38<<2))|0);
 var $40=HEAP32[(($39)>>2)];
 var $41=HEAP32[(($40)>>2)];
 var $42=((($41)+($37))|0);
 HEAP32[(($40)>>2)]=$42;
 var $43=$op;
 var $44=$43&1;
 var $45=((($44)+(2))|0);
 var $46=$1;
 var $47=HEAP32[(($46)>>2)];
 var $48=((($47)+($45))|0);
 HEAP32[(($46)>>2)]=$48;
 label=26;break;
 case 5: 
 var $50=$r;
 var $51=((8+($50<<2))|0);
 var $52=HEAP32[(($51)>>2)];
 var $53=HEAP32[(($52)>>2)];
 var $54=_read16($53);
 $ea=$54;
 var $55=$op;
 var $56=$55&1;
 var $57=((($56)+(1))|0);
 var $58=$r;
 var $59=((8+($58<<2))|0);
 var $60=HEAP32[(($59)>>2)];
 var $61=HEAP32[(($60)>>2)];
 var $62=((($61)+($57))|0);
 HEAP32[(($60)>>2)]=$62;
 var $63=$op;
 var $64=$63&1;
 var $65=((($64)+(5))|0);
 var $66=$1;
 var $67=HEAP32[(($66)>>2)];
 var $68=((($67)+($65))|0);
 HEAP32[(($66)>>2)]=$68;
 label=26;break;
 case 6: 
 var $70=$op;
 var $71=$70&1;
 var $72=((($71)+(1))|0);
 var $73=$r;
 var $74=((8+($73<<2))|0);
 var $75=HEAP32[(($74)>>2)];
 var $76=HEAP32[(($75)>>2)];
 var $77=((($76)-($72))|0);
 HEAP32[(($75)>>2)]=$77;
 var $78=$r;
 var $79=((8+($78<<2))|0);
 var $80=HEAP32[(($79)>>2)];
 var $81=HEAP32[(($80)>>2)];
 $ea=$81;
 var $82=$op;
 var $83=$82&1;
 var $84=((($83)+(2))|0);
 var $85=$1;
 var $86=HEAP32[(($85)>>2)];
 var $87=((($86)+($84))|0);
 HEAP32[(($85)>>2)]=$87;
 label=26;break;
 case 7: 
 var $89=$op;
 var $90=$89&1;
 var $91=((($90)+(1))|0);
 var $92=$r;
 var $93=((8+($92<<2))|0);
 var $94=HEAP32[(($93)>>2)];
 var $95=HEAP32[(($94)>>2)];
 var $96=((($95)-($91))|0);
 HEAP32[(($94)>>2)]=$96;
 var $97=$r;
 var $98=((8+($97<<2))|0);
 var $99=HEAP32[(($98)>>2)];
 var $100=HEAP32[(($99)>>2)];
 var $101=_read16($100);
 $ea=$101;
 var $102=$op;
 var $103=$102&1;
 var $104=((($103)+(5))|0);
 var $105=$1;
 var $106=HEAP32[(($105)>>2)];
 var $107=((($106)+($104))|0);
 HEAP32[(($105)>>2)]=$107;
 label=26;break;
 case 8: 
 var $109=$r;
 var $110=((8+($109<<2))|0);
 var $111=HEAP32[(($110)>>2)];
 var $112=HEAP32[(($111)>>2)];
 $ea=$112;
 label=26;break;
 case 9: 
 var $114=$r;
 var $115=((8+($114<<2))|0);
 var $116=HEAP32[(($115)>>2)];
 var $117=HEAP32[(($116)>>2)];
 var $118=_read16($117);
 $ea=$118;
 var $119=$1;
 var $120=HEAP32[(($119)>>2)];
 var $121=((($120)+(3))|0);
 HEAP32[(($119)>>2)]=$121;
 label=26;break;
 case 10: 
 var $123=$r;
 var $124=((8+($123<<2))|0);
 var $125=HEAP32[(($124)>>2)];
 var $126=HEAP32[(($125)>>2)];
 var $127=HEAP32[((2270968)>>2)];
 var $128=_sign_extend($127);
 var $129=((($126)+($128))|0);
 $ea=$129;
 var $130=$1;
 var $131=HEAP32[(($130)>>2)];
 var $132=((($131)+(1))|0);
 HEAP32[(($130)>>2)]=$132;
 label=26;break;
 case 11: 
 var $134=$r;
 var $135=((8+($134<<2))|0);
 var $136=HEAP32[(($135)>>2)];
 var $137=HEAP32[(($136)>>2)];
 var $138=HEAP32[((2270968)>>2)];
 var $139=_sign_extend($138);
 var $140=((($137)+($139))|0);
 var $141=_read16($140);
 $ea=$141;
 var $142=$1;
 var $143=HEAP32[(($142)>>2)];
 var $144=((($143)+(4))|0);
 HEAP32[(($142)>>2)]=$144;
 label=26;break;
 case 12: 
 var $146=$r;
 var $147=((8+($146<<2))|0);
 var $148=HEAP32[(($147)>>2)];
 var $149=HEAP32[(($148)>>2)];
 var $150=HEAP32[((2270976)>>2)];
 var $151=_sign_extend($150);
 var $152=((($149)+($151))|0);
 $ea=$152;
 var $153=$1;
 var $154=HEAP32[(($153)>>2)];
 var $155=((($154)+(1))|0);
 HEAP32[(($153)>>2)]=$155;
 label=26;break;
 case 13: 
 var $157=$r;
 var $158=((8+($157<<2))|0);
 var $159=HEAP32[(($158)>>2)];
 var $160=HEAP32[(($159)>>2)];
 var $161=HEAP32[((2270976)>>2)];
 var $162=_sign_extend($161);
 var $163=((($160)+($162))|0);
 var $164=_read16($163);
 $ea=$164;
 var $165=$1;
 var $166=HEAP32[(($165)>>2)];
 var $167=((($166)+(4))|0);
 HEAP32[(($165)>>2)]=$167;
 label=26;break;
 case 14: 
 var $169=$r;
 var $170=((8+($169<<2))|0);
 var $171=HEAP32[(($170)>>2)];
 var $172=HEAP32[(($171)>>2)];
 var $173=_pc_read8();
 var $174=_sign_extend($173);
 var $175=((($172)+($174))|0);
 $ea=$175;
 var $176=$1;
 var $177=HEAP32[(($176)>>2)];
 var $178=((($177)+(1))|0);
 HEAP32[(($176)>>2)]=$178;
 label=26;break;
 case 15: 
 var $180=$r;
 var $181=((8+($180<<2))|0);
 var $182=HEAP32[(($181)>>2)];
 var $183=HEAP32[(($182)>>2)];
 var $184=_pc_read8();
 var $185=_sign_extend($184);
 var $186=((($183)+($185))|0);
 var $187=_read16($186);
 $ea=$187;
 var $188=$1;
 var $189=HEAP32[(($188)>>2)];
 var $190=((($189)+(4))|0);
 HEAP32[(($188)>>2)]=$190;
 label=26;break;
 case 16: 
 var $192=$r;
 var $193=((8+($192<<2))|0);
 var $194=HEAP32[(($193)>>2)];
 var $195=HEAP32[(($194)>>2)];
 var $196=_pc_read16();
 var $197=((($195)+($196))|0);
 $ea=$197;
 var $198=$1;
 var $199=HEAP32[(($198)>>2)];
 var $200=((($199)+(4))|0);
 HEAP32[(($198)>>2)]=$200;
 label=26;break;
 case 17: 
 var $202=$r;
 var $203=((8+($202<<2))|0);
 var $204=HEAP32[(($203)>>2)];
 var $205=HEAP32[(($204)>>2)];
 var $206=_pc_read16();
 var $207=((($205)+($206))|0);
 var $208=_read16($207);
 $ea=$208;
 var $209=$1;
 var $210=HEAP32[(($209)>>2)];
 var $211=((($210)+(7))|0);
 HEAP32[(($209)>>2)]=$211;
 label=26;break;
 case 18: 
 var $213=$r;
 var $214=((8+($213<<2))|0);
 var $215=HEAP32[(($214)>>2)];
 var $216=HEAP32[(($215)>>2)];
 var $217=_get_reg_d();
 var $218=((($216)+($217))|0);
 $ea=$218;
 var $219=$1;
 var $220=HEAP32[(($219)>>2)];
 var $221=((($220)+(4))|0);
 HEAP32[(($219)>>2)]=$221;
 label=26;break;
 case 19: 
 var $223=$r;
 var $224=((8+($223<<2))|0);
 var $225=HEAP32[(($224)>>2)];
 var $226=HEAP32[(($225)>>2)];
 var $227=_get_reg_d();
 var $228=((($226)+($227))|0);
 var $229=_read16($228);
 $ea=$229;
 var $230=$1;
 var $231=HEAP32[(($230)>>2)];
 var $232=((($231)+(7))|0);
 HEAP32[(($230)>>2)]=$232;
 label=26;break;
 case 20: 
 var $234=_pc_read8();
 var $235=_sign_extend($234);
 $r=$235;
 var $236=HEAP32[((2270944)>>2)];
 var $237=$r;
 var $238=((($236)+($237))|0);
 $ea=$238;
 var $239=$1;
 var $240=HEAP32[(($239)>>2)];
 var $241=((($240)+(1))|0);
 HEAP32[(($239)>>2)]=$241;
 label=26;break;
 case 21: 
 var $243=_pc_read8();
 var $244=_sign_extend($243);
 $r=$244;
 var $245=HEAP32[((2270944)>>2)];
 var $246=$r;
 var $247=((($245)+($246))|0);
 var $248=_read16($247);
 $ea=$248;
 var $249=$1;
 var $250=HEAP32[(($249)>>2)];
 var $251=((($250)+(4))|0);
 HEAP32[(($249)>>2)]=$251;
 label=26;break;
 case 22: 
 var $253=_pc_read16();
 $r=$253;
 var $254=HEAP32[((2270944)>>2)];
 var $255=$r;
 var $256=((($254)+($255))|0);
 $ea=$256;
 var $257=$1;
 var $258=HEAP32[(($257)>>2)];
 var $259=((($258)+(5))|0);
 HEAP32[(($257)>>2)]=$259;
 label=26;break;
 case 23: 
 var $261=_pc_read16();
 $r=$261;
 var $262=HEAP32[((2270944)>>2)];
 var $263=$r;
 var $264=((($262)+($263))|0);
 var $265=_read16($264);
 $ea=$265;
 var $266=$1;
 var $267=HEAP32[(($266)>>2)];
 var $268=((($267)+(8))|0);
 HEAP32[(($266)>>2)]=$268;
 label=26;break;
 case 24: 
 var $270=_pc_read16();
 var $271=_read16($270);
 $ea=$271;
 var $272=$1;
 var $273=HEAP32[(($272)>>2)];
 var $274=((($273)+(5))|0);
 HEAP32[(($272)>>2)]=$274;
 label=26;break;
 case 25: 
 var $276=_printf(96,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = (((STACKTOP)+7)&-8),(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=0,tempVarArgs)); STACKTOP=tempVarArgs;
 label=26;break;
 case 26: 
 var $278=$ea;
 STACKTOP=sp;return $278;
  default: assert(0, "bad label: " + label);
 }
}
function _ea_extended(){
 var label=0;
 var $1=_pc_read16();
 return $1;
}
function _write16($address,$data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 $1=$address;
 $2=$data;
 var $3=$1;
 var $4=$2;
 var $5=$4>>>8;
 _write828($3,$5);
 var $6=$1;
 var $7=((($6)+(1))|0);
 var $8=$2;
 _write828($7,$8);
 STACKTOP=sp;return;
}
function _e8910_write($r,$v){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $old;
 $1=$r;
 $2=$v;
 var $3=HEAP32[((2305536)>>2)];
 var $4=($3|0)==0;
 if($4){label=2;break;}else{label=3;break;}
 case 2: 
 label=63;break;
 case 3: 
 var $7=$2;
 var $8=$1;
 var $9=HEAP32[((2305536)>>2)];
 var $10=(($9+($8<<2))|0);
 HEAP32[(($10)>>2)]=$7;
 var $11=$1;
 switch(($11|0)){case 4:case 5:{ label=14;break;}case 6:{ label=19;break;}case 7:{ label=24;break;}case 8:{ label=25;break;}case 9:{ label=32;break;}case 10:{ label=39;break;}case 0:case 1:{ label=4;break;}case 11:case 12:{ label=46;break;}case 13:{ label=51;break;}case 14:{ label=61;break;}case 15:{ label=62;break;}case 2:case 3:{ label=9;break;}default:{label=63;break;}}break;
 case 4: 
 var $13=HEAP32[((2305536)>>2)];
 var $14=(($13+4)|0);
 var $15=HEAP32[(($14)>>2)];
 var $16=$15&15;
 HEAP32[(($14)>>2)]=$16;
 var $17=HEAP32[((2305544)>>2)];
 $old=$17;
 var $18=HEAP32[((2305536)>>2)];
 var $19=(($18)|0);
 var $20=HEAP32[(($19)>>2)];
 var $21=HEAP32[((2305536)>>2)];
 var $22=(($21+4)|0);
 var $23=HEAP32[(($22)>>2)];
 var $24=($23<<8);
 var $25=((($20)+($24))|0);
 var $26=$25;
 HEAP32[((2305544)>>2)]=$26;
 var $27=HEAP32[((2305544)>>2)];
 var $28=($27|0)==0;
 if($28){label=5;break;}else{label=6;break;}
 case 5: 
 HEAP32[((2305544)>>2)]=1;
 label=6;break;
 case 6: 
 var $31=HEAP32[((2305544)>>2)];
 var $32=$old;
 var $33=((($31)-($32))|0);
 var $34=HEAP32[((2305564)>>2)];
 var $35=((($34)+($33))|0);
 HEAP32[((2305564)>>2)]=$35;
 var $36=HEAP32[((2305564)>>2)];
 var $37=($36|0)<=0;
 if($37){label=7;break;}else{label=8;break;}
 case 7: 
 HEAP32[((2305564)>>2)]=1;
 label=8;break;
 case 8: 
 label=63;break;
 case 9: 
 var $41=HEAP32[((2305536)>>2)];
 var $42=(($41+12)|0);
 var $43=HEAP32[(($42)>>2)];
 var $44=$43&15;
 HEAP32[(($42)>>2)]=$44;
 var $45=HEAP32[((2305548)>>2)];
 $old=$45;
 var $46=HEAP32[((2305536)>>2)];
 var $47=(($46+8)|0);
 var $48=HEAP32[(($47)>>2)];
 var $49=HEAP32[((2305536)>>2)];
 var $50=(($49+12)|0);
 var $51=HEAP32[(($50)>>2)];
 var $52=($51<<8);
 var $53=((($48)+($52))|0);
 var $54=$53;
 HEAP32[((2305548)>>2)]=$54;
 var $55=HEAP32[((2305548)>>2)];
 var $56=($55|0)==0;
 if($56){label=10;break;}else{label=11;break;}
 case 10: 
 HEAP32[((2305548)>>2)]=1;
 label=11;break;
 case 11: 
 var $59=HEAP32[((2305548)>>2)];
 var $60=$old;
 var $61=((($59)-($60))|0);
 var $62=HEAP32[((2305568)>>2)];
 var $63=((($62)+($61))|0);
 HEAP32[((2305568)>>2)]=$63;
 var $64=HEAP32[((2305568)>>2)];
 var $65=($64|0)<=0;
 if($65){label=12;break;}else{label=13;break;}
 case 12: 
 HEAP32[((2305568)>>2)]=1;
 label=13;break;
 case 13: 
 label=63;break;
 case 14: 
 var $69=HEAP32[((2305536)>>2)];
 var $70=(($69+20)|0);
 var $71=HEAP32[(($70)>>2)];
 var $72=$71&15;
 HEAP32[(($70)>>2)]=$72;
 var $73=HEAP32[((2305552)>>2)];
 $old=$73;
 var $74=HEAP32[((2305536)>>2)];
 var $75=(($74+16)|0);
 var $76=HEAP32[(($75)>>2)];
 var $77=HEAP32[((2305536)>>2)];
 var $78=(($77+20)|0);
 var $79=HEAP32[(($78)>>2)];
 var $80=($79<<8);
 var $81=((($76)+($80))|0);
 var $82=$81;
 HEAP32[((2305552)>>2)]=$82;
 var $83=HEAP32[((2305552)>>2)];
 var $84=($83|0)==0;
 if($84){label=15;break;}else{label=16;break;}
 case 15: 
 HEAP32[((2305552)>>2)]=1;
 label=16;break;
 case 16: 
 var $87=HEAP32[((2305552)>>2)];
 var $88=$old;
 var $89=((($87)-($88))|0);
 var $90=HEAP32[((2305572)>>2)];
 var $91=((($90)+($89))|0);
 HEAP32[((2305572)>>2)]=$91;
 var $92=HEAP32[((2305572)>>2)];
 var $93=($92|0)<=0;
 if($93){label=17;break;}else{label=18;break;}
 case 17: 
 HEAP32[((2305572)>>2)]=1;
 label=18;break;
 case 18: 
 label=63;break;
 case 19: 
 var $97=HEAP32[((2305536)>>2)];
 var $98=(($97+24)|0);
 var $99=HEAP32[(($98)>>2)];
 var $100=$99&31;
 HEAP32[(($98)>>2)]=$100;
 var $101=HEAP32[((2305556)>>2)];
 $old=$101;
 var $102=HEAP32[((2305536)>>2)];
 var $103=(($102+24)|0);
 var $104=HEAP32[(($103)>>2)];
 var $105=$104;
 HEAP32[((2305556)>>2)]=$105;
 var $106=HEAP32[((2305556)>>2)];
 var $107=($106|0)==0;
 if($107){label=20;break;}else{label=21;break;}
 case 20: 
 HEAP32[((2305556)>>2)]=1;
 label=21;break;
 case 21: 
 var $110=HEAP32[((2305556)>>2)];
 var $111=$old;
 var $112=((($110)-($111))|0);
 var $113=HEAP32[((2305576)>>2)];
 var $114=((($113)+($112))|0);
 HEAP32[((2305576)>>2)]=$114;
 var $115=HEAP32[((2305576)>>2)];
 var $116=($115|0)<=0;
 if($116){label=22;break;}else{label=23;break;}
 case 22: 
 HEAP32[((2305576)>>2)]=1;
 label=23;break;
 case 23: 
 label=63;break;
 case 24: 
 var $120=HEAP32[((2305536)>>2)];
 var $121=(($120+28)|0);
 var $122=HEAP32[(($121)>>2)];
 HEAP32[((2305540)>>2)]=$122;
 label=63;break;
 case 25: 
 var $124=HEAP32[((2305536)>>2)];
 var $125=(($124+32)|0);
 var $126=HEAP32[(($125)>>2)];
 var $127=$126&31;
 HEAP32[(($125)>>2)]=$127;
 var $128=HEAP32[((2305536)>>2)];
 var $129=(($128+32)|0);
 var $130=HEAP32[(($129)>>2)];
 var $131=$130&16;
 var $132=(($131)&255);
 HEAP8[(2305600)]=$132;
 var $133=HEAP8[(2305600)];
 var $134=($133&255);
 var $135=($134|0)!=0;
 if($135){label=26;break;}else{label=27;break;}
 case 26: 
 var $137=HEAP32[((2305596)>>2)];
 var $155=$137;label=31;break;
 case 27: 
 var $139=HEAP32[((2305536)>>2)];
 var $140=(($139+32)|0);
 var $141=HEAP32[(($140)>>2)];
 var $142=($141|0)!=0;
 if($142){label=28;break;}else{label=29;break;}
 case 28: 
 var $144=HEAP32[((2305536)>>2)];
 var $145=(($144+32)|0);
 var $146=HEAP32[(($145)>>2)];
 var $147=($146<<1);
 var $148=((($147)+(1))|0);
 var $151=$148;label=30;break;
 case 29: 
 var $151=0;label=30;break;
 case 30: 
 var $151;
 var $152=((2305616+($151<<2))|0);
 var $153=HEAP32[(($152)>>2)];
 var $155=$153;label=31;break;
 case 31: 
 var $155;
 HEAP32[((2305584)>>2)]=$155;
 label=63;break;
 case 32: 
 var $157=HEAP32[((2305536)>>2)];
 var $158=(($157+36)|0);
 var $159=HEAP32[(($158)>>2)];
 var $160=$159&31;
 HEAP32[(($158)>>2)]=$160;
 var $161=HEAP32[((2305536)>>2)];
 var $162=(($161+36)|0);
 var $163=HEAP32[(($162)>>2)];
 var $164=$163&16;
 var $165=(($164)&255);
 HEAP8[(2305601)]=$165;
 var $166=HEAP8[(2305601)];
 var $167=($166&255);
 var $168=($167|0)!=0;
 if($168){label=33;break;}else{label=34;break;}
 case 33: 
 var $170=HEAP32[((2305596)>>2)];
 var $188=$170;label=38;break;
 case 34: 
 var $172=HEAP32[((2305536)>>2)];
 var $173=(($172+36)|0);
 var $174=HEAP32[(($173)>>2)];
 var $175=($174|0)!=0;
 if($175){label=35;break;}else{label=36;break;}
 case 35: 
 var $177=HEAP32[((2305536)>>2)];
 var $178=(($177+36)|0);
 var $179=HEAP32[(($178)>>2)];
 var $180=($179<<1);
 var $181=((($180)+(1))|0);
 var $184=$181;label=37;break;
 case 36: 
 var $184=0;label=37;break;
 case 37: 
 var $184;
 var $185=((2305616+($184<<2))|0);
 var $186=HEAP32[(($185)>>2)];
 var $188=$186;label=38;break;
 case 38: 
 var $188;
 HEAP32[((2305588)>>2)]=$188;
 label=63;break;
 case 39: 
 var $190=HEAP32[((2305536)>>2)];
 var $191=(($190+40)|0);
 var $192=HEAP32[(($191)>>2)];
 var $193=$192&31;
 HEAP32[(($191)>>2)]=$193;
 var $194=HEAP32[((2305536)>>2)];
 var $195=(($194+40)|0);
 var $196=HEAP32[(($195)>>2)];
 var $197=$196&16;
 var $198=(($197)&255);
 HEAP8[(2305602)]=$198;
 var $199=HEAP8[(2305602)];
 var $200=($199&255);
 var $201=($200|0)!=0;
 if($201){label=40;break;}else{label=41;break;}
 case 40: 
 var $203=HEAP32[((2305596)>>2)];
 var $221=$203;label=45;break;
 case 41: 
 var $205=HEAP32[((2305536)>>2)];
 var $206=(($205+40)|0);
 var $207=HEAP32[(($206)>>2)];
 var $208=($207|0)!=0;
 if($208){label=42;break;}else{label=43;break;}
 case 42: 
 var $210=HEAP32[((2305536)>>2)];
 var $211=(($210+40)|0);
 var $212=HEAP32[(($211)>>2)];
 var $213=($212<<1);
 var $214=((($213)+(1))|0);
 var $217=$214;label=44;break;
 case 43: 
 var $217=0;label=44;break;
 case 44: 
 var $217;
 var $218=((2305616+($217<<2))|0);
 var $219=HEAP32[(($218)>>2)];
 var $221=$219;label=45;break;
 case 45: 
 var $221;
 HEAP32[((2305592)>>2)]=$221;
 label=63;break;
 case 46: 
 var $223=HEAP32[((2305560)>>2)];
 $old=$223;
 var $224=HEAP32[((2305536)>>2)];
 var $225=(($224+44)|0);
 var $226=HEAP32[(($225)>>2)];
 var $227=HEAP32[((2305536)>>2)];
 var $228=(($227+48)|0);
 var $229=HEAP32[(($228)>>2)];
 var $230=($229<<8);
 var $231=((($226)+($230))|0);
 var $232=$231;
 HEAP32[((2305560)>>2)]=$232;
 var $233=HEAP32[((2305560)>>2)];
 var $234=($233|0)==0;
 if($234){label=47;break;}else{label=48;break;}
 case 47: 
 HEAP32[((2305560)>>2)]=1;
 label=48;break;
 case 48: 
 var $237=HEAP32[((2305560)>>2)];
 var $238=$old;
 var $239=((($237)-($238))|0);
 var $240=HEAP32[((2305580)>>2)];
 var $241=((($240)+($239))|0);
 HEAP32[((2305580)>>2)]=$241;
 var $242=HEAP32[((2305580)>>2)];
 var $243=($242|0)<=0;
 if($243){label=49;break;}else{label=50;break;}
 case 49: 
 HEAP32[((2305580)>>2)]=1;
 label=50;break;
 case 50: 
 label=63;break;
 case 51: 
 var $247=HEAP32[((2305536)>>2)];
 var $248=(($247+52)|0);
 var $249=HEAP32[(($248)>>2)];
 var $250=$249&15;
 HEAP32[(($248)>>2)]=$250;
 var $251=HEAP32[((2305536)>>2)];
 var $252=(($251+52)|0);
 var $253=HEAP32[(($252)>>2)];
 var $254=$253&4;
 var $255=($254|0)!=0;
 var $256=($255?31:0);
 var $257=(($256)&255);
 HEAP8[(2305610)]=$257;
 var $258=HEAP32[((2305536)>>2)];
 var $259=(($258+52)|0);
 var $260=HEAP32[(($259)>>2)];
 var $261=$260&8;
 var $262=($261|0)==0;
 if($262){label=52;break;}else{label=53;break;}
 case 52: 
 HEAP8[(2305608)]=1;
 var $264=HEAP8[(2305610)];
 HEAP8[(2305609)]=$264;
 label=54;break;
 case 53: 
 var $266=HEAP32[((2305536)>>2)];
 var $267=(($266+52)|0);
 var $268=HEAP32[(($267)>>2)];
 var $269=$268&1;
 var $270=(($269)&255);
 HEAP8[(2305608)]=$270;
 var $271=HEAP32[((2305536)>>2)];
 var $272=(($271+52)|0);
 var $273=HEAP32[(($272)>>2)];
 var $274=$273&2;
 var $275=(($274)&255);
 HEAP8[(2305609)]=$275;
 label=54;break;
 case 54: 
 var $277=HEAP32[((2305560)>>2)];
 HEAP32[((2305580)>>2)]=$277;
 HEAP8[(2305607)]=31;
 HEAP8[(2305611)]=0;
 var $278=HEAP8[(2305607)];
 var $279=(($278<<24)>>24);
 var $280=HEAP8[(2305610)];
 var $281=($280&255);
 var $282=$279^$281;
 var $283=((2305616+($282<<2))|0);
 var $284=HEAP32[(($283)>>2)];
 HEAP32[((2305596)>>2)]=$284;
 var $285=HEAP8[(2305600)];
 var $286=(($285<<24)>>24)!=0;
 if($286){label=55;break;}else{label=56;break;}
 case 55: 
 var $288=HEAP32[((2305596)>>2)];
 HEAP32[((2305584)>>2)]=$288;
 label=56;break;
 case 56: 
 var $290=HEAP8[(2305601)];
 var $291=(($290<<24)>>24)!=0;
 if($291){label=57;break;}else{label=58;break;}
 case 57: 
 var $293=HEAP32[((2305596)>>2)];
 HEAP32[((2305588)>>2)]=$293;
 label=58;break;
 case 58: 
 var $295=HEAP8[(2305602)];
 var $296=(($295<<24)>>24)!=0;
 if($296){label=59;break;}else{label=60;break;}
 case 59: 
 var $298=HEAP32[((2305596)>>2)];
 HEAP32[((2305592)>>2)]=$298;
 label=60;break;
 case 60: 
 label=63;break;
 case 61: 
 label=63;break;
 case 62: 
 label=63;break;
 case 63: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _e8910_init_sound(){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP;STACKTOP=(STACKTOP+48)|0; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $reqSpec=sp;
 var $givenSpec=(sp)+(24);
 HEAP32[((2305536)>>2)]=2262640;
 HEAP32[((2305612)>>2)]=1;
 HEAP8[(2305603)]=0;
 HEAP8[(2305604)]=0;
 HEAP8[(2305605)]=0;
 HEAP8[(2305606)]=-1;
 _e8910_build_mixer_table();
 HEAP32[((2305532)>>2)]=1;
 var $1=(($reqSpec)|0);
 HEAP32[(($1)>>2)]=22050;
 var $2=(($reqSpec+4)|0);
 HEAP16[(($2)>>1)]=8;
 var $3=(($reqSpec+6)|0);
 HEAP8[($3)]=1;
 var $4=(($reqSpec+8)|0);
 HEAP16[(($4)>>1)]=1024;
 var $5=(($reqSpec+16)|0);
 HEAP32[(($5)>>2)]=6;
 var $6=(($reqSpec+20)|0);
 HEAP32[(($6)>>2)]=0;
 var $7=_SDL_OpenAudio($reqSpec,$givenSpec);
 var $8=($7|0)<0;
 if($8){label=2;break;}else{label=3;break;}
 case 2: 
 var $10=HEAP32[((_stderr)>>2)];
 var $11=_SDL_GetError();
 var $12=_fprintf($10,48,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$11,tempVarArgs)); STACKTOP=tempVarArgs;
 _exit(-1);
 throw "Reached an unreachable!";
 case 3: 
 _SDL_PauseAudio(0);
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _e8910_callback($userdata,$stream,$length){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $outn;
 var $buf1;
 var $vol;
 var $left;
 var $vola;
 var $volb;
 var $volc;
 var $nextevent;
 $1=$userdata;
 $2=$stream;
 $3=$length;
 var $4=$1;
 var $5=$2;
 $buf1=$5;
 var $6=HEAP32[((2305532)>>2)];
 var $7=($6|0)!=0;
 if($7){label=3;break;}else{label=2;break;}
 case 2: 
 var $9=$2;
 var $10=$3;
 var $11=$10;
 _memset($9, 0, $11)|0;
 label=131;break;
 case 3: 
 var $13=$3;
 var $14=($13<<1);
 $3=$14;
 var $15=HEAP32[((2305536)>>2)];
 var $16=(($15+28)|0);
 var $17=HEAP32[(($16)>>2)];
 var $18=$17&1;
 var $19=($18|0)!=0;
 if($19){label=4;break;}else{label=7;break;}
 case 4: 
 var $21=HEAP32[((2305564)>>2)];
 var $22=$3;
 var $23=($21|0)<=($22|0);
 if($23){label=5;break;}else{label=6;break;}
 case 5: 
 var $25=$3;
 var $26=HEAP32[((2305564)>>2)];
 var $27=((($26)+($25))|0);
 HEAP32[((2305564)>>2)]=$27;
 label=6;break;
 case 6: 
 HEAP8[(2305603)]=1;
 label=12;break;
 case 7: 
 var $30=HEAP32[((2305536)>>2)];
 var $31=(($30+32)|0);
 var $32=HEAP32[(($31)>>2)];
 var $33=($32|0)==0;
 if($33){label=8;break;}else{label=11;break;}
 case 8: 
 var $35=HEAP32[((2305564)>>2)];
 var $36=$3;
 var $37=($35|0)<=($36|0);
 if($37){label=9;break;}else{label=10;break;}
 case 9: 
 var $39=$3;
 var $40=HEAP32[((2305564)>>2)];
 var $41=((($40)+($39))|0);
 HEAP32[((2305564)>>2)]=$41;
 label=10;break;
 case 10: 
 label=11;break;
 case 11: 
 label=12;break;
 case 12: 
 var $45=HEAP32[((2305536)>>2)];
 var $46=(($45+28)|0);
 var $47=HEAP32[(($46)>>2)];
 var $48=$47&2;
 var $49=($48|0)!=0;
 if($49){label=13;break;}else{label=16;break;}
 case 13: 
 var $51=HEAP32[((2305568)>>2)];
 var $52=$3;
 var $53=($51|0)<=($52|0);
 if($53){label=14;break;}else{label=15;break;}
 case 14: 
 var $55=$3;
 var $56=HEAP32[((2305568)>>2)];
 var $57=((($56)+($55))|0);
 HEAP32[((2305568)>>2)]=$57;
 label=15;break;
 case 15: 
 HEAP8[(2305604)]=1;
 label=21;break;
 case 16: 
 var $60=HEAP32[((2305536)>>2)];
 var $61=(($60+36)|0);
 var $62=HEAP32[(($61)>>2)];
 var $63=($62|0)==0;
 if($63){label=17;break;}else{label=20;break;}
 case 17: 
 var $65=HEAP32[((2305568)>>2)];
 var $66=$3;
 var $67=($65|0)<=($66|0);
 if($67){label=18;break;}else{label=19;break;}
 case 18: 
 var $69=$3;
 var $70=HEAP32[((2305568)>>2)];
 var $71=((($70)+($69))|0);
 HEAP32[((2305568)>>2)]=$71;
 label=19;break;
 case 19: 
 label=20;break;
 case 20: 
 label=21;break;
 case 21: 
 var $75=HEAP32[((2305536)>>2)];
 var $76=(($75+28)|0);
 var $77=HEAP32[(($76)>>2)];
 var $78=$77&4;
 var $79=($78|0)!=0;
 if($79){label=22;break;}else{label=25;break;}
 case 22: 
 var $81=HEAP32[((2305572)>>2)];
 var $82=$3;
 var $83=($81|0)<=($82|0);
 if($83){label=23;break;}else{label=24;break;}
 case 23: 
 var $85=$3;
 var $86=HEAP32[((2305572)>>2)];
 var $87=((($86)+($85))|0);
 HEAP32[((2305572)>>2)]=$87;
 label=24;break;
 case 24: 
 HEAP8[(2305605)]=1;
 label=30;break;
 case 25: 
 var $90=HEAP32[((2305536)>>2)];
 var $91=(($90+40)|0);
 var $92=HEAP32[(($91)>>2)];
 var $93=($92|0)==0;
 if($93){label=26;break;}else{label=29;break;}
 case 26: 
 var $95=HEAP32[((2305572)>>2)];
 var $96=$3;
 var $97=($95|0)<=($96|0);
 if($97){label=27;break;}else{label=28;break;}
 case 27: 
 var $99=$3;
 var $100=HEAP32[((2305572)>>2)];
 var $101=((($100)+($99))|0);
 HEAP32[((2305572)>>2)]=$101;
 label=28;break;
 case 28: 
 label=29;break;
 case 29: 
 label=30;break;
 case 30: 
 var $105=HEAP32[((2305536)>>2)];
 var $106=(($105+28)|0);
 var $107=HEAP32[(($106)>>2)];
 var $108=$107&56;
 var $109=($108|0)==56;
 if($109){label=31;break;}else{label=34;break;}
 case 31: 
 var $111=HEAP32[((2305576)>>2)];
 var $112=$3;
 var $113=($111|0)<=($112|0);
 if($113){label=32;break;}else{label=33;break;}
 case 32: 
 var $115=$3;
 var $116=HEAP32[((2305576)>>2)];
 var $117=((($116)+($115))|0);
 HEAP32[((2305576)>>2)]=$117;
 label=33;break;
 case 33: 
 label=34;break;
 case 34: 
 var $120=HEAP8[(2305606)];
 var $121=($120&255);
 var $122=HEAP32[((2305536)>>2)];
 var $123=(($122+28)|0);
 var $124=HEAP32[(($123)>>2)];
 var $125=$121|$124;
 $outn=$125;
 label=35;break;
 case 35: 
 var $127=$3;
 var $128=($127|0)>0;
 if($128){label=36;break;}else{label=131;break;}
 case 36: 
 $left=2;
 $volc=0;
 $volb=0;
 $vola=0;
 label=37;break;
 case 37: 
 var $131=HEAP32[((2305576)>>2)];
 var $132=$left;
 var $133=($131|0)<($132|0);
 if($133){label=38;break;}else{label=39;break;}
 case 38: 
 var $135=HEAP32[((2305576)>>2)];
 $nextevent=$135;
 label=40;break;
 case 39: 
 var $137=$left;
 $nextevent=$137;
 label=40;break;
 case 40: 
 var $139=$outn;
 var $140=$139&8;
 var $141=($140|0)!=0;
 if($141){label=41;break;}else{label=53;break;}
 case 41: 
 var $143=HEAP8[(2305603)];
 var $144=(($143<<24)>>24)!=0;
 if($144){label=42;break;}else{label=43;break;}
 case 42: 
 var $146=HEAP32[((2305564)>>2)];
 var $147=$vola;
 var $148=((($147)+($146))|0);
 $vola=$148;
 label=43;break;
 case 43: 
 var $150=$nextevent;
 var $151=HEAP32[((2305564)>>2)];
 var $152=((($151)-($150))|0);
 HEAP32[((2305564)>>2)]=$152;
 label=44;break;
 case 44: 
 var $154=HEAP32[((2305564)>>2)];
 var $155=($154|0)<=0;
 if($155){label=45;break;}else{label=50;break;}
 case 45: 
 var $157=HEAP32[((2305544)>>2)];
 var $158=HEAP32[((2305564)>>2)];
 var $159=((($158)+($157))|0);
 HEAP32[((2305564)>>2)]=$159;
 var $160=HEAP32[((2305564)>>2)];
 var $161=($160|0)>0;
 if($161){label=46;break;}else{label=49;break;}
 case 46: 
 var $163=HEAP8[(2305603)];
 var $164=($163&255);
 var $165=$164^1;
 var $166=(($165)&255);
 HEAP8[(2305603)]=$166;
 var $167=HEAP8[(2305603)];
 var $168=(($167<<24)>>24)!=0;
 if($168){label=47;break;}else{label=48;break;}
 case 47: 
 var $170=HEAP32[((2305544)>>2)];
 var $171=$vola;
 var $172=((($171)+($170))|0);
 $vola=$172;
 label=48;break;
 case 48: 
 label=50;break;
 case 49: 
 var $175=HEAP32[((2305544)>>2)];
 var $176=HEAP32[((2305564)>>2)];
 var $177=((($176)+($175))|0);
 HEAP32[((2305564)>>2)]=$177;
 var $178=HEAP32[((2305544)>>2)];
 var $179=$vola;
 var $180=((($179)+($178))|0);
 $vola=$180;
 label=44;break;
 case 50: 
 var $182=HEAP8[(2305603)];
 var $183=(($182<<24)>>24)!=0;
 if($183){label=51;break;}else{label=52;break;}
 case 51: 
 var $185=HEAP32[((2305564)>>2)];
 var $186=$vola;
 var $187=((($186)-($185))|0);
 $vola=$187;
 label=52;break;
 case 52: 
 label=59;break;
 case 53: 
 var $190=$nextevent;
 var $191=HEAP32[((2305564)>>2)];
 var $192=((($191)-($190))|0);
 HEAP32[((2305564)>>2)]=$192;
 label=54;break;
 case 54: 
 var $194=HEAP32[((2305564)>>2)];
 var $195=($194|0)<=0;
 if($195){label=55;break;}else{label=58;break;}
 case 55: 
 var $197=HEAP32[((2305544)>>2)];
 var $198=HEAP32[((2305564)>>2)];
 var $199=((($198)+($197))|0);
 HEAP32[((2305564)>>2)]=$199;
 var $200=HEAP32[((2305564)>>2)];
 var $201=($200|0)>0;
 if($201){label=56;break;}else{label=57;break;}
 case 56: 
 var $203=HEAP8[(2305603)];
 var $204=($203&255);
 var $205=$204^1;
 var $206=(($205)&255);
 HEAP8[(2305603)]=$206;
 label=58;break;
 case 57: 
 var $208=HEAP32[((2305544)>>2)];
 var $209=HEAP32[((2305564)>>2)];
 var $210=((($209)+($208))|0);
 HEAP32[((2305564)>>2)]=$210;
 label=54;break;
 case 58: 
 label=59;break;
 case 59: 
 var $213=$outn;
 var $214=$213&16;
 var $215=($214|0)!=0;
 if($215){label=60;break;}else{label=72;break;}
 case 60: 
 var $217=HEAP8[(2305604)];
 var $218=(($217<<24)>>24)!=0;
 if($218){label=61;break;}else{label=62;break;}
 case 61: 
 var $220=HEAP32[((2305568)>>2)];
 var $221=$volb;
 var $222=((($221)+($220))|0);
 $volb=$222;
 label=62;break;
 case 62: 
 var $224=$nextevent;
 var $225=HEAP32[((2305568)>>2)];
 var $226=((($225)-($224))|0);
 HEAP32[((2305568)>>2)]=$226;
 label=63;break;
 case 63: 
 var $228=HEAP32[((2305568)>>2)];
 var $229=($228|0)<=0;
 if($229){label=64;break;}else{label=69;break;}
 case 64: 
 var $231=HEAP32[((2305548)>>2)];
 var $232=HEAP32[((2305568)>>2)];
 var $233=((($232)+($231))|0);
 HEAP32[((2305568)>>2)]=$233;
 var $234=HEAP32[((2305568)>>2)];
 var $235=($234|0)>0;
 if($235){label=65;break;}else{label=68;break;}
 case 65: 
 var $237=HEAP8[(2305604)];
 var $238=($237&255);
 var $239=$238^1;
 var $240=(($239)&255);
 HEAP8[(2305604)]=$240;
 var $241=HEAP8[(2305604)];
 var $242=(($241<<24)>>24)!=0;
 if($242){label=66;break;}else{label=67;break;}
 case 66: 
 var $244=HEAP32[((2305548)>>2)];
 var $245=$volb;
 var $246=((($245)+($244))|0);
 $volb=$246;
 label=67;break;
 case 67: 
 label=69;break;
 case 68: 
 var $249=HEAP32[((2305548)>>2)];
 var $250=HEAP32[((2305568)>>2)];
 var $251=((($250)+($249))|0);
 HEAP32[((2305568)>>2)]=$251;
 var $252=HEAP32[((2305548)>>2)];
 var $253=$volb;
 var $254=((($253)+($252))|0);
 $volb=$254;
 label=63;break;
 case 69: 
 var $256=HEAP8[(2305604)];
 var $257=(($256<<24)>>24)!=0;
 if($257){label=70;break;}else{label=71;break;}
 case 70: 
 var $259=HEAP32[((2305568)>>2)];
 var $260=$volb;
 var $261=((($260)-($259))|0);
 $volb=$261;
 label=71;break;
 case 71: 
 label=78;break;
 case 72: 
 var $264=$nextevent;
 var $265=HEAP32[((2305568)>>2)];
 var $266=((($265)-($264))|0);
 HEAP32[((2305568)>>2)]=$266;
 label=73;break;
 case 73: 
 var $268=HEAP32[((2305568)>>2)];
 var $269=($268|0)<=0;
 if($269){label=74;break;}else{label=77;break;}
 case 74: 
 var $271=HEAP32[((2305548)>>2)];
 var $272=HEAP32[((2305568)>>2)];
 var $273=((($272)+($271))|0);
 HEAP32[((2305568)>>2)]=$273;
 var $274=HEAP32[((2305568)>>2)];
 var $275=($274|0)>0;
 if($275){label=75;break;}else{label=76;break;}
 case 75: 
 var $277=HEAP8[(2305604)];
 var $278=($277&255);
 var $279=$278^1;
 var $280=(($279)&255);
 HEAP8[(2305604)]=$280;
 label=77;break;
 case 76: 
 var $282=HEAP32[((2305548)>>2)];
 var $283=HEAP32[((2305568)>>2)];
 var $284=((($283)+($282))|0);
 HEAP32[((2305568)>>2)]=$284;
 label=73;break;
 case 77: 
 label=78;break;
 case 78: 
 var $287=$outn;
 var $288=$287&32;
 var $289=($288|0)!=0;
 if($289){label=79;break;}else{label=91;break;}
 case 79: 
 var $291=HEAP8[(2305605)];
 var $292=(($291<<24)>>24)!=0;
 if($292){label=80;break;}else{label=81;break;}
 case 80: 
 var $294=HEAP32[((2305572)>>2)];
 var $295=$volc;
 var $296=((($295)+($294))|0);
 $volc=$296;
 label=81;break;
 case 81: 
 var $298=$nextevent;
 var $299=HEAP32[((2305572)>>2)];
 var $300=((($299)-($298))|0);
 HEAP32[((2305572)>>2)]=$300;
 label=82;break;
 case 82: 
 var $302=HEAP32[((2305572)>>2)];
 var $303=($302|0)<=0;
 if($303){label=83;break;}else{label=88;break;}
 case 83: 
 var $305=HEAP32[((2305552)>>2)];
 var $306=HEAP32[((2305572)>>2)];
 var $307=((($306)+($305))|0);
 HEAP32[((2305572)>>2)]=$307;
 var $308=HEAP32[((2305572)>>2)];
 var $309=($308|0)>0;
 if($309){label=84;break;}else{label=87;break;}
 case 84: 
 var $311=HEAP8[(2305605)];
 var $312=($311&255);
 var $313=$312^1;
 var $314=(($313)&255);
 HEAP8[(2305605)]=$314;
 var $315=HEAP8[(2305605)];
 var $316=(($315<<24)>>24)!=0;
 if($316){label=85;break;}else{label=86;break;}
 case 85: 
 var $318=HEAP32[((2305552)>>2)];
 var $319=$volc;
 var $320=((($319)+($318))|0);
 $volc=$320;
 label=86;break;
 case 86: 
 label=88;break;
 case 87: 
 var $323=HEAP32[((2305552)>>2)];
 var $324=HEAP32[((2305572)>>2)];
 var $325=((($324)+($323))|0);
 HEAP32[((2305572)>>2)]=$325;
 var $326=HEAP32[((2305552)>>2)];
 var $327=$volc;
 var $328=((($327)+($326))|0);
 $volc=$328;
 label=82;break;
 case 88: 
 var $330=HEAP8[(2305605)];
 var $331=(($330<<24)>>24)!=0;
 if($331){label=89;break;}else{label=90;break;}
 case 89: 
 var $333=HEAP32[((2305572)>>2)];
 var $334=$volc;
 var $335=((($334)-($333))|0);
 $volc=$335;
 label=90;break;
 case 90: 
 label=97;break;
 case 91: 
 var $338=$nextevent;
 var $339=HEAP32[((2305572)>>2)];
 var $340=((($339)-($338))|0);
 HEAP32[((2305572)>>2)]=$340;
 label=92;break;
 case 92: 
 var $342=HEAP32[((2305572)>>2)];
 var $343=($342|0)<=0;
 if($343){label=93;break;}else{label=96;break;}
 case 93: 
 var $345=HEAP32[((2305552)>>2)];
 var $346=HEAP32[((2305572)>>2)];
 var $347=((($346)+($345))|0);
 HEAP32[((2305572)>>2)]=$347;
 var $348=HEAP32[((2305572)>>2)];
 var $349=($348|0)>0;
 if($349){label=94;break;}else{label=95;break;}
 case 94: 
 var $351=HEAP8[(2305605)];
 var $352=($351&255);
 var $353=$352^1;
 var $354=(($353)&255);
 HEAP8[(2305605)]=$354;
 label=96;break;
 case 95: 
 var $356=HEAP32[((2305552)>>2)];
 var $357=HEAP32[((2305572)>>2)];
 var $358=((($357)+($356))|0);
 HEAP32[((2305572)>>2)]=$358;
 label=92;break;
 case 96: 
 label=97;break;
 case 97: 
 var $361=$nextevent;
 var $362=HEAP32[((2305576)>>2)];
 var $363=((($362)-($361))|0);
 HEAP32[((2305576)>>2)]=$363;
 var $364=HEAP32[((2305576)>>2)];
 var $365=($364|0)<=0;
 if($365){label=98;break;}else{label=103;break;}
 case 98: 
 var $367=HEAP32[((2305612)>>2)];
 var $368=((($367)+(1))|0);
 var $369=$368&2;
 var $370=($369|0)!=0;
 if($370){label=99;break;}else{label=100;break;}
 case 99: 
 var $372=HEAP8[(2305606)];
 var $373=($372&255);
 var $374=$373^-1;
 var $375=(($374)&255);
 HEAP8[(2305606)]=$375;
 var $376=HEAP8[(2305606)];
 var $377=($376&255);
 var $378=HEAP32[((2305536)>>2)];
 var $379=(($378+28)|0);
 var $380=HEAP32[(($379)>>2)];
 var $381=$377|$380;
 $outn=$381;
 label=100;break;
 case 100: 
 var $383=HEAP32[((2305612)>>2)];
 var $384=$383&1;
 var $385=($384|0)!=0;
 if($385){label=101;break;}else{label=102;break;}
 case 101: 
 var $387=HEAP32[((2305612)>>2)];
 var $388=$387^147456;
 HEAP32[((2305612)>>2)]=$388;
 label=102;break;
 case 102: 
 var $390=HEAP32[((2305612)>>2)];
 var $391=$390>>1;
 HEAP32[((2305612)>>2)]=$391;
 var $392=HEAP32[((2305556)>>2)];
 var $393=HEAP32[((2305576)>>2)];
 var $394=((($393)+($392))|0);
 HEAP32[((2305576)>>2)]=$394;
 label=103;break;
 case 103: 
 var $396=$nextevent;
 var $397=$left;
 var $398=((($397)-($396))|0);
 $left=$398;
 label=104;break;
 case 104: 
 var $400=$left;
 var $401=($400|0)>0;
 if($401){label=37;break;}else{label=105;break;}
 case 105: 
 var $403=HEAP8[(2305611)];
 var $404=($403&255);
 var $405=($404|0)==0;
 if($405){label=106;break;}else{label=128;break;}
 case 106: 
 var $407=HEAP32[((2305580)>>2)];
 var $408=((($407)-(2))|0);
 HEAP32[((2305580)>>2)]=$408;
 var $409=HEAP32[((2305580)>>2)];
 var $410=($409|0)<=0;
 if($410){label=107;break;}else{label=127;break;}
 case 107: 
 label=108;break;
 case 108: 
 var $413=HEAP8[(2305607)];
 var $414=((($413)-(1))&255);
 HEAP8[(2305607)]=$414;
 var $415=HEAP32[((2305560)>>2)];
 var $416=HEAP32[((2305580)>>2)];
 var $417=((($416)+($415))|0);
 HEAP32[((2305580)>>2)]=$417;
 label=109;break;
 case 109: 
 var $419=HEAP32[((2305580)>>2)];
 var $420=($419|0)<=0;
 if($420){label=108;break;}else{label=110;break;}
 case 110: 
 var $422=HEAP8[(2305607)];
 var $423=(($422<<24)>>24);
 var $424=($423|0)<0;
 if($424){label=111;break;}else{label=120;break;}
 case 111: 
 var $426=HEAP8[(2305608)];
 var $427=(($426<<24)>>24)!=0;
 if($427){label=112;break;}else{label=115;break;}
 case 112: 
 var $429=HEAP8[(2305609)];
 var $430=(($429<<24)>>24)!=0;
 if($430){label=113;break;}else{label=114;break;}
 case 113: 
 var $432=HEAP8[(2305610)];
 var $433=($432&255);
 var $434=$433^31;
 var $435=(($434)&255);
 HEAP8[(2305610)]=$435;
 label=114;break;
 case 114: 
 HEAP8[(2305611)]=1;
 HEAP8[(2305607)]=0;
 label=119;break;
 case 115: 
 var $438=HEAP8[(2305609)];
 var $439=($438&255);
 var $440=($439|0)!=0;
 if($440){label=116;break;}else{label=118;break;}
 case 116: 
 var $442=HEAP8[(2305607)];
 var $443=(($442<<24)>>24);
 var $444=$443&32;
 var $445=($444|0)!=0;
 if($445){label=117;break;}else{label=118;break;}
 case 117: 
 var $447=HEAP8[(2305610)];
 var $448=($447&255);
 var $449=$448^31;
 var $450=(($449)&255);
 HEAP8[(2305610)]=$450;
 label=118;break;
 case 118: 
 var $452=HEAP8[(2305607)];
 var $453=(($452<<24)>>24);
 var $454=$453&31;
 var $455=(($454)&255);
 HEAP8[(2305607)]=$455;
 label=119;break;
 case 119: 
 label=120;break;
 case 120: 
 var $458=HEAP8[(2305607)];
 var $459=(($458<<24)>>24);
 var $460=HEAP8[(2305610)];
 var $461=($460&255);
 var $462=$459^$461;
 var $463=((2305616+($462<<2))|0);
 var $464=HEAP32[(($463)>>2)];
 HEAP32[((2305596)>>2)]=$464;
 var $465=HEAP8[(2305600)];
 var $466=(($465<<24)>>24)!=0;
 if($466){label=121;break;}else{label=122;break;}
 case 121: 
 var $468=HEAP32[((2305596)>>2)];
 HEAP32[((2305584)>>2)]=$468;
 label=122;break;
 case 122: 
 var $470=HEAP8[(2305601)];
 var $471=(($470<<24)>>24)!=0;
 if($471){label=123;break;}else{label=124;break;}
 case 123: 
 var $473=HEAP32[((2305596)>>2)];
 HEAP32[((2305588)>>2)]=$473;
 label=124;break;
 case 124: 
 var $475=HEAP8[(2305602)];
 var $476=(($475<<24)>>24)!=0;
 if($476){label=125;break;}else{label=126;break;}
 case 125: 
 var $478=HEAP32[((2305596)>>2)];
 HEAP32[((2305592)>>2)]=$478;
 label=126;break;
 case 126: 
 label=127;break;
 case 127: 
 label=128;break;
 case 128: 
 var $482=$vola;
 var $483=HEAP32[((2305584)>>2)];
 var $484=(Math_imul($482,$483)|0);
 var $485=$volb;
 var $486=HEAP32[((2305588)>>2)];
 var $487=(Math_imul($485,$486)|0);
 var $488=((($484)+($487))|0);
 var $489=$volc;
 var $490=HEAP32[((2305592)>>2)];
 var $491=(Math_imul($489,$490)|0);
 var $492=((($488)+($491))|0);
 var $493=(((($492>>>0))/(6))&-1);
 $vol=$493;
 var $494=$3;
 var $495=((($494)-(1))|0);
 $3=$495;
 var $496=$495&1;
 var $497=($496|0)!=0;
 if($497){label=129;break;}else{label=130;break;}
 case 129: 
 var $499=$vol;
 var $500=$499>>>8;
 var $501=(($500)&255);
 var $502=$buf1;
 var $503=(($502+1)|0);
 $buf1=$503;
 HEAP8[($502)]=$501;
 label=130;break;
 case 130: 
 label=35;break;
 case 131: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _e8910_done_sound(){
 var label=0;
 _SDL_CloseAudio();
 return;
}
function _e8910_build_mixer_table(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $i;
 var $out;
 $out=4095;
 $i=31;
 label=2;break;
 case 2: 
 var $2=$i;
 var $3=($2|0)>0;
 if($3){label=3;break;}else{label=5;break;}
 case 3: 
 var $5=$out;
 var $6=($5)+((0.5));
 var $7=($6>=0 ? Math_floor($6) : Math_ceil($6));
 var $8=$i;
 var $9=((2305616+($8<<2))|0);
 HEAP32[(($9)>>2)]=$7;
 var $10=$out;
 var $11=($10)/((1.188502227));
 $out=$11;
 label=4;break;
 case 4: 
 var $13=$i;
 var $14=((($13)-(1))|0);
 $i=$14;
 label=2;break;
 case 5: 
 HEAP32[((2305616)>>2)]=0;
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _display_draw_point($x,$y,$color){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $1;
 var $2;
 var $3;
 var $ofs;
 var $col;
 $1=$x;
 $2=$y;
 $3=$color;
 var $4=$2;
 var $5=HEAP32[((2262704)>>2)];
 var $6=(($5+16)|0);
 var $7=HEAP32[(($6)>>2)];
 var $8=(Math_imul($4,$7)|0);
 var $9=(((($8|0))/(4))&-1);
 var $10=$1;
 var $11=((($9)+($10))|0);
 $ofs=$11;
 var $12=$3;
 var $13=($12&255);
 var $14=((($13)+(16776960))|0);
 $col=$14;
 var $15=$col;
 var $16=$ofs;
 var $17=HEAP32[((2262704)>>2)];
 var $18=(($17+20)|0);
 var $19=HEAP32[(($18)>>2)];
 var $20=$19;
 var $21=(($20+($16<<2))|0);
 HEAP32[(($21)>>2)]=$15;
 STACKTOP=sp;return;
}
function _display_draw_line($start_x,$start_y,$end_x,$end_y,$color){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $4;
 var $5;
 var $cx;
 var $cy;
 var $dx;
 var $dy;
 var $sx;
 var $sy;
 var $err;
 var $n;
 var $e2;
 $1=$start_x;
 $2=$start_y;
 $3=$end_x;
 $4=$end_y;
 $5=$color;
 var $6=$1;
 $cx=$6;
 var $7=$2;
 $cy=$7;
 var $8=$3;
 var $9=$cx;
 var $10=((($8)-($9))|0);
 $dx=$10;
 var $11=$4;
 var $12=$cy;
 var $13=((($11)-($12))|0);
 $dy=$13;
 var $14=$dx;
 var $15=($14|0)<0;
 if($15){label=2;break;}else{label=3;break;}
 case 2: 
 var $17=$dx;
 var $18=(((-$17))|0);
 $dx=$18;
 label=3;break;
 case 3: 
 var $20=$dy;
 var $21=($20|0)<0;
 if($21){label=4;break;}else{label=5;break;}
 case 4: 
 var $23=$dy;
 var $24=(((-$23))|0);
 $dy=$24;
 label=5;break;
 case 5: 
 $sx=0;
 $sy=0;
 var $26=$cx;
 var $27=$3;
 var $28=($26|0)<($27|0);
 if($28){label=6;break;}else{label=7;break;}
 case 6: 
 $sx=1;
 label=8;break;
 case 7: 
 $sx=-1;
 label=8;break;
 case 8: 
 var $32=$cy;
 var $33=$4;
 var $34=($32|0)<($33|0);
 if($34){label=9;break;}else{label=10;break;}
 case 9: 
 $sy=1;
 label=11;break;
 case 10: 
 $sy=-1;
 label=11;break;
 case 11: 
 var $38=$dx;
 var $39=$dy;
 var $40=((($38)-($39))|0);
 $err=$40;
 $n=0;
 label=12;break;
 case 12: 
 var $42=$n;
 var $43=($42|0)<1000;
 if($43){label=13;break;}else{label=22;break;}
 case 13: 
 var $45=$cx;
 var $46=$cy;
 var $47=$5;
 _display_draw_point($45,$46,$47);
 var $48=$cx;
 var $49=$3;
 var $50=($48|0)==($49|0);
 if($50){label=14;break;}else{label=16;break;}
 case 14: 
 var $52=$cy;
 var $53=$4;
 var $54=($52|0)==($53|0);
 if($54){label=15;break;}else{label=16;break;}
 case 15: 
 label=22;break;
 case 16: 
 var $57=$err;
 var $58=($57<<1);
 $e2=$58;
 var $59=$e2;
 var $60=$dy;
 var $61=(((-$60))|0);
 var $62=($59|0)>($61|0);
 if($62){label=17;break;}else{label=18;break;}
 case 17: 
 var $64=$err;
 var $65=$dy;
 var $66=((($64)-($65))|0);
 $err=$66;
 var $67=$cx;
 var $68=$sx;
 var $69=((($67)+($68))|0);
 $cx=$69;
 label=18;break;
 case 18: 
 var $71=$e2;
 var $72=$dx;
 var $73=($71|0)<($72|0);
 if($73){label=19;break;}else{label=20;break;}
 case 19: 
 var $75=$err;
 var $76=$dx;
 var $77=((($75)+($76))|0);
 $err=$77;
 var $78=$cy;
 var $79=$sy;
 var $80=((($78)+($79))|0);
 $cy=$80;
 label=20;break;
 case 20: 
 label=21;break;
 case 21: 
 var $83=$n;
 var $84=((($83)+(1))|0);
 $n=$84;
 label=12;break;
 case 22: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _render(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 var $tick;
 var $i;
 var $j;
 var $yofs;
 var $ofs;
 var $1=_SDL_GetTicks();
 $tick=$1;
 var $2=HEAP32[((2262704)>>2)];
 var $3=_SDL_LockSurface($2);
 STACKTOP=sp;return;
}
function _osint_render(){
 var label=0;
 var sp=STACKTOP;STACKTOP=(STACKTOP+16)|0; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $v;
 var $c;
 var $dest_rect=sp;
 var $1=HEAP32[((2262704)>>2)];
 var $2=HEAP32[((2262704)>>2)];
 var $3=(($2+4)|0);
 var $4=HEAP32[(($3)>>2)];
 var $5=_SDL_MapRGB($4,0,0,0);
 var $6=_SDL_FillRect($1,0,$5);
 _render();
 $v=0;
 label=2;break;
 case 2: 
 var $8=$v;
 var $9=HEAP32[((2262624)>>2)];
 var $10=($8|0)<($9|0);
 if($10){label=3;break;}else{label=5;break;}
 case 3: 
 var $12=$v;
 var $13=HEAP32[((2000520)>>2)];
 var $14=(($13+((($12)*(20))&-1))|0);
 var $15=(($14+16)|0);
 var $16=HEAP8[($15)];
 var $17=($16&255);
 var $18=($17<<8);
 var $19=(((($18|0))/(128))&-1);
 var $20=(($19)&255);
 $c=$20;
 var $21=HEAP32[((2272032)>>2)];
 var $22=$v;
 var $23=HEAP32[((2000520)>>2)];
 var $24=(($23+((($22)*(20))&-1))|0);
 var $25=(($24)|0);
 var $26=HEAP32[(($25)>>2)];
 var $27=HEAP32[((2262712)>>2)];
 var $28=(((($26|0))/(($27|0)))&-1);
 var $29=((($21)+($28))|0);
 var $30=HEAP32[((2272024)>>2)];
 var $31=$v;
 var $32=HEAP32[((2000520)>>2)];
 var $33=(($32+((($31)*(20))&-1))|0);
 var $34=(($33+4)|0);
 var $35=HEAP32[(($34)>>2)];
 var $36=HEAP32[((2262712)>>2)];
 var $37=(((($35|0))/(($36|0)))&-1);
 var $38=((($30)+($37))|0);
 var $39=HEAP32[((2272032)>>2)];
 var $40=$v;
 var $41=HEAP32[((2000520)>>2)];
 var $42=(($41+((($40)*(20))&-1))|0);
 var $43=(($42+8)|0);
 var $44=HEAP32[(($43)>>2)];
 var $45=HEAP32[((2262712)>>2)];
 var $46=(((($44|0))/(($45|0)))&-1);
 var $47=((($39)+($46))|0);
 var $48=HEAP32[((2272024)>>2)];
 var $49=$v;
 var $50=HEAP32[((2000520)>>2)];
 var $51=(($50+((($49)*(20))&-1))|0);
 var $52=(($51+12)|0);
 var $53=HEAP32[(($52)>>2)];
 var $54=HEAP32[((2262712)>>2)];
 var $55=(((($53|0))/(($54|0)))&-1);
 var $56=((($48)+($55))|0);
 var $57=$c;
 _display_draw_line($29,$38,$47,$56,$57);
 label=4;break;
 case 4: 
 var $59=$v;
 var $60=((($59)+(1))|0);
 $v=$60;
 label=2;break;
 case 5: 
 var $62=HEAP32[((2272016)>>2)];
 var $63=($62|0)!=0;
 if($63){label=6;break;}else{label=7;break;}
 case 6: 
 var $65=(($dest_rect)|0);
 var $66=HEAP32[((2272032)>>2)];
 HEAP32[(($65)>>2)]=$66;
 var $67=(($dest_rect+4)|0);
 var $68=HEAP32[((2272024)>>2)];
 HEAP32[(($67)>>2)]=$68;
 var $69=(($dest_rect+8)|0);
 HEAP32[(($69)>>2)]=0;
 var $70=(($dest_rect+12)|0);
 HEAP32[(($70)>>2)]=0;
 label=7;break;
 case 7: 
 var $72=HEAP32[((2262704)>>2)];
 _SDL_UnlockSurface($72);
 var $73=HEAP32[((2262704)>>2)];
 var $74=HEAP32[((2262704)>>2)];
 var $75=(($74+8)|0);
 var $76=HEAP32[(($75)>>2)];
 var $77=HEAP32[((2262704)>>2)];
 var $78=(($77+12)|0);
 var $79=HEAP32[(($78)>>2)];
 _SDL_UpdateRect($73,0,0,$76,$79);
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _resize($width,$height){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $sclx;
 var $scly;
 var $screenx;
 var $screeny;
 $1=$width;
 $2=$height;
 var $3=$1;
 $screenx=$3;
 var $4=$2;
 $screeny=$4;
 var $5=$screenx;
 var $6=$screeny;
 var $7=_SDL_SetVideoMode($5,$6,32,0);
 HEAP32[((2262704)>>2)]=$7;
 var $8=HEAP32[((2262704)>>2)];
 var $9=(($8+8)|0);
 var $10=HEAP32[(($9)>>2)];
 var $11=(((33000)/(($10|0)))&-1);
 $sclx=$11;
 var $12=HEAP32[((2262704)>>2)];
 var $13=(($12+12)|0);
 var $14=HEAP32[(($13)>>2)];
 var $15=(((41000)/(($14|0)))&-1);
 $scly=$15;
 var $16=$sclx;
 var $17=$scly;
 var $18=($16|0)>($17|0);
 if($18){label=2;break;}else{label=3;break;}
 case 2: 
 var $20=$sclx;
 var $24=$20;label=4;break;
 case 3: 
 var $22=$scly;
 var $24=$22;label=4;break;
 case 4: 
 var $24;
 HEAP32[((2262712)>>2)]=$24;
 var $25=$screenx;
 var $26=HEAP32[((2262712)>>2)];
 var $27=(((33000)/(($26|0)))&-1);
 var $28=((($25)-($27))|0);
 var $29=(((($28|0))/(2))&-1);
 HEAP32[((2272032)>>2)]=$29;
 var $30=$screeny;
 var $31=HEAP32[((2262712)>>2)];
 var $32=(((41000)/(($31|0)))&-1);
 var $33=((($30)-($32))|0);
 var $34=(((($33|0))/(2))&-1);
 HEAP32[((2272024)>>2)]=$34;
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _mainloop(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $now;
 _vecx_emu(30000);
 _readevents();
 var $1=_SDL_GetTicks();
 $now=$1;
 var $2=$now;
 var $3=HEAP32[((2272040)>>2)];
 var $4=($2>>>0)<($3>>>0);
 if($4){label=2;break;}else{label=3;break;}
 case 2: 
 var $6=HEAP32[((2272040)>>2)];
 var $7=((($6)+(20))|0);
 HEAP32[((2272040)>>2)]=$7;
 label=4;break;
 case 3: 
 var $9=$now;
 HEAP32[((2272040)>>2)]=$9;
 var $10=HEAP32[((2272040)>>2)];
 var $11=((($10)+(20))|0);
 HEAP32[((2272040)>>2)]=$11;
 label=4;break;
 case 4: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _osint_emuloop(){
 var label=0;
 var $1=_SDL_GetTicks();
 var $2=((($1)+(20))|0);
 HEAP32[((2272040)>>2)]=$2;
 _vecx_reset();
 return;
}
function _load_overlay($filename){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $image;
 $1=$filename;
 var $2=$1;
 var $3=_IMG_Load($2);
 $image=$3;
 var $4=$image;
 var $5=($4|0)!=0;
 if($5){label=2;break;}else{label=3;break;}
 case 2: 
 var $7=$image;
 HEAP32[((2272008)>>2)]=$7;
 label=4;break;
 case 3: 
 var $9=HEAP32[((_stderr)>>2)];
 var $10=_SDL_GetError();
 var $11=_fprintf($9,32,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$10,tempVarArgs)); STACKTOP=tempVarArgs;
 label=4;break;
 case 4: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _main($argc,$argv){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 $1=0;
 $2=$argc;
 $3=$argv;
 var $4=_SDL_Init(48);
 var $5=($4|0)<0;
 if($5){label=2;break;}else{label=3;break;}
 case 2: 
 var $7=HEAP32[((_stderr)>>2)];
 var $8=_SDL_GetError();
 var $9=_fprintf($7,216,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 8)|0,(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=$8,tempVarArgs)); STACKTOP=tempVarArgs;
 _exit(-1);
 throw "Reached an unreachable!";
 case 3: 
 _resize(495,615);
 var $11=$2;
 var $12=($11|0)>1;
 if($12){label=4;break;}else{label=5;break;}
 case 4: 
 var $14=$3;
 var $15=(($14+4)|0);
 var $16=HEAP32[(($15)>>2)];
 HEAP32[((2272104)>>2)]=$16;
 label=5;break;
 case 5: 
 var $18=$2;
 var $19=($18|0)>2;
 if($19){label=6;break;}else{label=7;break;}
 case 6: 
 var $21=$3;
 var $22=(($21+8)|0);
 var $23=HEAP32[(($22)>>2)];
 _load_overlay($23);
 label=7;break;
 case 7: 
 _init();
 _e8910_init_sound();
 _osint_emuloop();
 _emscripten_set_main_loop((8),60,1);
 _e8910_done_sound();
 _SDL_Quit();
 STACKTOP=sp;return 0;
  default: assert(0, "bad label: " + label);
 }
}
Module["_main"] = _main;
function _init(){
 var label=0;
 var tempVarArgs=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $f;
 var $f1;
 var $1=HEAP32[((24)>>2)];
 var $2=_fopen($1,176);
 $f=$2;
 var $3=($2|0)!=0;
 if($3){label=3;break;}else{label=2;break;}
 case 2: 
 var $5=HEAP32[((24)>>2)];
 _perror($5);
 _exit(1);
 throw "Reached an unreachable!";
 case 3: 
 var $7=$f;
 var $8=_fread(2262720,1,8192,$7);
 var $9=($8|0)!=8192;
 if($9){label=4;break;}else{label=5;break;}
 case 4: 
 var $11=_printf(120,(tempVarArgs=STACKTOP,STACKTOP = (STACKTOP + 1)|0,STACKTOP = (((STACKTOP)+7)&-8),(assert((STACKTOP|0) < (STACK_MAX|0))|0),HEAP32[((tempVarArgs)>>2)]=0,tempVarArgs)); STACKTOP=tempVarArgs;
 _exit(1);
 throw "Reached an unreachable!";
 case 5: 
 var $13=$f;
 var $14=_fclose($13);
 _memset(2272112, 0, 32768)|0;
 var $15=HEAP32[((2272104)>>2)];
 var $16=($15|0)!=0;
 if($16){label=6;break;}else{label=9;break;}
 case 6: 
 var $18=HEAP32[((2272104)>>2)];
 var $19=_fopen($18,176);
 $f1=$19;
 var $20=($19|0)!=0;
 if($20){label=8;break;}else{label=7;break;}
 case 7: 
 var $22=HEAP32[((2272104)>>2)];
 _perror($22);
 _exit(1);
 throw "Reached an unreachable!";
 case 8: 
 var $24=$f1;
 var $25=_fread(2272112,1,32768,$24);
 var $26=$f1;
 var $27=_fclose($26);
 label=9;break;
 case 9: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _readevents(){
 var label=0;
 var sp=STACKTOP;STACKTOP=(STACKTOP+48)|0; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $e=sp;
 label=2;break;
 case 2: 
 var $2=_SDL_PollEvent($e);
 var $3=($2|0)!=0;
 if($3){label=3;break;}else{label=31;break;}
 case 3: 
 var $5=$e;
 var $6=HEAP32[(($5)>>2)];
 if(($6|0)==769){ label=18;break;}else if(($6|0)==256){ label=4;break;}else if(($6|0)==28673){ label=5;break;}else if(($6|0)==768){ label=6;break;}else{label=29;break;}
 case 4: 
 _exit(0);
 throw "Reached an unreachable!";
 case 5: 
 label=30;break;
 case 6: 
 var $10=$e;
 var $11=(($10+12)|0);
 var $12=(($11+4)|0);
 var $13=HEAP32[(($12)>>2)];
 switch(($13|0)){case 100:{ label=10;break;}case 102:{ label=11;break;}case 1104:{ label=12;break;}case 1103:{ label=13;break;}case 1106:{ label=14;break;}case 1105:{ label=15;break;}case 27:{ label=7;break;}case 97:{ label=8;break;}case 115:{ label=9;break;}default:{label=16;break;}}break;
 case 7: 
 _exit(0);
 throw "Reached an unreachable!";
 case 8: 
 var $16=HEAP32[((2262696)>>2)];
 var $17=$16&-2;
 HEAP32[((2262696)>>2)]=$17;
 label=17;break;
 case 9: 
 var $19=HEAP32[((2262696)>>2)];
 var $20=$19&-3;
 HEAP32[((2262696)>>2)]=$20;
 label=17;break;
 case 10: 
 var $22=HEAP32[((2262696)>>2)];
 var $23=$22&-5;
 HEAP32[((2262696)>>2)]=$23;
 label=17;break;
 case 11: 
 var $25=HEAP32[((2262696)>>2)];
 var $26=$25&-9;
 HEAP32[((2262696)>>2)]=$26;
 label=17;break;
 case 12: 
 HEAP32[((2305008)>>2)]=0;
 label=17;break;
 case 13: 
 HEAP32[((2305008)>>2)]=255;
 label=17;break;
 case 14: 
 HEAP32[((2305000)>>2)]=255;
 label=17;break;
 case 15: 
 HEAP32[((2305000)>>2)]=0;
 label=17;break;
 case 16: 
 label=17;break;
 case 17: 
 label=30;break;
 case 18: 
 var $34=$e;
 var $35=(($34+12)|0);
 var $36=(($35+4)|0);
 var $37=HEAP32[(($36)>>2)];
 switch(($37|0)){case 97:{ label=19;break;}case 115:{ label=20;break;}case 100:{ label=21;break;}case 102:{ label=22;break;}case 1104:{ label=23;break;}case 1103:{ label=24;break;}case 1106:{ label=25;break;}case 1105:{ label=26;break;}default:{label=27;break;}}break;
 case 19: 
 var $39=HEAP32[((2262696)>>2)];
 var $40=$39|1;
 HEAP32[((2262696)>>2)]=$40;
 label=28;break;
 case 20: 
 var $42=HEAP32[((2262696)>>2)];
 var $43=$42|2;
 HEAP32[((2262696)>>2)]=$43;
 label=28;break;
 case 21: 
 var $45=HEAP32[((2262696)>>2)];
 var $46=$45|4;
 HEAP32[((2262696)>>2)]=$46;
 label=28;break;
 case 22: 
 var $48=HEAP32[((2262696)>>2)];
 var $49=$48|8;
 HEAP32[((2262696)>>2)]=$49;
 label=28;break;
 case 23: 
 HEAP32[((2305008)>>2)]=128;
 label=28;break;
 case 24: 
 HEAP32[((2305008)>>2)]=128;
 label=28;break;
 case 25: 
 HEAP32[((2305000)>>2)]=128;
 label=28;break;
 case 26: 
 HEAP32[((2305000)>>2)]=128;
 label=28;break;
 case 27: 
 label=28;break;
 case 28: 
 label=30;break;
 case 29: 
 label=30;break;
 case 30: 
 label=2;break;
 case 31: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _read8($address){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $data;
 $1=$address;
 var $2=$1;
 var $3=$2&57344;
 var $4=($3|0)==57344;
 if($4){label=2;break;}else{label=3;break;}
 case 2: 
 var $6=$1;
 var $7=$6&8191;
 var $8=((2262720+$7)|0);
 var $9=HEAP8[($8)];
 $data=$9;
 label=40;break;
 case 3: 
 var $11=$1;
 var $12=$11&57344;
 var $13=($12|0)==49152;
 if($13){label=4;break;}else{label=35;break;}
 case 4: 
 var $15=$1;
 var $16=$15&2048;
 var $17=($16|0)!=0;
 if($17){label=5;break;}else{label=6;break;}
 case 5: 
 var $19=$1;
 var $20=$19&1023;
 var $21=((2270984+$20)|0);
 var $22=HEAP8[($21)];
 $data=$22;
 label=34;break;
 case 6: 
 var $24=$1;
 var $25=$24&4096;
 var $26=($25|0)!=0;
 if($26){label=7;break;}else{label=33;break;}
 case 7: 
 var $28=$1;
 var $29=$28&15;
 switch(($29|0)){case 1:{ label=12;break;}case 15:{ label=15;break;}case 2:{ label=19;break;}case 3:{ label=20;break;}case 4:{ label=21;break;}case 5:{ label=22;break;}case 6:{ label=23;break;}case 7:{ label=24;break;}case 8:{ label=25;break;}case 9:{ label=26;break;}case 10:{ label=27;break;}case 11:{ label=28;break;}case 12:{ label=29;break;}case 13:{ label=30;break;}case 14:{ label=31;break;}case 0:{ label=8;break;}default:{label=32;break;}}break;
 case 8: 
 var $31=HEAP32[((504)>>2)];
 var $32=$31&128;
 var $33=($32|0)!=0;
 if($33){label=9;break;}else{label=10;break;}
 case 9: 
 var $35=HEAP32[((432)>>2)];
 var $36=$35&95;
 var $37=HEAP32[((344)>>2)];
 var $38=$36|$37;
 var $39=HEAP32[((2305048)>>2)];
 var $40=$38|$39;
 var $41=(($40)&255);
 $data=$41;
 label=11;break;
 case 10: 
 var $43=HEAP32[((432)>>2)];
 var $44=$43&223;
 var $45=HEAP32[((2305048)>>2)];
 var $46=$44|$45;
 var $47=(($46)&255);
 $data=$47;
 label=11;break;
 case 11: 
 label=32;break;
 case 12: 
 var $50=HEAP32[((424)>>2)];
 var $51=$50&14;
 var $52=($51|0)==8;
 if($52){label=13;break;}else{label=14;break;}
 case 13: 
 HEAP32[((496)>>2)]=0;
 label=14;break;
 case 14: 
 label=15;break;
 case 15: 
 var $56=HEAP32[((432)>>2)];
 var $57=$56&24;
 var $58=($57|0)==8;
 if($58){label=16;break;}else{label=17;break;}
 case 16: 
 var $60=HEAP32[((2262632)>>2)];
 var $61=((2262640+($60<<2))|0);
 var $62=HEAP32[(($61)>>2)];
 var $63=(($62)&255);
 $data=$63;
 label=18;break;
 case 17: 
 var $65=HEAP32[((440)>>2)];
 var $66=(($65)&255);
 $data=$66;
 label=18;break;
 case 18: 
 label=32;break;
 case 19: 
 var $69=HEAP32[((464)>>2)];
 var $70=(($69)&255);
 $data=$70;
 label=32;break;
 case 20: 
 var $72=HEAP32[((472)>>2)];
 var $73=(($72)&255);
 $data=$73;
 label=32;break;
 case 21: 
 var $75=HEAP32[((384)>>2)];
 var $76=(($75)&255);
 $data=$76;
 var $77=HEAP32[((448)>>2)];
 var $78=$77&191;
 HEAP32[((448)>>2)]=$78;
 HEAP32[((352)>>2)]=0;
 HEAP32[((376)>>2)]=0;
 HEAP32[((344)>>2)]=128;
 _int_update();
 label=32;break;
 case 22: 
 var $80=HEAP32[((384)>>2)];
 var $81=$80>>>8;
 var $82=(($81)&255);
 $data=$82;
 label=32;break;
 case 23: 
 var $84=HEAP32[((360)>>2)];
 var $85=(($84)&255);
 $data=$85;
 label=32;break;
 case 24: 
 var $87=HEAP32[((368)>>2)];
 var $88=(($87)&255);
 $data=$88;
 label=32;break;
 case 25: 
 var $90=HEAP32[((336)>>2)];
 var $91=(($90)&255);
 $data=$91;
 var $92=HEAP32[((448)>>2)];
 var $93=$92&223;
 HEAP32[((448)>>2)]=$93;
 HEAP32[((312)>>2)]=0;
 HEAP32[((328)>>2)]=0;
 _int_update();
 label=32;break;
 case 26: 
 var $95=HEAP32[((336)>>2)];
 var $96=$95>>>8;
 var $97=(($96)&255);
 $data=$97;
 label=32;break;
 case 27: 
 var $99=HEAP32[((416)>>2)];
 var $100=(($99)&255);
 $data=$100;
 var $101=HEAP32[((448)>>2)];
 var $102=$101&251;
 HEAP32[((448)>>2)]=$102;
 HEAP32[((408)>>2)]=0;
 HEAP32[((392)>>2)]=1;
 _int_update();
 label=32;break;
 case 28: 
 var $104=HEAP32[((504)>>2)];
 var $105=(($104)&255);
 $data=$105;
 label=32;break;
 case 29: 
 var $107=HEAP32[((424)>>2)];
 var $108=(($107)&255);
 $data=$108;
 label=32;break;
 case 30: 
 var $110=HEAP32[((448)>>2)];
 var $111=(($110)&255);
 $data=$111;
 label=32;break;
 case 31: 
 var $113=HEAP32[((456)>>2)];
 var $114=$113|128;
 var $115=(($114)&255);
 $data=$115;
 label=32;break;
 case 32: 
 label=33;break;
 case 33: 
 label=34;break;
 case 34: 
 label=39;break;
 case 35: 
 var $120=$1;
 var $121=($120>>>0)<32768;
 if($121){label=36;break;}else{label=37;break;}
 case 36: 
 var $123=$1;
 var $124=((2272112+$123)|0);
 var $125=HEAP8[($124)];
 $data=$125;
 label=38;break;
 case 37: 
 $data=-1;
 label=38;break;
 case 38: 
 label=39;break;
 case 39: 
 label=40;break;
 case 40: 
 var $130=$data;
 STACKTOP=sp;return $130;
  default: assert(0, "bad label: " + label);
 }
}
function _int_update(){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=HEAP32[((448)>>2)];
 var $2=$1&127;
 var $3=HEAP32[((456)>>2)];
 var $4=$3&127;
 var $5=$2&$4;
 var $6=($5|0)!=0;
 if($6){label=2;break;}else{label=3;break;}
 case 2: 
 var $8=HEAP32[((448)>>2)];
 var $9=$8|128;
 HEAP32[((448)>>2)]=$9;
 label=4;break;
 case 3: 
 var $11=HEAP32[((448)>>2)];
 var $12=$11&127;
 HEAP32[((448)>>2)]=$12;
 label=4;break;
 case 4: 
 return;
  default: assert(0, "bad label: " + label);
 }
}
function _write8($address,$data){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 $1=$address;
 $2=$data;
 var $3=$1;
 var $4=$3&57344;
 var $5=($4|0)==57344;
 if($5){label=2;break;}else{label=3;break;}
 case 2: 
 label=43;break;
 case 3: 
 var $8=$1;
 var $9=$8&57344;
 var $10=($9|0)==49152;
 if($10){label=4;break;}else{label=39;break;}
 case 4: 
 var $12=$1;
 var $13=$12&2048;
 var $14=($13|0)!=0;
 if($14){label=5;break;}else{label=6;break;}
 case 5: 
 var $16=$2;
 var $17=$1;
 var $18=$17&1023;
 var $19=((2270984+$18)|0);
 HEAP8[($19)]=$16;
 label=6;break;
 case 6: 
 var $21=$1;
 var $22=$21&4096;
 var $23=($22|0)!=0;
 if($23){label=7;break;}else{label=38;break;}
 case 7: 
 var $25=$1;
 var $26=$25&15;
 switch(($26|0)){case 1:{ label=11;break;}case 15:{ label=14;break;}case 2:{ label=15;break;}case 3:{ label=16;break;}case 4:{ label=17;break;}case 5:{ label=18;break;}case 6:{ label=19;break;}case 7:{ label=20;break;}case 8:{ label=21;break;}case 9:{ label=22;break;}case 10:{ label=23;break;}case 11:{ label=24;break;}case 12:{ label=25;break;}case 13:{ label=32;break;}case 14:{ label=33;break;}case 0:{ label=8;break;}default:{label=37;break;}}break;
 case 8: 
 var $28=$2;
 var $29=($28&255);
 HEAP32[((432)>>2)]=$29;
 _snd_update();
 _alg_update();
 var $30=HEAP32[((424)>>2)];
 var $31=$30&224;
 var $32=($31|0)==128;
 if($32){label=9;break;}else{label=10;break;}
 case 9: 
 HEAP32[((488)>>2)]=0;
 label=10;break;
 case 10: 
 label=37;break;
 case 11: 
 var $36=HEAP32[((424)>>2)];
 var $37=$36&14;
 var $38=($37|0)==8;
 if($38){label=12;break;}else{label=13;break;}
 case 12: 
 HEAP32[((496)>>2)]=0;
 label=13;break;
 case 13: 
 label=14;break;
 case 14: 
 var $42=$2;
 var $43=($42&255);
 HEAP32[((440)>>2)]=$43;
 _snd_update();
 var $44=$2;
 var $45=($44&255);
 var $46=$45^128;
 HEAP32[((2304896)>>2)]=$46;
 _alg_update();
 label=37;break;
 case 15: 
 var $48=$2;
 var $49=($48&255);
 HEAP32[((464)>>2)]=$49;
 label=37;break;
 case 16: 
 var $51=$2;
 var $52=($51&255);
 HEAP32[((472)>>2)]=$52;
 label=37;break;
 case 17: 
 var $54=$2;
 var $55=($54&255);
 HEAP32[((360)>>2)]=$55;
 label=37;break;
 case 18: 
 var $57=$2;
 var $58=($57&255);
 HEAP32[((368)>>2)]=$58;
 var $59=HEAP32[((368)>>2)];
 var $60=$59<<8;
 var $61=HEAP32[((360)>>2)];
 var $62=$60|$61;
 HEAP32[((384)>>2)]=$62;
 var $63=HEAP32[((448)>>2)];
 var $64=$63&191;
 HEAP32[((448)>>2)]=$64;
 HEAP32[((352)>>2)]=1;
 HEAP32[((376)>>2)]=1;
 HEAP32[((344)>>2)]=0;
 _int_update();
 label=37;break;
 case 19: 
 var $66=$2;
 var $67=($66&255);
 HEAP32[((360)>>2)]=$67;
 label=37;break;
 case 20: 
 var $69=$2;
 var $70=($69&255);
 HEAP32[((368)>>2)]=$70;
 label=37;break;
 case 21: 
 var $72=$2;
 var $73=($72&255);
 HEAP32[((320)>>2)]=$73;
 label=37;break;
 case 22: 
 var $75=$2;
 var $76=($75&255);
 var $77=$76<<8;
 var $78=HEAP32[((320)>>2)];
 var $79=$77|$78;
 HEAP32[((336)>>2)]=$79;
 var $80=HEAP32[((448)>>2)];
 var $81=$80&223;
 HEAP32[((448)>>2)]=$81;
 HEAP32[((312)>>2)]=1;
 HEAP32[((328)>>2)]=1;
 _int_update();
 label=37;break;
 case 23: 
 var $83=$2;
 var $84=($83&255);
 HEAP32[((416)>>2)]=$84;
 var $85=HEAP32[((448)>>2)];
 var $86=$85&251;
 HEAP32[((448)>>2)]=$86;
 HEAP32[((408)>>2)]=0;
 HEAP32[((392)>>2)]=1;
 _int_update();
 label=37;break;
 case 24: 
 var $88=$2;
 var $89=($88&255);
 HEAP32[((504)>>2)]=$89;
 label=37;break;
 case 25: 
 var $91=$2;
 var $92=($91&255);
 HEAP32[((424)>>2)]=$92;
 var $93=HEAP32[((424)>>2)];
 var $94=$93&14;
 var $95=($94|0)==12;
 if($95){label=26;break;}else{label=27;break;}
 case 26: 
 HEAP32[((496)>>2)]=0;
 label=28;break;
 case 27: 
 HEAP32[((496)>>2)]=1;
 label=28;break;
 case 28: 
 var $99=HEAP32[((424)>>2)];
 var $100=$99&224;
 var $101=($100|0)==192;
 if($101){label=29;break;}else{label=30;break;}
 case 29: 
 HEAP32[((488)>>2)]=0;
 label=31;break;
 case 30: 
 HEAP32[((488)>>2)]=1;
 label=31;break;
 case 31: 
 label=37;break;
 case 32: 
 var $106=$2;
 var $107=($106&255);
 var $108=$107&127;
 var $109=$108^-1;
 var $110=HEAP32[((448)>>2)];
 var $111=$110&$109;
 HEAP32[((448)>>2)]=$111;
 _int_update();
 label=37;break;
 case 33: 
 var $113=$2;
 var $114=($113&255);
 var $115=$114&128;
 var $116=($115|0)!=0;
 if($116){label=34;break;}else{label=35;break;}
 case 34: 
 var $118=$2;
 var $119=($118&255);
 var $120=$119&127;
 var $121=HEAP32[((456)>>2)];
 var $122=$121|$120;
 HEAP32[((456)>>2)]=$122;
 label=36;break;
 case 35: 
 var $124=$2;
 var $125=($124&255);
 var $126=$125&127;
 var $127=$126^-1;
 var $128=HEAP32[((456)>>2)];
 var $129=$128&$127;
 HEAP32[((456)>>2)]=$129;
 label=36;break;
 case 36: 
 _int_update();
 label=37;break;
 case 37: 
 label=38;break;
 case 38: 
 label=42;break;
 case 39: 
 var $134=$1;
 var $135=($134>>>0)<32768;
 if($135){label=40;break;}else{label=41;break;}
 case 40: 
 label=41;break;
 case 41: 
 label=42;break;
 case 42: 
 label=43;break;
 case 43: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _snd_update(){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=HEAP32[((432)>>2)];
 var $2=$1&24;
 if(($2|0)==0){ label=2;break;}else if(($2|0)==8){ label=3;break;}else if(($2|0)==16){ label=4;break;}else if(($2|0)==24){ label=7;break;}else{label=10;break;}
 case 2: 
 label=10;break;
 case 3: 
 label=10;break;
 case 4: 
 var $6=HEAP32[((2262632)>>2)];
 var $7=($6|0)!=14;
 if($7){label=5;break;}else{label=6;break;}
 case 5: 
 var $9=HEAP32[((440)>>2)];
 var $10=HEAP32[((2262632)>>2)];
 var $11=((2262640+($10<<2))|0);
 HEAP32[(($11)>>2)]=$9;
 var $12=HEAP32[((2262632)>>2)];
 var $13=HEAP32[((440)>>2)];
 _e8910_write($12,$13);
 label=6;break;
 case 6: 
 label=10;break;
 case 7: 
 var $16=HEAP32[((440)>>2)];
 var $17=$16&240;
 var $18=($17|0)==0;
 if($18){label=8;break;}else{label=9;break;}
 case 8: 
 var $20=HEAP32[((440)>>2)];
 var $21=$20&15;
 HEAP32[((2262632)>>2)]=$21;
 label=9;break;
 case 9: 
 label=10;break;
 case 10: 
 return;
  default: assert(0, "bad label: " + label);
 }
}
function _alg_update(){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=HEAP32[((432)>>2)];
 var $2=$1&6;
 if(($2|0)==6){ label=14;break;}else if(($2|0)==0){ label=2;break;}else if(($2|0)==2){ label=5;break;}else if(($2|0)==4){ label=8;break;}else{label=15;break;}
 case 2: 
 var $4=HEAP32[((2305008)>>2)];
 HEAP32[((2304976)>>2)]=$4;
 var $5=HEAP32[((432)>>2)];
 var $6=$5&1;
 var $7=($6|0)==0;
 if($7){label=3;break;}else{label=4;break;}
 case 3: 
 var $9=HEAP32[((2304896)>>2)];
 HEAP32[((2304888)>>2)]=$9;
 label=4;break;
 case 4: 
 label=15;break;
 case 5: 
 var $12=HEAP32[((2305000)>>2)];
 HEAP32[((2304976)>>2)]=$12;
 var $13=HEAP32[((432)>>2)];
 var $14=$13&1;
 var $15=($14|0)==0;
 if($15){label=6;break;}else{label=7;break;}
 case 6: 
 var $17=HEAP32[((2304896)>>2)];
 HEAP32[((2304968)>>2)]=$17;
 label=7;break;
 case 7: 
 label=15;break;
 case 8: 
 var $20=HEAP32[((2304992)>>2)];
 HEAP32[((2304976)>>2)]=$20;
 var $21=HEAP32[((432)>>2)];
 var $22=$21&1;
 var $23=($22|0)==0;
 if($23){label=9;break;}else{label=13;break;}
 case 9: 
 var $25=HEAP32[((2304896)>>2)];
 var $26=($25>>>0)>128;
 if($26){label=10;break;}else{label=11;break;}
 case 10: 
 var $28=HEAP32[((2304896)>>2)];
 var $29=((($28)-(128))|0);
 HEAP32[((2304880)>>2)]=$29;
 label=12;break;
 case 11: 
 HEAP32[((2304880)>>2)]=0;
 label=12;break;
 case 12: 
 label=13;break;
 case 13: 
 label=15;break;
 case 14: 
 var $34=HEAP32[((2304984)>>2)];
 HEAP32[((2304976)>>2)]=$34;
 label=15;break;
 case 15: 
 var $36=HEAP32[((2304976)>>2)];
 var $37=HEAP32[((2304896)>>2)];
 var $38=($36>>>0)>($37>>>0);
 if($38){label=16;break;}else{label=17;break;}
 case 16: 
 HEAP32[((2305048)>>2)]=32;
 label=18;break;
 case 17: 
 HEAP32[((2305048)>>2)]=0;
 label=18;break;
 case 18: 
 var $42=HEAP32[((2304896)>>2)];
 var $43=HEAP32[((2304968)>>2)];
 var $44=((($42)-($43))|0);
 HEAP32[((2305024)>>2)]=$44;
 var $45=HEAP32[((2304968)>>2)];
 var $46=HEAP32[((2304888)>>2)];
 var $47=((($45)-($46))|0);
 HEAP32[((2305016)>>2)]=$47;
 return;
  default: assert(0, "bad label: " + label);
 }
}
function _vecx_reset(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $r;
 $r=0;
 label=2;break;
 case 2: 
 var $2=$r;
 var $3=($2>>>0)<1024;
 if($3){label=3;break;}else{label=5;break;}
 case 3: 
 var $5=$r;
 var $6=$5&255;
 var $7=(($6)&255);
 var $8=$r;
 var $9=((2270984+$8)|0);
 HEAP8[($9)]=$7;
 label=4;break;
 case 4: 
 var $11=$r;
 var $12=((($11)+(1))|0);
 $r=$12;
 label=2;break;
 case 5: 
 $r=0;
 label=6;break;
 case 6: 
 var $15=$r;
 var $16=($15>>>0)<16;
 if($16){label=7;break;}else{label=9;break;}
 case 7: 
 var $18=$r;
 var $19=((2262640+($18<<2))|0);
 HEAP32[(($19)>>2)]=0;
 var $20=$r;
 _e8910_write($20,0);
 label=8;break;
 case 8: 
 var $22=$r;
 var $23=((($22)+(1))|0);
 $r=$23;
 label=6;break;
 case 9: 
 HEAP32[((2262696)>>2)]=255;
 _e8910_write(14,255);
 HEAP32[((2262632)>>2)]=0;
 HEAP32[((440)>>2)]=0;
 HEAP32[((432)>>2)]=0;
 HEAP32[((472)>>2)]=0;
 HEAP32[((464)>>2)]=0;
 HEAP32[((352)>>2)]=0;
 HEAP32[((376)>>2)]=0;
 HEAP32[((384)>>2)]=0;
 HEAP32[((360)>>2)]=0;
 HEAP32[((368)>>2)]=0;
 HEAP32[((344)>>2)]=128;
 HEAP32[((312)>>2)]=0;
 HEAP32[((328)>>2)]=0;
 HEAP32[((336)>>2)]=0;
 HEAP32[((320)>>2)]=0;
 HEAP32[((416)>>2)]=0;
 HEAP32[((408)>>2)]=8;
 HEAP32[((400)>>2)]=0;
 HEAP32[((392)>>2)]=0;
 HEAP32[((504)>>2)]=0;
 HEAP32[((424)>>2)]=0;
 HEAP32[((448)>>2)]=0;
 HEAP32[((456)>>2)]=0;
 HEAP32[((496)>>2)]=1;
 HEAP32[((488)>>2)]=1;
 HEAP32[((480)>>2)]=0;
 HEAP32[((2304968)>>2)]=128;
 HEAP32[((2304896)>>2)]=128;
 HEAP32[((2304888)>>2)]=128;
 HEAP32[((2304880)>>2)]=0;
 HEAP32[((2305008)>>2)]=128;
 HEAP32[((2305000)>>2)]=128;
 HEAP32[((2304992)>>2)]=128;
 HEAP32[((2304984)>>2)]=128;
 HEAP32[((2304976)>>2)]=128;
 HEAP32[((2305048)>>2)]=0;
 HEAP32[((2305024)>>2)]=0;
 HEAP32[((2305016)>>2)]=0;
 HEAP32[((2305040)>>2)]=16500;
 HEAP32[((2305032)>>2)]=20500;
 HEAP32[((2304904)>>2)]=0;
 HEAP32[((2262624)>>2)]=0;
 HEAP32[((2262616)>>2)]=0;
 HEAP32[((2000520)>>2)]=512;
 HEAP32[((2000512)>>2)]=1000512;
 HEAP32[((2272080)>>2)]=50000;
 HEAP32[((2272096)>>2)]=4;
 HEAP32[((2272088)>>2)]=2;
 _e6809_reset();
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _vecx_emu($cycles){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $c;
 var $icycles;
 var $tmp;
 $1=$cycles;
 label=2;break;
 case 2: 
 var $3=$1;
 var $4=($3|0)>0;
 if($4){label=3;break;}else{label=10;break;}
 case 3: 
 var $6=HEAP32[((448)>>2)];
 var $7=$6&128;
 var $8=_e6809_sstep($7,0);
 $icycles=$8;
 $c=0;
 label=4;break;
 case 4: 
 var $10=$c;
 var $11=$icycles;
 var $12=($10>>>0)<($11>>>0);
 if($12){label=5;break;}else{label=7;break;}
 case 5: 
 _via_sstep0();
 _alg_sstep();
 _via_sstep1();
 label=6;break;
 case 6: 
 var $15=$c;
 var $16=((($15)+(1))|0);
 $c=$16;
 label=4;break;
 case 7: 
 var $18=$icycles;
 var $19=$1;
 var $20=((($19)-($18))|0);
 $1=$20;
 var $21=$icycles;
 var $22=HEAP32[((2272080)>>2)];
 var $23=((($22)-($21))|0);
 HEAP32[((2272080)>>2)]=$23;
 var $24=HEAP32[((2272080)>>2)];
 var $25=($24|0)<0;
 if($25){label=8;break;}else{label=9;break;}
 case 8: 
 var $27=HEAP32[((2272080)>>2)];
 var $28=((($27)+(50000))|0);
 HEAP32[((2272080)>>2)]=$28;
 _osint_render();
 var $29=HEAP32[((2262624)>>2)];
 HEAP32[((2262616)>>2)]=$29;
 HEAP32[((2262624)>>2)]=0;
 var $30=HEAP32[((2000512)>>2)];
 $tmp=$30;
 var $31=HEAP32[((2000520)>>2)];
 HEAP32[((2000512)>>2)]=$31;
 var $32=$tmp;
 HEAP32[((2000520)>>2)]=$32;
 label=9;break;
 case 9: 
 label=2;break;
 case 10: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _via_sstep0(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $t2shift;
 var $1=HEAP32[((352)>>2)];
 var $2=($1|0)!=0;
 if($2){label=2;break;}else{label=10;break;}
 case 2: 
 var $4=HEAP32[((384)>>2)];
 var $5=((($4)-(1))|0);
 HEAP32[((384)>>2)]=$5;
 var $6=HEAP32[((384)>>2)];
 var $7=$6&65535;
 var $8=($7|0)==65535;
 if($8){label=3;break;}else{label=9;break;}
 case 3: 
 var $10=HEAP32[((504)>>2)];
 var $11=$10&64;
 var $12=($11|0)!=0;
 if($12){label=4;break;}else{label=5;break;}
 case 4: 
 var $14=HEAP32[((448)>>2)];
 var $15=$14|64;
 HEAP32[((448)>>2)]=$15;
 _int_update();
 var $16=HEAP32[((344)>>2)];
 var $17=(((128)-($16))|0);
 HEAP32[((344)>>2)]=$17;
 var $18=HEAP32[((368)>>2)];
 var $19=$18<<8;
 var $20=HEAP32[((360)>>2)];
 var $21=$19|$20;
 HEAP32[((384)>>2)]=$21;
 label=8;break;
 case 5: 
 var $23=HEAP32[((376)>>2)];
 var $24=($23|0)!=0;
 if($24){label=6;break;}else{label=7;break;}
 case 6: 
 var $26=HEAP32[((448)>>2)];
 var $27=$26|64;
 HEAP32[((448)>>2)]=$27;
 _int_update();
 HEAP32[((344)>>2)]=128;
 HEAP32[((376)>>2)]=0;
 label=7;break;
 case 7: 
 label=8;break;
 case 8: 
 label=9;break;
 case 9: 
 label=10;break;
 case 10: 
 var $32=HEAP32[((312)>>2)];
 var $33=($32|0)!=0;
 if($33){label=11;break;}else{label=17;break;}
 case 11: 
 var $35=HEAP32[((504)>>2)];
 var $36=$35&32;
 var $37=($36|0)==0;
 if($37){label=12;break;}else{label=17;break;}
 case 12: 
 var $39=HEAP32[((336)>>2)];
 var $40=((($39)-(1))|0);
 HEAP32[((336)>>2)]=$40;
 var $41=HEAP32[((336)>>2)];
 var $42=$41&65535;
 var $43=($42|0)==65535;
 if($43){label=13;break;}else{label=16;break;}
 case 13: 
 var $45=HEAP32[((328)>>2)];
 var $46=($45|0)!=0;
 if($46){label=14;break;}else{label=15;break;}
 case 14: 
 var $48=HEAP32[((448)>>2)];
 var $49=$48|32;
 HEAP32[((448)>>2)]=$49;
 _int_update();
 HEAP32[((328)>>2)]=0;
 label=15;break;
 case 15: 
 label=16;break;
 case 16: 
 label=17;break;
 case 17: 
 var $53=HEAP32[((400)>>2)];
 var $54=((($53)-(1))|0);
 HEAP32[((400)>>2)]=$54;
 var $55=HEAP32[((400)>>2)];
 var $56=$55&255;
 var $57=($56|0)==255;
 if($57){label=18;break;}else{label=22;break;}
 case 18: 
 var $59=HEAP32[((320)>>2)];
 HEAP32[((400)>>2)]=$59;
 var $60=HEAP32[((392)>>2)];
 var $61=($60|0)!=0;
 if($61){label=19;break;}else{label=20;break;}
 case 19: 
 $t2shift=1;
 HEAP32[((392)>>2)]=0;
 label=21;break;
 case 20: 
 $t2shift=0;
 HEAP32[((392)>>2)]=1;
 label=21;break;
 case 21: 
 label=23;break;
 case 22: 
 $t2shift=0;
 label=23;break;
 case 23: 
 var $67=HEAP32[((408)>>2)];
 var $68=($67>>>0)<8;
 if($68){label=24;break;}else{label=42;break;}
 case 24: 
 var $70=HEAP32[((504)>>2)];
 var $71=$70&28;
 switch(($71|0)){case 0:{ label=25;break;}case 4:{ label=26;break;}case 8:{ label=29;break;}case 12:{ label=30;break;}case 16:{ label=31;break;}case 20:{ label=34;break;}case 24:{ label=37;break;}case 28:{ label=38;break;}default:{label=39;break;}}break;
 case 25: 
 label=39;break;
 case 26: 
 var $74=$t2shift;
 var $75=($74|0)!=0;
 if($75){label=27;break;}else{label=28;break;}
 case 27: 
 var $77=HEAP32[((416)>>2)];
 var $78=$77<<1;
 HEAP32[((416)>>2)]=$78;
 var $79=HEAP32[((408)>>2)];
 var $80=((($79)+(1))|0);
 HEAP32[((408)>>2)]=$80;
 label=28;break;
 case 28: 
 label=39;break;
 case 29: 
 var $83=HEAP32[((416)>>2)];
 var $84=$83<<1;
 HEAP32[((416)>>2)]=$84;
 var $85=HEAP32[((408)>>2)];
 var $86=((($85)+(1))|0);
 HEAP32[((408)>>2)]=$86;
 label=39;break;
 case 30: 
 label=39;break;
 case 31: 
 var $89=$t2shift;
 var $90=($89|0)!=0;
 if($90){label=32;break;}else{label=33;break;}
 case 32: 
 var $92=HEAP32[((416)>>2)];
 var $93=$92>>>7;
 var $94=$93&1;
 HEAP32[((480)>>2)]=$94;
 var $95=HEAP32[((416)>>2)];
 var $96=$95<<1;
 HEAP32[((416)>>2)]=$96;
 var $97=HEAP32[((480)>>2)];
 var $98=HEAP32[((416)>>2)];
 var $99=$98|$97;
 HEAP32[((416)>>2)]=$99;
 label=33;break;
 case 33: 
 label=39;break;
 case 34: 
 var $102=$t2shift;
 var $103=($102|0)!=0;
 if($103){label=35;break;}else{label=36;break;}
 case 35: 
 var $105=HEAP32[((416)>>2)];
 var $106=$105>>>7;
 var $107=$106&1;
 HEAP32[((480)>>2)]=$107;
 var $108=HEAP32[((416)>>2)];
 var $109=$108<<1;
 HEAP32[((416)>>2)]=$109;
 var $110=HEAP32[((480)>>2)];
 var $111=HEAP32[((416)>>2)];
 var $112=$111|$110;
 HEAP32[((416)>>2)]=$112;
 var $113=HEAP32[((408)>>2)];
 var $114=((($113)+(1))|0);
 HEAP32[((408)>>2)]=$114;
 label=36;break;
 case 36: 
 label=39;break;
 case 37: 
 var $117=HEAP32[((416)>>2)];
 var $118=$117>>>7;
 var $119=$118&1;
 HEAP32[((480)>>2)]=$119;
 var $120=HEAP32[((416)>>2)];
 var $121=$120<<1;
 HEAP32[((416)>>2)]=$121;
 var $122=HEAP32[((480)>>2)];
 var $123=HEAP32[((416)>>2)];
 var $124=$123|$122;
 HEAP32[((416)>>2)]=$124;
 var $125=HEAP32[((408)>>2)];
 var $126=((($125)+(1))|0);
 HEAP32[((408)>>2)]=$126;
 label=39;break;
 case 38: 
 label=39;break;
 case 39: 
 var $129=HEAP32[((408)>>2)];
 var $130=($129|0)==8;
 if($130){label=40;break;}else{label=41;break;}
 case 40: 
 var $132=HEAP32[((448)>>2)];
 var $133=$132|4;
 HEAP32[((448)>>2)]=$133;
 _int_update();
 label=41;break;
 case 41: 
 label=42;break;
 case 42: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _alg_sstep(){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $sig_dx;
 var $sig_dy;
 var $sig_ramp;
 var $sig_blank;
 var $1=HEAP32[((504)>>2)];
 var $2=$1&16;
 var $3=($2|0)==16;
 if($3){label=2;break;}else{label=3;break;}
 case 2: 
 var $5=HEAP32[((480)>>2)];
 $sig_blank=$5;
 label=4;break;
 case 3: 
 var $7=HEAP32[((488)>>2)];
 $sig_blank=$7;
 label=4;break;
 case 4: 
 var $9=HEAP32[((496)>>2)];
 var $10=($9|0)==0;
 if($10){label=5;break;}else{label=6;break;}
 case 5: 
 var $12=HEAP32[((2305040)>>2)];
 var $13=(((16500)-($12))|0);
 $sig_dx=$13;
 var $14=HEAP32[((2305032)>>2)];
 var $15=(((20500)-($14))|0);
 $sig_dy=$15;
 label=13;break;
 case 6: 
 var $17=HEAP32[((504)>>2)];
 var $18=$17&128;
 var $19=($18|0)!=0;
 if($19){label=7;break;}else{label=8;break;}
 case 7: 
 var $21=HEAP32[((344)>>2)];
 $sig_ramp=$21;
 label=9;break;
 case 8: 
 var $23=HEAP32[((432)>>2)];
 var $24=$23&128;
 $sig_ramp=$24;
 label=9;break;
 case 9: 
 var $26=$sig_ramp;
 var $27=($26|0)==0;
 if($27){label=10;break;}else{label=11;break;}
 case 10: 
 var $29=HEAP32[((2305024)>>2)];
 $sig_dx=$29;
 var $30=HEAP32[((2305016)>>2)];
 $sig_dy=$30;
 label=12;break;
 case 11: 
 $sig_dx=0;
 $sig_dy=0;
 label=12;break;
 case 12: 
 label=13;break;
 case 13: 
 var $34=HEAP32[((2304904)>>2)];
 var $35=($34|0)==0;
 if($35){label=14;break;}else{label=21;break;}
 case 14: 
 var $37=$sig_blank;
 var $38=($37|0)==1;
 if($38){label=15;break;}else{label=20;break;}
 case 15: 
 var $40=HEAP32[((2305040)>>2)];
 var $41=($40|0)>=0;
 if($41){label=16;break;}else{label=20;break;}
 case 16: 
 var $43=HEAP32[((2305040)>>2)];
 var $44=($43|0)<33000;
 if($44){label=17;break;}else{label=20;break;}
 case 17: 
 var $46=HEAP32[((2305032)>>2)];
 var $47=($46|0)>=0;
 if($47){label=18;break;}else{label=20;break;}
 case 18: 
 var $49=HEAP32[((2305032)>>2)];
 var $50=($49|0)<41000;
 if($50){label=19;break;}else{label=20;break;}
 case 19: 
 HEAP32[((2304904)>>2)]=1;
 var $52=HEAP32[((2305040)>>2)];
 HEAP32[((2304936)>>2)]=$52;
 var $53=HEAP32[((2305032)>>2)];
 HEAP32[((2304920)>>2)]=$53;
 var $54=HEAP32[((2305040)>>2)];
 HEAP32[((2304928)>>2)]=$54;
 var $55=HEAP32[((2305032)>>2)];
 HEAP32[((2304912)>>2)]=$55;
 var $56=$sig_dx;
 HEAP32[((2304952)>>2)]=$56;
 var $57=$sig_dy;
 HEAP32[((2304944)>>2)]=$57;
 var $58=HEAP32[((2304880)>>2)];
 var $59=(($58)&255);
 HEAP8[(2304960)]=$59;
 label=20;break;
 case 20: 
 label=35;break;
 case 21: 
 var $62=$sig_blank;
 var $63=($62|0)==0;
 if($63){label=22;break;}else{label=23;break;}
 case 22: 
 HEAP32[((2304904)>>2)]=0;
 var $65=HEAP32[((2304936)>>2)];
 var $66=HEAP32[((2304920)>>2)];
 var $67=HEAP32[((2304928)>>2)];
 var $68=HEAP32[((2304912)>>2)];
 var $69=HEAP8[(2304960)];
 _alg_addline($65,$66,$67,$68,$69);
 label=34;break;
 case 23: 
 var $71=$sig_dx;
 var $72=HEAP32[((2304952)>>2)];
 var $73=($71|0)!=($72|0);
 if($73){label=26;break;}else{label=24;break;}
 case 24: 
 var $75=$sig_dy;
 var $76=HEAP32[((2304944)>>2)];
 var $77=($75|0)!=($76|0);
 if($77){label=26;break;}else{label=25;break;}
 case 25: 
 var $79=HEAP32[((2304880)>>2)];
 var $80=(($79)&255);
 var $81=($80&255);
 var $82=HEAP8[(2304960)];
 var $83=($82&255);
 var $84=($81|0)!=($83|0);
 if($84){label=26;break;}else{label=33;break;}
 case 26: 
 var $86=HEAP32[((2304936)>>2)];
 var $87=HEAP32[((2304920)>>2)];
 var $88=HEAP32[((2304928)>>2)];
 var $89=HEAP32[((2304912)>>2)];
 var $90=HEAP8[(2304960)];
 _alg_addline($86,$87,$88,$89,$90);
 var $91=HEAP32[((2305040)>>2)];
 var $92=($91|0)>=0;
 if($92){label=27;break;}else{label=31;break;}
 case 27: 
 var $94=HEAP32[((2305040)>>2)];
 var $95=($94|0)<33000;
 if($95){label=28;break;}else{label=31;break;}
 case 28: 
 var $97=HEAP32[((2305032)>>2)];
 var $98=($97|0)>=0;
 if($98){label=29;break;}else{label=31;break;}
 case 29: 
 var $100=HEAP32[((2305032)>>2)];
 var $101=($100|0)<41000;
 if($101){label=30;break;}else{label=31;break;}
 case 30: 
 var $103=HEAP32[((2305040)>>2)];
 HEAP32[((2304936)>>2)]=$103;
 var $104=HEAP32[((2305032)>>2)];
 HEAP32[((2304920)>>2)]=$104;
 var $105=HEAP32[((2305040)>>2)];
 HEAP32[((2304928)>>2)]=$105;
 var $106=HEAP32[((2305032)>>2)];
 HEAP32[((2304912)>>2)]=$106;
 var $107=$sig_dx;
 HEAP32[((2304952)>>2)]=$107;
 var $108=$sig_dy;
 HEAP32[((2304944)>>2)]=$108;
 var $109=HEAP32[((2304880)>>2)];
 var $110=(($109)&255);
 HEAP8[(2304960)]=$110;
 label=32;break;
 case 31: 
 HEAP32[((2304904)>>2)]=0;
 label=32;break;
 case 32: 
 label=33;break;
 case 33: 
 label=34;break;
 case 34: 
 label=35;break;
 case 35: 
 var $116=$sig_dx;
 var $117=HEAP32[((2305040)>>2)];
 var $118=((($117)+($116))|0);
 HEAP32[((2305040)>>2)]=$118;
 var $119=$sig_dy;
 var $120=HEAP32[((2305032)>>2)];
 var $121=((($120)+($119))|0);
 HEAP32[((2305032)>>2)]=$121;
 var $122=HEAP32[((2304904)>>2)];
 var $123=($122|0)==1;
 if($123){label=36;break;}else{label=41;break;}
 case 36: 
 var $125=HEAP32[((2305040)>>2)];
 var $126=($125|0)>=0;
 if($126){label=37;break;}else{label=41;break;}
 case 37: 
 var $128=HEAP32[((2305040)>>2)];
 var $129=($128|0)<33000;
 if($129){label=38;break;}else{label=41;break;}
 case 38: 
 var $131=HEAP32[((2305032)>>2)];
 var $132=($131|0)>=0;
 if($132){label=39;break;}else{label=41;break;}
 case 39: 
 var $134=HEAP32[((2305032)>>2)];
 var $135=($134|0)<41000;
 if($135){label=40;break;}else{label=41;break;}
 case 40: 
 var $137=HEAP32[((2305040)>>2)];
 HEAP32[((2304928)>>2)]=$137;
 var $138=HEAP32[((2305032)>>2)];
 HEAP32[((2304912)>>2)]=$138;
 label=41;break;
 case 41: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function _via_sstep1(){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=HEAP32[((424)>>2)];
 var $2=$1&14;
 var $3=($2|0)==10;
 if($3){label=2;break;}else{label=3;break;}
 case 2: 
 HEAP32[((496)>>2)]=1;
 label=3;break;
 case 3: 
 var $6=HEAP32[((424)>>2)];
 var $7=$6&224;
 var $8=($7|0)==160;
 if($8){label=4;break;}else{label=5;break;}
 case 4: 
 HEAP32[((488)>>2)]=1;
 label=5;break;
 case 5: 
 return;
  default: assert(0, "bad label: " + label);
 }
}
function _alg_addline($x0,$y0,$x1,$y1,$color){
 var label=0;
 var sp=STACKTOP; (assert((STACKTOP|0) < (STACK_MAX|0))|0);
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1;
 var $2;
 var $3;
 var $4;
 var $5;
 var $key;
 var $index;
 $1=$x0;
 $2=$y0;
 $3=$x1;
 $4=$y1;
 $5=$color;
 var $6=$1;
 $key=$6;
 var $7=$key;
 var $8=((($7)*(31))&-1);
 var $9=$2;
 var $10=((($8)+($9))|0);
 $key=$10;
 var $11=$key;
 var $12=((($11)*(31))&-1);
 var $13=$3;
 var $14=((($12)+($13))|0);
 $key=$14;
 var $15=$key;
 var $16=((($15)*(31))&-1);
 var $17=$4;
 var $18=((($16)+($17))|0);
 $key=$18;
 var $19=$key;
 var $20=(((($19>>>0))%(65521))&-1);
 $key=$20;
 var $21=$key;
 var $22=((2000528+($21<<2))|0);
 var $23=HEAP32[(($22)>>2)];
 $index=$23;
 var $24=$index;
 var $25=($24|0)>=0;
 if($25){label=2;break;}else{label=8;break;}
 case 2: 
 var $27=$index;
 var $28=HEAP32[((2262624)>>2)];
 var $29=($27|0)<($28|0);
 if($29){label=3;break;}else{label=8;break;}
 case 3: 
 var $31=$1;
 var $32=$index;
 var $33=HEAP32[((2000520)>>2)];
 var $34=(($33+((($32)*(20))&-1))|0);
 var $35=(($34)|0);
 var $36=HEAP32[(($35)>>2)];
 var $37=($31|0)==($36|0);
 if($37){label=4;break;}else{label=8;break;}
 case 4: 
 var $39=$2;
 var $40=$index;
 var $41=HEAP32[((2000520)>>2)];
 var $42=(($41+((($40)*(20))&-1))|0);
 var $43=(($42+4)|0);
 var $44=HEAP32[(($43)>>2)];
 var $45=($39|0)==($44|0);
 if($45){label=5;break;}else{label=8;break;}
 case 5: 
 var $47=$3;
 var $48=$index;
 var $49=HEAP32[((2000520)>>2)];
 var $50=(($49+((($48)*(20))&-1))|0);
 var $51=(($50+8)|0);
 var $52=HEAP32[(($51)>>2)];
 var $53=($47|0)==($52|0);
 if($53){label=6;break;}else{label=8;break;}
 case 6: 
 var $55=$4;
 var $56=$index;
 var $57=HEAP32[((2000520)>>2)];
 var $58=(($57+((($56)*(20))&-1))|0);
 var $59=(($58+12)|0);
 var $60=HEAP32[(($59)>>2)];
 var $61=($55|0)==($60|0);
 if($61){label=7;break;}else{label=8;break;}
 case 7: 
 var $63=$5;
 var $64=$index;
 var $65=HEAP32[((2000520)>>2)];
 var $66=(($65+((($64)*(20))&-1))|0);
 var $67=(($66+16)|0);
 HEAP8[($67)]=$63;
 label=16;break;
 case 8: 
 var $69=$index;
 var $70=($69|0)>=0;
 if($70){label=9;break;}else{label=15;break;}
 case 9: 
 var $72=$index;
 var $73=HEAP32[((2262616)>>2)];
 var $74=($72|0)<($73|0);
 if($74){label=10;break;}else{label=15;break;}
 case 10: 
 var $76=$1;
 var $77=$index;
 var $78=HEAP32[((2000512)>>2)];
 var $79=(($78+((($77)*(20))&-1))|0);
 var $80=(($79)|0);
 var $81=HEAP32[(($80)>>2)];
 var $82=($76|0)==($81|0);
 if($82){label=11;break;}else{label=15;break;}
 case 11: 
 var $84=$2;
 var $85=$index;
 var $86=HEAP32[((2000512)>>2)];
 var $87=(($86+((($85)*(20))&-1))|0);
 var $88=(($87+4)|0);
 var $89=HEAP32[(($88)>>2)];
 var $90=($84|0)==($89|0);
 if($90){label=12;break;}else{label=15;break;}
 case 12: 
 var $92=$3;
 var $93=$index;
 var $94=HEAP32[((2000512)>>2)];
 var $95=(($94+((($93)*(20))&-1))|0);
 var $96=(($95+8)|0);
 var $97=HEAP32[(($96)>>2)];
 var $98=($92|0)==($97|0);
 if($98){label=13;break;}else{label=15;break;}
 case 13: 
 var $100=$4;
 var $101=$index;
 var $102=HEAP32[((2000512)>>2)];
 var $103=(($102+((($101)*(20))&-1))|0);
 var $104=(($103+12)|0);
 var $105=HEAP32[(($104)>>2)];
 var $106=($100|0)==($105|0);
 if($106){label=14;break;}else{label=15;break;}
 case 14: 
 var $108=$index;
 var $109=HEAP32[((2000512)>>2)];
 var $110=(($109+((($108)*(20))&-1))|0);
 var $111=(($110+16)|0);
 HEAP8[($111)]=-128;
 label=15;break;
 case 15: 
 var $113=$1;
 var $114=HEAP32[((2262624)>>2)];
 var $115=HEAP32[((2000520)>>2)];
 var $116=(($115+((($114)*(20))&-1))|0);
 var $117=(($116)|0);
 HEAP32[(($117)>>2)]=$113;
 var $118=$2;
 var $119=HEAP32[((2262624)>>2)];
 var $120=HEAP32[((2000520)>>2)];
 var $121=(($120+((($119)*(20))&-1))|0);
 var $122=(($121+4)|0);
 HEAP32[(($122)>>2)]=$118;
 var $123=$3;
 var $124=HEAP32[((2262624)>>2)];
 var $125=HEAP32[((2000520)>>2)];
 var $126=(($125+((($124)*(20))&-1))|0);
 var $127=(($126+8)|0);
 HEAP32[(($127)>>2)]=$123;
 var $128=$4;
 var $129=HEAP32[((2262624)>>2)];
 var $130=HEAP32[((2000520)>>2)];
 var $131=(($130+((($129)*(20))&-1))|0);
 var $132=(($131+12)|0);
 HEAP32[(($132)>>2)]=$128;
 var $133=$5;
 var $134=HEAP32[((2262624)>>2)];
 var $135=HEAP32[((2000520)>>2)];
 var $136=(($135+((($134)*(20))&-1))|0);
 var $137=(($136+16)|0);
 HEAP8[($137)]=$133;
 var $138=HEAP32[((2262624)>>2)];
 var $139=$key;
 var $140=((2000528+($139<<2))|0);
 HEAP32[(($140)>>2)]=$138;
 var $141=HEAP32[((2262624)>>2)];
 var $142=((($141)+(1))|0);
 HEAP32[((2262624)>>2)]=$142;
 label=16;break;
 case 16: 
 STACKTOP=sp;return;
  default: assert(0, "bad label: " + label);
 }
}
function __GLOBAL__I_a(){
 var label=0;
 return;
}
function _malloc($bytes){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=($bytes>>>0)<245;
 if($1){label=2;break;}else{label=78;break;}
 case 2: 
 var $3=($bytes>>>0)<11;
 if($3){var $8=16;label=4;break;}else{label=3;break;}
 case 3: 
 var $5=((($bytes)+(11))|0);
 var $6=$5&-8;
 var $8=$6;label=4;break;
 case 4: 
 var $8;
 var $9=$8>>>3;
 var $10=HEAP32[((2305056)>>2)];
 var $11=$10>>>($9>>>0);
 var $12=$11&3;
 var $13=($12|0)==0;
 if($13){label=12;break;}else{label=5;break;}
 case 5: 
 var $15=$11&1;
 var $16=$15^1;
 var $17=((($16)+($9))|0);
 var $18=$17<<1;
 var $19=((2305096+($18<<2))|0);
 var $20=$19;
 var $_sum111=((($18)+(2))|0);
 var $21=((2305096+($_sum111<<2))|0);
 var $22=HEAP32[(($21)>>2)];
 var $23=(($22+8)|0);
 var $24=HEAP32[(($23)>>2)];
 var $25=($20|0)==($24|0);
 if($25){label=6;break;}else{label=7;break;}
 case 6: 
 var $27=1<<$17;
 var $28=$27^-1;
 var $29=$10&$28;
 HEAP32[((2305056)>>2)]=$29;
 label=11;break;
 case 7: 
 var $31=$24;
 var $32=HEAP32[((2305072)>>2)];
 var $33=($31>>>0)<($32>>>0);
 if($33){label=10;break;}else{label=8;break;}
 case 8: 
 var $35=(($24+12)|0);
 var $36=HEAP32[(($35)>>2)];
 var $37=($36|0)==($22|0);
 if($37){label=9;break;}else{label=10;break;}
 case 9: 
 HEAP32[(($35)>>2)]=$20;
 HEAP32[(($21)>>2)]=$24;
 label=11;break;
 case 10: 
 _abort();
 throw "Reached an unreachable!";
 case 11: 
 var $40=$17<<3;
 var $41=$40|3;
 var $42=(($22+4)|0);
 HEAP32[(($42)>>2)]=$41;
 var $43=$22;
 var $_sum113114=$40|4;
 var $44=(($43+$_sum113114)|0);
 var $45=$44;
 var $46=HEAP32[(($45)>>2)];
 var $47=$46|1;
 HEAP32[(($45)>>2)]=$47;
 var $48=$23;
 var $mem_0=$48;label=341;break;
 case 12: 
 var $50=HEAP32[((2305064)>>2)];
 var $51=($8>>>0)>($50>>>0);
 if($51){label=13;break;}else{var $nb_0=$8;label=160;break;}
 case 13: 
 var $53=($11|0)==0;
 if($53){label=27;break;}else{label=14;break;}
 case 14: 
 var $55=$11<<$9;
 var $56=2<<$9;
 var $57=(((-$56))|0);
 var $58=$56|$57;
 var $59=$55&$58;
 var $60=(((-$59))|0);
 var $61=$59&$60;
 var $62=((($61)-(1))|0);
 var $63=$62>>>12;
 var $64=$63&16;
 var $65=$62>>>($64>>>0);
 var $66=$65>>>5;
 var $67=$66&8;
 var $68=$67|$64;
 var $69=$65>>>($67>>>0);
 var $70=$69>>>2;
 var $71=$70&4;
 var $72=$68|$71;
 var $73=$69>>>($71>>>0);
 var $74=$73>>>1;
 var $75=$74&2;
 var $76=$72|$75;
 var $77=$73>>>($75>>>0);
 var $78=$77>>>1;
 var $79=$78&1;
 var $80=$76|$79;
 var $81=$77>>>($79>>>0);
 var $82=((($80)+($81))|0);
 var $83=$82<<1;
 var $84=((2305096+($83<<2))|0);
 var $85=$84;
 var $_sum104=((($83)+(2))|0);
 var $86=((2305096+($_sum104<<2))|0);
 var $87=HEAP32[(($86)>>2)];
 var $88=(($87+8)|0);
 var $89=HEAP32[(($88)>>2)];
 var $90=($85|0)==($89|0);
 if($90){label=15;break;}else{label=16;break;}
 case 15: 
 var $92=1<<$82;
 var $93=$92^-1;
 var $94=$10&$93;
 HEAP32[((2305056)>>2)]=$94;
 label=20;break;
 case 16: 
 var $96=$89;
 var $97=HEAP32[((2305072)>>2)];
 var $98=($96>>>0)<($97>>>0);
 if($98){label=19;break;}else{label=17;break;}
 case 17: 
 var $100=(($89+12)|0);
 var $101=HEAP32[(($100)>>2)];
 var $102=($101|0)==($87|0);
 if($102){label=18;break;}else{label=19;break;}
 case 18: 
 HEAP32[(($100)>>2)]=$85;
 HEAP32[(($86)>>2)]=$89;
 label=20;break;
 case 19: 
 _abort();
 throw "Reached an unreachable!";
 case 20: 
 var $105=$82<<3;
 var $106=((($105)-($8))|0);
 var $107=$8|3;
 var $108=(($87+4)|0);
 HEAP32[(($108)>>2)]=$107;
 var $109=$87;
 var $110=(($109+$8)|0);
 var $111=$110;
 var $112=$106|1;
 var $_sum106107=$8|4;
 var $113=(($109+$_sum106107)|0);
 var $114=$113;
 HEAP32[(($114)>>2)]=$112;
 var $115=(($109+$105)|0);
 var $116=$115;
 HEAP32[(($116)>>2)]=$106;
 var $117=HEAP32[((2305064)>>2)];
 var $118=($117|0)==0;
 if($118){label=26;break;}else{label=21;break;}
 case 21: 
 var $120=HEAP32[((2305076)>>2)];
 var $121=$117>>>3;
 var $122=$121<<1;
 var $123=((2305096+($122<<2))|0);
 var $124=$123;
 var $125=HEAP32[((2305056)>>2)];
 var $126=1<<$121;
 var $127=$125&$126;
 var $128=($127|0)==0;
 if($128){label=22;break;}else{label=23;break;}
 case 22: 
 var $130=$125|$126;
 HEAP32[((2305056)>>2)]=$130;
 var $_sum109_pre=((($122)+(2))|0);
 var $_pre=((2305096+($_sum109_pre<<2))|0);
 var $F4_0=$124;var $_pre_phi=$_pre;label=25;break;
 case 23: 
 var $_sum110=((($122)+(2))|0);
 var $132=((2305096+($_sum110<<2))|0);
 var $133=HEAP32[(($132)>>2)];
 var $134=$133;
 var $135=HEAP32[((2305072)>>2)];
 var $136=($134>>>0)<($135>>>0);
 if($136){label=24;break;}else{var $F4_0=$133;var $_pre_phi=$132;label=25;break;}
 case 24: 
 _abort();
 throw "Reached an unreachable!";
 case 25: 
 var $_pre_phi;
 var $F4_0;
 HEAP32[(($_pre_phi)>>2)]=$120;
 var $139=(($F4_0+12)|0);
 HEAP32[(($139)>>2)]=$120;
 var $140=(($120+8)|0);
 HEAP32[(($140)>>2)]=$F4_0;
 var $141=(($120+12)|0);
 HEAP32[(($141)>>2)]=$124;
 label=26;break;
 case 26: 
 HEAP32[((2305064)>>2)]=$106;
 HEAP32[((2305076)>>2)]=$111;
 var $143=$88;
 var $mem_0=$143;label=341;break;
 case 27: 
 var $145=HEAP32[((2305060)>>2)];
 var $146=($145|0)==0;
 if($146){var $nb_0=$8;label=160;break;}else{label=28;break;}
 case 28: 
 var $148=(((-$145))|0);
 var $149=$145&$148;
 var $150=((($149)-(1))|0);
 var $151=$150>>>12;
 var $152=$151&16;
 var $153=$150>>>($152>>>0);
 var $154=$153>>>5;
 var $155=$154&8;
 var $156=$155|$152;
 var $157=$153>>>($155>>>0);
 var $158=$157>>>2;
 var $159=$158&4;
 var $160=$156|$159;
 var $161=$157>>>($159>>>0);
 var $162=$161>>>1;
 var $163=$162&2;
 var $164=$160|$163;
 var $165=$161>>>($163>>>0);
 var $166=$165>>>1;
 var $167=$166&1;
 var $168=$164|$167;
 var $169=$165>>>($167>>>0);
 var $170=((($168)+($169))|0);
 var $171=((2305360+($170<<2))|0);
 var $172=HEAP32[(($171)>>2)];
 var $173=(($172+4)|0);
 var $174=HEAP32[(($173)>>2)];
 var $175=$174&-8;
 var $176=((($175)-($8))|0);
 var $t_0_i=$172;var $v_0_i=$172;var $rsize_0_i=$176;label=29;break;
 case 29: 
 var $rsize_0_i;
 var $v_0_i;
 var $t_0_i;
 var $178=(($t_0_i+16)|0);
 var $179=HEAP32[(($178)>>2)];
 var $180=($179|0)==0;
 if($180){label=30;break;}else{var $185=$179;label=31;break;}
 case 30: 
 var $182=(($t_0_i+20)|0);
 var $183=HEAP32[(($182)>>2)];
 var $184=($183|0)==0;
 if($184){label=32;break;}else{var $185=$183;label=31;break;}
 case 31: 
 var $185;
 var $186=(($185+4)|0);
 var $187=HEAP32[(($186)>>2)];
 var $188=$187&-8;
 var $189=((($188)-($8))|0);
 var $190=($189>>>0)<($rsize_0_i>>>0);
 var $_rsize_0_i=($190?$189:$rsize_0_i);
 var $_v_0_i=($190?$185:$v_0_i);
 var $t_0_i=$185;var $v_0_i=$_v_0_i;var $rsize_0_i=$_rsize_0_i;label=29;break;
 case 32: 
 var $192=$v_0_i;
 var $193=HEAP32[((2305072)>>2)];
 var $194=($192>>>0)<($193>>>0);
 if($194){label=76;break;}else{label=33;break;}
 case 33: 
 var $196=(($192+$8)|0);
 var $197=$196;
 var $198=($192>>>0)<($196>>>0);
 if($198){label=34;break;}else{label=76;break;}
 case 34: 
 var $200=(($v_0_i+24)|0);
 var $201=HEAP32[(($200)>>2)];
 var $202=(($v_0_i+12)|0);
 var $203=HEAP32[(($202)>>2)];
 var $204=($203|0)==($v_0_i|0);
 if($204){label=40;break;}else{label=35;break;}
 case 35: 
 var $206=(($v_0_i+8)|0);
 var $207=HEAP32[(($206)>>2)];
 var $208=$207;
 var $209=($208>>>0)<($193>>>0);
 if($209){label=39;break;}else{label=36;break;}
 case 36: 
 var $211=(($207+12)|0);
 var $212=HEAP32[(($211)>>2)];
 var $213=($212|0)==($v_0_i|0);
 if($213){label=37;break;}else{label=39;break;}
 case 37: 
 var $215=(($203+8)|0);
 var $216=HEAP32[(($215)>>2)];
 var $217=($216|0)==($v_0_i|0);
 if($217){label=38;break;}else{label=39;break;}
 case 38: 
 HEAP32[(($211)>>2)]=$203;
 HEAP32[(($215)>>2)]=$207;
 var $R_1_i=$203;label=47;break;
 case 39: 
 _abort();
 throw "Reached an unreachable!";
 case 40: 
 var $220=(($v_0_i+20)|0);
 var $221=HEAP32[(($220)>>2)];
 var $222=($221|0)==0;
 if($222){label=41;break;}else{var $R_0_i=$221;var $RP_0_i=$220;label=42;break;}
 case 41: 
 var $224=(($v_0_i+16)|0);
 var $225=HEAP32[(($224)>>2)];
 var $226=($225|0)==0;
 if($226){var $R_1_i=0;label=47;break;}else{var $R_0_i=$225;var $RP_0_i=$224;label=42;break;}
 case 42: 
 var $RP_0_i;
 var $R_0_i;
 var $227=(($R_0_i+20)|0);
 var $228=HEAP32[(($227)>>2)];
 var $229=($228|0)==0;
 if($229){label=43;break;}else{var $R_0_i=$228;var $RP_0_i=$227;label=42;break;}
 case 43: 
 var $231=(($R_0_i+16)|0);
 var $232=HEAP32[(($231)>>2)];
 var $233=($232|0)==0;
 if($233){label=44;break;}else{var $R_0_i=$232;var $RP_0_i=$231;label=42;break;}
 case 44: 
 var $235=$RP_0_i;
 var $236=($235>>>0)<($193>>>0);
 if($236){label=46;break;}else{label=45;break;}
 case 45: 
 HEAP32[(($RP_0_i)>>2)]=0;
 var $R_1_i=$R_0_i;label=47;break;
 case 46: 
 _abort();
 throw "Reached an unreachable!";
 case 47: 
 var $R_1_i;
 var $240=($201|0)==0;
 if($240){label=67;break;}else{label=48;break;}
 case 48: 
 var $242=(($v_0_i+28)|0);
 var $243=HEAP32[(($242)>>2)];
 var $244=((2305360+($243<<2))|0);
 var $245=HEAP32[(($244)>>2)];
 var $246=($v_0_i|0)==($245|0);
 if($246){label=49;break;}else{label=51;break;}
 case 49: 
 HEAP32[(($244)>>2)]=$R_1_i;
 var $cond_i=($R_1_i|0)==0;
 if($cond_i){label=50;break;}else{label=57;break;}
 case 50: 
 var $248=HEAP32[(($242)>>2)];
 var $249=1<<$248;
 var $250=$249^-1;
 var $251=HEAP32[((2305060)>>2)];
 var $252=$251&$250;
 HEAP32[((2305060)>>2)]=$252;
 label=67;break;
 case 51: 
 var $254=$201;
 var $255=HEAP32[((2305072)>>2)];
 var $256=($254>>>0)<($255>>>0);
 if($256){label=55;break;}else{label=52;break;}
 case 52: 
 var $258=(($201+16)|0);
 var $259=HEAP32[(($258)>>2)];
 var $260=($259|0)==($v_0_i|0);
 if($260){label=53;break;}else{label=54;break;}
 case 53: 
 HEAP32[(($258)>>2)]=$R_1_i;
 label=56;break;
 case 54: 
 var $263=(($201+20)|0);
 HEAP32[(($263)>>2)]=$R_1_i;
 label=56;break;
 case 55: 
 _abort();
 throw "Reached an unreachable!";
 case 56: 
 var $266=($R_1_i|0)==0;
 if($266){label=67;break;}else{label=57;break;}
 case 57: 
 var $268=$R_1_i;
 var $269=HEAP32[((2305072)>>2)];
 var $270=($268>>>0)<($269>>>0);
 if($270){label=66;break;}else{label=58;break;}
 case 58: 
 var $272=(($R_1_i+24)|0);
 HEAP32[(($272)>>2)]=$201;
 var $273=(($v_0_i+16)|0);
 var $274=HEAP32[(($273)>>2)];
 var $275=($274|0)==0;
 if($275){label=62;break;}else{label=59;break;}
 case 59: 
 var $277=$274;
 var $278=HEAP32[((2305072)>>2)];
 var $279=($277>>>0)<($278>>>0);
 if($279){label=61;break;}else{label=60;break;}
 case 60: 
 var $281=(($R_1_i+16)|0);
 HEAP32[(($281)>>2)]=$274;
 var $282=(($274+24)|0);
 HEAP32[(($282)>>2)]=$R_1_i;
 label=62;break;
 case 61: 
 _abort();
 throw "Reached an unreachable!";
 case 62: 
 var $285=(($v_0_i+20)|0);
 var $286=HEAP32[(($285)>>2)];
 var $287=($286|0)==0;
 if($287){label=67;break;}else{label=63;break;}
 case 63: 
 var $289=$286;
 var $290=HEAP32[((2305072)>>2)];
 var $291=($289>>>0)<($290>>>0);
 if($291){label=65;break;}else{label=64;break;}
 case 64: 
 var $293=(($R_1_i+20)|0);
 HEAP32[(($293)>>2)]=$286;
 var $294=(($286+24)|0);
 HEAP32[(($294)>>2)]=$R_1_i;
 label=67;break;
 case 65: 
 _abort();
 throw "Reached an unreachable!";
 case 66: 
 _abort();
 throw "Reached an unreachable!";
 case 67: 
 var $298=($rsize_0_i>>>0)<16;
 if($298){label=68;break;}else{label=69;break;}
 case 68: 
 var $300=((($rsize_0_i)+($8))|0);
 var $301=$300|3;
 var $302=(($v_0_i+4)|0);
 HEAP32[(($302)>>2)]=$301;
 var $_sum4_i=((($300)+(4))|0);
 var $303=(($192+$_sum4_i)|0);
 var $304=$303;
 var $305=HEAP32[(($304)>>2)];
 var $306=$305|1;
 HEAP32[(($304)>>2)]=$306;
 label=77;break;
 case 69: 
 var $308=$8|3;
 var $309=(($v_0_i+4)|0);
 HEAP32[(($309)>>2)]=$308;
 var $310=$rsize_0_i|1;
 var $_sum_i137=$8|4;
 var $311=(($192+$_sum_i137)|0);
 var $312=$311;
 HEAP32[(($312)>>2)]=$310;
 var $_sum1_i=((($rsize_0_i)+($8))|0);
 var $313=(($192+$_sum1_i)|0);
 var $314=$313;
 HEAP32[(($314)>>2)]=$rsize_0_i;
 var $315=HEAP32[((2305064)>>2)];
 var $316=($315|0)==0;
 if($316){label=75;break;}else{label=70;break;}
 case 70: 
 var $318=HEAP32[((2305076)>>2)];
 var $319=$315>>>3;
 var $320=$319<<1;
 var $321=((2305096+($320<<2))|0);
 var $322=$321;
 var $323=HEAP32[((2305056)>>2)];
 var $324=1<<$319;
 var $325=$323&$324;
 var $326=($325|0)==0;
 if($326){label=71;break;}else{label=72;break;}
 case 71: 
 var $328=$323|$324;
 HEAP32[((2305056)>>2)]=$328;
 var $_sum2_pre_i=((($320)+(2))|0);
 var $_pre_i=((2305096+($_sum2_pre_i<<2))|0);
 var $F1_0_i=$322;var $_pre_phi_i=$_pre_i;label=74;break;
 case 72: 
 var $_sum3_i=((($320)+(2))|0);
 var $330=((2305096+($_sum3_i<<2))|0);
 var $331=HEAP32[(($330)>>2)];
 var $332=$331;
 var $333=HEAP32[((2305072)>>2)];
 var $334=($332>>>0)<($333>>>0);
 if($334){label=73;break;}else{var $F1_0_i=$331;var $_pre_phi_i=$330;label=74;break;}
 case 73: 
 _abort();
 throw "Reached an unreachable!";
 case 74: 
 var $_pre_phi_i;
 var $F1_0_i;
 HEAP32[(($_pre_phi_i)>>2)]=$318;
 var $337=(($F1_0_i+12)|0);
 HEAP32[(($337)>>2)]=$318;
 var $338=(($318+8)|0);
 HEAP32[(($338)>>2)]=$F1_0_i;
 var $339=(($318+12)|0);
 HEAP32[(($339)>>2)]=$322;
 label=75;break;
 case 75: 
 HEAP32[((2305064)>>2)]=$rsize_0_i;
 HEAP32[((2305076)>>2)]=$197;
 label=77;break;
 case 76: 
 _abort();
 throw "Reached an unreachable!";
 case 77: 
 var $342=(($v_0_i+8)|0);
 var $343=$342;
 var $344=($342|0)==0;
 if($344){var $nb_0=$8;label=160;break;}else{var $mem_0=$343;label=341;break;}
 case 78: 
 var $346=($bytes>>>0)>4294967231;
 if($346){var $nb_0=-1;label=160;break;}else{label=79;break;}
 case 79: 
 var $348=((($bytes)+(11))|0);
 var $349=$348&-8;
 var $350=HEAP32[((2305060)>>2)];
 var $351=($350|0)==0;
 if($351){var $nb_0=$349;label=160;break;}else{label=80;break;}
 case 80: 
 var $353=(((-$349))|0);
 var $354=$348>>>8;
 var $355=($354|0)==0;
 if($355){var $idx_0_i=0;label=83;break;}else{label=81;break;}
 case 81: 
 var $357=($349>>>0)>16777215;
 if($357){var $idx_0_i=31;label=83;break;}else{label=82;break;}
 case 82: 
 var $359=((($354)+(1048320))|0);
 var $360=$359>>>16;
 var $361=$360&8;
 var $362=$354<<$361;
 var $363=((($362)+(520192))|0);
 var $364=$363>>>16;
 var $365=$364&4;
 var $366=$365|$361;
 var $367=$362<<$365;
 var $368=((($367)+(245760))|0);
 var $369=$368>>>16;
 var $370=$369&2;
 var $371=$366|$370;
 var $372=(((14)-($371))|0);
 var $373=$367<<$370;
 var $374=$373>>>15;
 var $375=((($372)+($374))|0);
 var $376=$375<<1;
 var $377=((($375)+(7))|0);
 var $378=$349>>>($377>>>0);
 var $379=$378&1;
 var $380=$379|$376;
 var $idx_0_i=$380;label=83;break;
 case 83: 
 var $idx_0_i;
 var $382=((2305360+($idx_0_i<<2))|0);
 var $383=HEAP32[(($382)>>2)];
 var $384=($383|0)==0;
 if($384){var $v_2_i=0;var $rsize_2_i=$353;var $t_1_i=0;label=90;break;}else{label=84;break;}
 case 84: 
 var $386=($idx_0_i|0)==31;
 if($386){var $391=0;label=86;break;}else{label=85;break;}
 case 85: 
 var $388=$idx_0_i>>>1;
 var $389=(((25)-($388))|0);
 var $391=$389;label=86;break;
 case 86: 
 var $391;
 var $392=$349<<$391;
 var $v_0_i118=0;var $rsize_0_i117=$353;var $t_0_i116=$383;var $sizebits_0_i=$392;var $rst_0_i=0;label=87;break;
 case 87: 
 var $rst_0_i;
 var $sizebits_0_i;
 var $t_0_i116;
 var $rsize_0_i117;
 var $v_0_i118;
 var $394=(($t_0_i116+4)|0);
 var $395=HEAP32[(($394)>>2)];
 var $396=$395&-8;
 var $397=((($396)-($349))|0);
 var $398=($397>>>0)<($rsize_0_i117>>>0);
 if($398){label=88;break;}else{var $v_1_i=$v_0_i118;var $rsize_1_i=$rsize_0_i117;label=89;break;}
 case 88: 
 var $400=($396|0)==($349|0);
 if($400){var $v_2_i=$t_0_i116;var $rsize_2_i=$397;var $t_1_i=$t_0_i116;label=90;break;}else{var $v_1_i=$t_0_i116;var $rsize_1_i=$397;label=89;break;}
 case 89: 
 var $rsize_1_i;
 var $v_1_i;
 var $402=(($t_0_i116+20)|0);
 var $403=HEAP32[(($402)>>2)];
 var $404=$sizebits_0_i>>>31;
 var $405=(($t_0_i116+16+($404<<2))|0);
 var $406=HEAP32[(($405)>>2)];
 var $407=($403|0)==0;
 var $408=($403|0)==($406|0);
 var $or_cond_i=$407|$408;
 var $rst_1_i=($or_cond_i?$rst_0_i:$403);
 var $409=($406|0)==0;
 var $410=$sizebits_0_i<<1;
 if($409){var $v_2_i=$v_1_i;var $rsize_2_i=$rsize_1_i;var $t_1_i=$rst_1_i;label=90;break;}else{var $v_0_i118=$v_1_i;var $rsize_0_i117=$rsize_1_i;var $t_0_i116=$406;var $sizebits_0_i=$410;var $rst_0_i=$rst_1_i;label=87;break;}
 case 90: 
 var $t_1_i;
 var $rsize_2_i;
 var $v_2_i;
 var $411=($t_1_i|0)==0;
 var $412=($v_2_i|0)==0;
 var $or_cond21_i=$411&$412;
 if($or_cond21_i){label=91;break;}else{var $t_2_ph_i=$t_1_i;label=93;break;}
 case 91: 
 var $414=2<<$idx_0_i;
 var $415=(((-$414))|0);
 var $416=$414|$415;
 var $417=$350&$416;
 var $418=($417|0)==0;
 if($418){var $nb_0=$349;label=160;break;}else{label=92;break;}
 case 92: 
 var $420=(((-$417))|0);
 var $421=$417&$420;
 var $422=((($421)-(1))|0);
 var $423=$422>>>12;
 var $424=$423&16;
 var $425=$422>>>($424>>>0);
 var $426=$425>>>5;
 var $427=$426&8;
 var $428=$427|$424;
 var $429=$425>>>($427>>>0);
 var $430=$429>>>2;
 var $431=$430&4;
 var $432=$428|$431;
 var $433=$429>>>($431>>>0);
 var $434=$433>>>1;
 var $435=$434&2;
 var $436=$432|$435;
 var $437=$433>>>($435>>>0);
 var $438=$437>>>1;
 var $439=$438&1;
 var $440=$436|$439;
 var $441=$437>>>($439>>>0);
 var $442=((($440)+($441))|0);
 var $443=((2305360+($442<<2))|0);
 var $444=HEAP32[(($443)>>2)];
 var $t_2_ph_i=$444;label=93;break;
 case 93: 
 var $t_2_ph_i;
 var $445=($t_2_ph_i|0)==0;
 if($445){var $rsize_3_lcssa_i=$rsize_2_i;var $v_3_lcssa_i=$v_2_i;label=96;break;}else{var $t_228_i=$t_2_ph_i;var $rsize_329_i=$rsize_2_i;var $v_330_i=$v_2_i;label=94;break;}
 case 94: 
 var $v_330_i;
 var $rsize_329_i;
 var $t_228_i;
 var $446=(($t_228_i+4)|0);
 var $447=HEAP32[(($446)>>2)];
 var $448=$447&-8;
 var $449=((($448)-($349))|0);
 var $450=($449>>>0)<($rsize_329_i>>>0);
 var $_rsize_3_i=($450?$449:$rsize_329_i);
 var $t_2_v_3_i=($450?$t_228_i:$v_330_i);
 var $451=(($t_228_i+16)|0);
 var $452=HEAP32[(($451)>>2)];
 var $453=($452|0)==0;
 if($453){label=95;break;}else{var $t_228_i=$452;var $rsize_329_i=$_rsize_3_i;var $v_330_i=$t_2_v_3_i;label=94;break;}
 case 95: 
 var $454=(($t_228_i+20)|0);
 var $455=HEAP32[(($454)>>2)];
 var $456=($455|0)==0;
 if($456){var $rsize_3_lcssa_i=$_rsize_3_i;var $v_3_lcssa_i=$t_2_v_3_i;label=96;break;}else{var $t_228_i=$455;var $rsize_329_i=$_rsize_3_i;var $v_330_i=$t_2_v_3_i;label=94;break;}
 case 96: 
 var $v_3_lcssa_i;
 var $rsize_3_lcssa_i;
 var $457=($v_3_lcssa_i|0)==0;
 if($457){var $nb_0=$349;label=160;break;}else{label=97;break;}
 case 97: 
 var $459=HEAP32[((2305064)>>2)];
 var $460=((($459)-($349))|0);
 var $461=($rsize_3_lcssa_i>>>0)<($460>>>0);
 if($461){label=98;break;}else{var $nb_0=$349;label=160;break;}
 case 98: 
 var $463=$v_3_lcssa_i;
 var $464=HEAP32[((2305072)>>2)];
 var $465=($463>>>0)<($464>>>0);
 if($465){label=158;break;}else{label=99;break;}
 case 99: 
 var $467=(($463+$349)|0);
 var $468=$467;
 var $469=($463>>>0)<($467>>>0);
 if($469){label=100;break;}else{label=158;break;}
 case 100: 
 var $471=(($v_3_lcssa_i+24)|0);
 var $472=HEAP32[(($471)>>2)];
 var $473=(($v_3_lcssa_i+12)|0);
 var $474=HEAP32[(($473)>>2)];
 var $475=($474|0)==($v_3_lcssa_i|0);
 if($475){label=106;break;}else{label=101;break;}
 case 101: 
 var $477=(($v_3_lcssa_i+8)|0);
 var $478=HEAP32[(($477)>>2)];
 var $479=$478;
 var $480=($479>>>0)<($464>>>0);
 if($480){label=105;break;}else{label=102;break;}
 case 102: 
 var $482=(($478+12)|0);
 var $483=HEAP32[(($482)>>2)];
 var $484=($483|0)==($v_3_lcssa_i|0);
 if($484){label=103;break;}else{label=105;break;}
 case 103: 
 var $486=(($474+8)|0);
 var $487=HEAP32[(($486)>>2)];
 var $488=($487|0)==($v_3_lcssa_i|0);
 if($488){label=104;break;}else{label=105;break;}
 case 104: 
 HEAP32[(($482)>>2)]=$474;
 HEAP32[(($486)>>2)]=$478;
 var $R_1_i122=$474;label=113;break;
 case 105: 
 _abort();
 throw "Reached an unreachable!";
 case 106: 
 var $491=(($v_3_lcssa_i+20)|0);
 var $492=HEAP32[(($491)>>2)];
 var $493=($492|0)==0;
 if($493){label=107;break;}else{var $R_0_i120=$492;var $RP_0_i119=$491;label=108;break;}
 case 107: 
 var $495=(($v_3_lcssa_i+16)|0);
 var $496=HEAP32[(($495)>>2)];
 var $497=($496|0)==0;
 if($497){var $R_1_i122=0;label=113;break;}else{var $R_0_i120=$496;var $RP_0_i119=$495;label=108;break;}
 case 108: 
 var $RP_0_i119;
 var $R_0_i120;
 var $498=(($R_0_i120+20)|0);
 var $499=HEAP32[(($498)>>2)];
 var $500=($499|0)==0;
 if($500){label=109;break;}else{var $R_0_i120=$499;var $RP_0_i119=$498;label=108;break;}
 case 109: 
 var $502=(($R_0_i120+16)|0);
 var $503=HEAP32[(($502)>>2)];
 var $504=($503|0)==0;
 if($504){label=110;break;}else{var $R_0_i120=$503;var $RP_0_i119=$502;label=108;break;}
 case 110: 
 var $506=$RP_0_i119;
 var $507=($506>>>0)<($464>>>0);
 if($507){label=112;break;}else{label=111;break;}
 case 111: 
 HEAP32[(($RP_0_i119)>>2)]=0;
 var $R_1_i122=$R_0_i120;label=113;break;
 case 112: 
 _abort();
 throw "Reached an unreachable!";
 case 113: 
 var $R_1_i122;
 var $511=($472|0)==0;
 if($511){label=133;break;}else{label=114;break;}
 case 114: 
 var $513=(($v_3_lcssa_i+28)|0);
 var $514=HEAP32[(($513)>>2)];
 var $515=((2305360+($514<<2))|0);
 var $516=HEAP32[(($515)>>2)];
 var $517=($v_3_lcssa_i|0)==($516|0);
 if($517){label=115;break;}else{label=117;break;}
 case 115: 
 HEAP32[(($515)>>2)]=$R_1_i122;
 var $cond_i123=($R_1_i122|0)==0;
 if($cond_i123){label=116;break;}else{label=123;break;}
 case 116: 
 var $519=HEAP32[(($513)>>2)];
 var $520=1<<$519;
 var $521=$520^-1;
 var $522=HEAP32[((2305060)>>2)];
 var $523=$522&$521;
 HEAP32[((2305060)>>2)]=$523;
 label=133;break;
 case 117: 
 var $525=$472;
 var $526=HEAP32[((2305072)>>2)];
 var $527=($525>>>0)<($526>>>0);
 if($527){label=121;break;}else{label=118;break;}
 case 118: 
 var $529=(($472+16)|0);
 var $530=HEAP32[(($529)>>2)];
 var $531=($530|0)==($v_3_lcssa_i|0);
 if($531){label=119;break;}else{label=120;break;}
 case 119: 
 HEAP32[(($529)>>2)]=$R_1_i122;
 label=122;break;
 case 120: 
 var $534=(($472+20)|0);
 HEAP32[(($534)>>2)]=$R_1_i122;
 label=122;break;
 case 121: 
 _abort();
 throw "Reached an unreachable!";
 case 122: 
 var $537=($R_1_i122|0)==0;
 if($537){label=133;break;}else{label=123;break;}
 case 123: 
 var $539=$R_1_i122;
 var $540=HEAP32[((2305072)>>2)];
 var $541=($539>>>0)<($540>>>0);
 if($541){label=132;break;}else{label=124;break;}
 case 124: 
 var $543=(($R_1_i122+24)|0);
 HEAP32[(($543)>>2)]=$472;
 var $544=(($v_3_lcssa_i+16)|0);
 var $545=HEAP32[(($544)>>2)];
 var $546=($545|0)==0;
 if($546){label=128;break;}else{label=125;break;}
 case 125: 
 var $548=$545;
 var $549=HEAP32[((2305072)>>2)];
 var $550=($548>>>0)<($549>>>0);
 if($550){label=127;break;}else{label=126;break;}
 case 126: 
 var $552=(($R_1_i122+16)|0);
 HEAP32[(($552)>>2)]=$545;
 var $553=(($545+24)|0);
 HEAP32[(($553)>>2)]=$R_1_i122;
 label=128;break;
 case 127: 
 _abort();
 throw "Reached an unreachable!";
 case 128: 
 var $556=(($v_3_lcssa_i+20)|0);
 var $557=HEAP32[(($556)>>2)];
 var $558=($557|0)==0;
 if($558){label=133;break;}else{label=129;break;}
 case 129: 
 var $560=$557;
 var $561=HEAP32[((2305072)>>2)];
 var $562=($560>>>0)<($561>>>0);
 if($562){label=131;break;}else{label=130;break;}
 case 130: 
 var $564=(($R_1_i122+20)|0);
 HEAP32[(($564)>>2)]=$557;
 var $565=(($557+24)|0);
 HEAP32[(($565)>>2)]=$R_1_i122;
 label=133;break;
 case 131: 
 _abort();
 throw "Reached an unreachable!";
 case 132: 
 _abort();
 throw "Reached an unreachable!";
 case 133: 
 var $569=($rsize_3_lcssa_i>>>0)<16;
 if($569){label=134;break;}else{label=135;break;}
 case 134: 
 var $571=((($rsize_3_lcssa_i)+($349))|0);
 var $572=$571|3;
 var $573=(($v_3_lcssa_i+4)|0);
 HEAP32[(($573)>>2)]=$572;
 var $_sum19_i=((($571)+(4))|0);
 var $574=(($463+$_sum19_i)|0);
 var $575=$574;
 var $576=HEAP32[(($575)>>2)];
 var $577=$576|1;
 HEAP32[(($575)>>2)]=$577;
 label=159;break;
 case 135: 
 var $579=$349|3;
 var $580=(($v_3_lcssa_i+4)|0);
 HEAP32[(($580)>>2)]=$579;
 var $581=$rsize_3_lcssa_i|1;
 var $_sum_i125136=$349|4;
 var $582=(($463+$_sum_i125136)|0);
 var $583=$582;
 HEAP32[(($583)>>2)]=$581;
 var $_sum1_i126=((($rsize_3_lcssa_i)+($349))|0);
 var $584=(($463+$_sum1_i126)|0);
 var $585=$584;
 HEAP32[(($585)>>2)]=$rsize_3_lcssa_i;
 var $586=$rsize_3_lcssa_i>>>3;
 var $587=($rsize_3_lcssa_i>>>0)<256;
 if($587){label=136;break;}else{label=141;break;}
 case 136: 
 var $589=$586<<1;
 var $590=((2305096+($589<<2))|0);
 var $591=$590;
 var $592=HEAP32[((2305056)>>2)];
 var $593=1<<$586;
 var $594=$592&$593;
 var $595=($594|0)==0;
 if($595){label=137;break;}else{label=138;break;}
 case 137: 
 var $597=$592|$593;
 HEAP32[((2305056)>>2)]=$597;
 var $_sum15_pre_i=((($589)+(2))|0);
 var $_pre_i127=((2305096+($_sum15_pre_i<<2))|0);
 var $F5_0_i=$591;var $_pre_phi_i128=$_pre_i127;label=140;break;
 case 138: 
 var $_sum18_i=((($589)+(2))|0);
 var $599=((2305096+($_sum18_i<<2))|0);
 var $600=HEAP32[(($599)>>2)];
 var $601=$600;
 var $602=HEAP32[((2305072)>>2)];
 var $603=($601>>>0)<($602>>>0);
 if($603){label=139;break;}else{var $F5_0_i=$600;var $_pre_phi_i128=$599;label=140;break;}
 case 139: 
 _abort();
 throw "Reached an unreachable!";
 case 140: 
 var $_pre_phi_i128;
 var $F5_0_i;
 HEAP32[(($_pre_phi_i128)>>2)]=$468;
 var $606=(($F5_0_i+12)|0);
 HEAP32[(($606)>>2)]=$468;
 var $_sum16_i=((($349)+(8))|0);
 var $607=(($463+$_sum16_i)|0);
 var $608=$607;
 HEAP32[(($608)>>2)]=$F5_0_i;
 var $_sum17_i=((($349)+(12))|0);
 var $609=(($463+$_sum17_i)|0);
 var $610=$609;
 HEAP32[(($610)>>2)]=$591;
 label=159;break;
 case 141: 
 var $612=$467;
 var $613=$rsize_3_lcssa_i>>>8;
 var $614=($613|0)==0;
 if($614){var $I7_0_i=0;label=144;break;}else{label=142;break;}
 case 142: 
 var $616=($rsize_3_lcssa_i>>>0)>16777215;
 if($616){var $I7_0_i=31;label=144;break;}else{label=143;break;}
 case 143: 
 var $618=((($613)+(1048320))|0);
 var $619=$618>>>16;
 var $620=$619&8;
 var $621=$613<<$620;
 var $622=((($621)+(520192))|0);
 var $623=$622>>>16;
 var $624=$623&4;
 var $625=$624|$620;
 var $626=$621<<$624;
 var $627=((($626)+(245760))|0);
 var $628=$627>>>16;
 var $629=$628&2;
 var $630=$625|$629;
 var $631=(((14)-($630))|0);
 var $632=$626<<$629;
 var $633=$632>>>15;
 var $634=((($631)+($633))|0);
 var $635=$634<<1;
 var $636=((($634)+(7))|0);
 var $637=$rsize_3_lcssa_i>>>($636>>>0);
 var $638=$637&1;
 var $639=$638|$635;
 var $I7_0_i=$639;label=144;break;
 case 144: 
 var $I7_0_i;
 var $641=((2305360+($I7_0_i<<2))|0);
 var $_sum2_i=((($349)+(28))|0);
 var $642=(($463+$_sum2_i)|0);
 var $643=$642;
 HEAP32[(($643)>>2)]=$I7_0_i;
 var $_sum3_i129=((($349)+(16))|0);
 var $644=(($463+$_sum3_i129)|0);
 var $_sum4_i130=((($349)+(20))|0);
 var $645=(($463+$_sum4_i130)|0);
 var $646=$645;
 HEAP32[(($646)>>2)]=0;
 var $647=$644;
 HEAP32[(($647)>>2)]=0;
 var $648=HEAP32[((2305060)>>2)];
 var $649=1<<$I7_0_i;
 var $650=$648&$649;
 var $651=($650|0)==0;
 if($651){label=145;break;}else{label=146;break;}
 case 145: 
 var $653=$648|$649;
 HEAP32[((2305060)>>2)]=$653;
 HEAP32[(($641)>>2)]=$612;
 var $654=$641;
 var $_sum5_i=((($349)+(24))|0);
 var $655=(($463+$_sum5_i)|0);
 var $656=$655;
 HEAP32[(($656)>>2)]=$654;
 var $_sum6_i=((($349)+(12))|0);
 var $657=(($463+$_sum6_i)|0);
 var $658=$657;
 HEAP32[(($658)>>2)]=$612;
 var $_sum7_i=((($349)+(8))|0);
 var $659=(($463+$_sum7_i)|0);
 var $660=$659;
 HEAP32[(($660)>>2)]=$612;
 label=159;break;
 case 146: 
 var $662=HEAP32[(($641)>>2)];
 var $663=($I7_0_i|0)==31;
 if($663){var $668=0;label=148;break;}else{label=147;break;}
 case 147: 
 var $665=$I7_0_i>>>1;
 var $666=(((25)-($665))|0);
 var $668=$666;label=148;break;
 case 148: 
 var $668;
 var $669=$rsize_3_lcssa_i<<$668;
 var $K12_0_i=$669;var $T_0_i=$662;label=149;break;
 case 149: 
 var $T_0_i;
 var $K12_0_i;
 var $671=(($T_0_i+4)|0);
 var $672=HEAP32[(($671)>>2)];
 var $673=$672&-8;
 var $674=($673|0)==($rsize_3_lcssa_i|0);
 if($674){label=154;break;}else{label=150;break;}
 case 150: 
 var $676=$K12_0_i>>>31;
 var $677=(($T_0_i+16+($676<<2))|0);
 var $678=HEAP32[(($677)>>2)];
 var $679=($678|0)==0;
 var $680=$K12_0_i<<1;
 if($679){label=151;break;}else{var $K12_0_i=$680;var $T_0_i=$678;label=149;break;}
 case 151: 
 var $682=$677;
 var $683=HEAP32[((2305072)>>2)];
 var $684=($682>>>0)<($683>>>0);
 if($684){label=153;break;}else{label=152;break;}
 case 152: 
 HEAP32[(($677)>>2)]=$612;
 var $_sum12_i=((($349)+(24))|0);
 var $686=(($463+$_sum12_i)|0);
 var $687=$686;
 HEAP32[(($687)>>2)]=$T_0_i;
 var $_sum13_i=((($349)+(12))|0);
 var $688=(($463+$_sum13_i)|0);
 var $689=$688;
 HEAP32[(($689)>>2)]=$612;
 var $_sum14_i=((($349)+(8))|0);
 var $690=(($463+$_sum14_i)|0);
 var $691=$690;
 HEAP32[(($691)>>2)]=$612;
 label=159;break;
 case 153: 
 _abort();
 throw "Reached an unreachable!";
 case 154: 
 var $694=(($T_0_i+8)|0);
 var $695=HEAP32[(($694)>>2)];
 var $696=$T_0_i;
 var $697=HEAP32[((2305072)>>2)];
 var $698=($696>>>0)<($697>>>0);
 if($698){label=157;break;}else{label=155;break;}
 case 155: 
 var $700=$695;
 var $701=($700>>>0)<($697>>>0);
 if($701){label=157;break;}else{label=156;break;}
 case 156: 
 var $703=(($695+12)|0);
 HEAP32[(($703)>>2)]=$612;
 HEAP32[(($694)>>2)]=$612;
 var $_sum9_i=((($349)+(8))|0);
 var $704=(($463+$_sum9_i)|0);
 var $705=$704;
 HEAP32[(($705)>>2)]=$695;
 var $_sum10_i=((($349)+(12))|0);
 var $706=(($463+$_sum10_i)|0);
 var $707=$706;
 HEAP32[(($707)>>2)]=$T_0_i;
 var $_sum11_i=((($349)+(24))|0);
 var $708=(($463+$_sum11_i)|0);
 var $709=$708;
 HEAP32[(($709)>>2)]=0;
 label=159;break;
 case 157: 
 _abort();
 throw "Reached an unreachable!";
 case 158: 
 _abort();
 throw "Reached an unreachable!";
 case 159: 
 var $711=(($v_3_lcssa_i+8)|0);
 var $712=$711;
 var $713=($711|0)==0;
 if($713){var $nb_0=$349;label=160;break;}else{var $mem_0=$712;label=341;break;}
 case 160: 
 var $nb_0;
 var $714=HEAP32[((2305064)>>2)];
 var $715=($nb_0>>>0)>($714>>>0);
 if($715){label=165;break;}else{label=161;break;}
 case 161: 
 var $717=((($714)-($nb_0))|0);
 var $718=HEAP32[((2305076)>>2)];
 var $719=($717>>>0)>15;
 if($719){label=162;break;}else{label=163;break;}
 case 162: 
 var $721=$718;
 var $722=(($721+$nb_0)|0);
 var $723=$722;
 HEAP32[((2305076)>>2)]=$723;
 HEAP32[((2305064)>>2)]=$717;
 var $724=$717|1;
 var $_sum102=((($nb_0)+(4))|0);
 var $725=(($721+$_sum102)|0);
 var $726=$725;
 HEAP32[(($726)>>2)]=$724;
 var $727=(($721+$714)|0);
 var $728=$727;
 HEAP32[(($728)>>2)]=$717;
 var $729=$nb_0|3;
 var $730=(($718+4)|0);
 HEAP32[(($730)>>2)]=$729;
 label=164;break;
 case 163: 
 HEAP32[((2305064)>>2)]=0;
 HEAP32[((2305076)>>2)]=0;
 var $732=$714|3;
 var $733=(($718+4)|0);
 HEAP32[(($733)>>2)]=$732;
 var $734=$718;
 var $_sum101=((($714)+(4))|0);
 var $735=(($734+$_sum101)|0);
 var $736=$735;
 var $737=HEAP32[(($736)>>2)];
 var $738=$737|1;
 HEAP32[(($736)>>2)]=$738;
 label=164;break;
 case 164: 
 var $740=(($718+8)|0);
 var $741=$740;
 var $mem_0=$741;label=341;break;
 case 165: 
 var $743=HEAP32[((2305068)>>2)];
 var $744=($nb_0>>>0)<($743>>>0);
 if($744){label=166;break;}else{label=167;break;}
 case 166: 
 var $746=((($743)-($nb_0))|0);
 HEAP32[((2305068)>>2)]=$746;
 var $747=HEAP32[((2305080)>>2)];
 var $748=$747;
 var $749=(($748+$nb_0)|0);
 var $750=$749;
 HEAP32[((2305080)>>2)]=$750;
 var $751=$746|1;
 var $_sum=((($nb_0)+(4))|0);
 var $752=(($748+$_sum)|0);
 var $753=$752;
 HEAP32[(($753)>>2)]=$751;
 var $754=$nb_0|3;
 var $755=(($747+4)|0);
 HEAP32[(($755)>>2)]=$754;
 var $756=(($747+8)|0);
 var $757=$756;
 var $mem_0=$757;label=341;break;
 case 167: 
 var $759=HEAP32[((2272048)>>2)];
 var $760=($759|0)==0;
 if($760){label=168;break;}else{label=171;break;}
 case 168: 
 var $762=_sysconf(30);
 var $763=((($762)-(1))|0);
 var $764=$763&$762;
 var $765=($764|0)==0;
 if($765){label=170;break;}else{label=169;break;}
 case 169: 
 _abort();
 throw "Reached an unreachable!";
 case 170: 
 HEAP32[((2272056)>>2)]=$762;
 HEAP32[((2272052)>>2)]=$762;
 HEAP32[((2272060)>>2)]=-1;
 HEAP32[((2272064)>>2)]=-1;
 HEAP32[((2272068)>>2)]=0;
 HEAP32[((2305500)>>2)]=0;
 var $767=_time(0);
 var $768=$767&-16;
 var $769=$768^1431655768;
 HEAP32[((2272048)>>2)]=$769;
 label=171;break;
 case 171: 
 var $771=((($nb_0)+(48))|0);
 var $772=HEAP32[((2272056)>>2)];
 var $773=((($nb_0)+(47))|0);
 var $774=((($772)+($773))|0);
 var $775=(((-$772))|0);
 var $776=$774&$775;
 var $777=($776>>>0)>($nb_0>>>0);
 if($777){label=172;break;}else{var $mem_0=0;label=341;break;}
 case 172: 
 var $779=HEAP32[((2305496)>>2)];
 var $780=($779|0)==0;
 if($780){label=174;break;}else{label=173;break;}
 case 173: 
 var $782=HEAP32[((2305488)>>2)];
 var $783=((($782)+($776))|0);
 var $784=($783>>>0)<=($782>>>0);
 var $785=($783>>>0)>($779>>>0);
 var $or_cond1_i=$784|$785;
 if($or_cond1_i){var $mem_0=0;label=341;break;}else{label=174;break;}
 case 174: 
 var $787=HEAP32[((2305500)>>2)];
 var $788=$787&4;
 var $789=($788|0)==0;
 if($789){label=175;break;}else{var $tsize_1_i=0;label=198;break;}
 case 175: 
 var $791=HEAP32[((2305080)>>2)];
 var $792=($791|0)==0;
 if($792){label=181;break;}else{label=176;break;}
 case 176: 
 var $794=$791;
 var $sp_0_i_i=2305504;label=177;break;
 case 177: 
 var $sp_0_i_i;
 var $796=(($sp_0_i_i)|0);
 var $797=HEAP32[(($796)>>2)];
 var $798=($797>>>0)>($794>>>0);
 if($798){label=179;break;}else{label=178;break;}
 case 178: 
 var $800=(($sp_0_i_i+4)|0);
 var $801=HEAP32[(($800)>>2)];
 var $802=(($797+$801)|0);
 var $803=($802>>>0)>($794>>>0);
 if($803){label=180;break;}else{label=179;break;}
 case 179: 
 var $805=(($sp_0_i_i+8)|0);
 var $806=HEAP32[(($805)>>2)];
 var $807=($806|0)==0;
 if($807){label=181;break;}else{var $sp_0_i_i=$806;label=177;break;}
 case 180: 
 var $808=($sp_0_i_i|0)==0;
 if($808){label=181;break;}else{label=188;break;}
 case 181: 
 var $809=_sbrk(0);
 var $810=($809|0)==-1;
 if($810){var $tsize_0303639_i=0;label=197;break;}else{label=182;break;}
 case 182: 
 var $812=$809;
 var $813=HEAP32[((2272052)>>2)];
 var $814=((($813)-(1))|0);
 var $815=$814&$812;
 var $816=($815|0)==0;
 if($816){var $ssize_0_i=$776;label=184;break;}else{label=183;break;}
 case 183: 
 var $818=((($814)+($812))|0);
 var $819=(((-$813))|0);
 var $820=$818&$819;
 var $821=((($776)-($812))|0);
 var $822=((($821)+($820))|0);
 var $ssize_0_i=$822;label=184;break;
 case 184: 
 var $ssize_0_i;
 var $824=HEAP32[((2305488)>>2)];
 var $825=((($824)+($ssize_0_i))|0);
 var $826=($ssize_0_i>>>0)>($nb_0>>>0);
 var $827=($ssize_0_i>>>0)<2147483647;
 var $or_cond_i131=$826&$827;
 if($or_cond_i131){label=185;break;}else{var $tsize_0303639_i=0;label=197;break;}
 case 185: 
 var $829=HEAP32[((2305496)>>2)];
 var $830=($829|0)==0;
 if($830){label=187;break;}else{label=186;break;}
 case 186: 
 var $832=($825>>>0)<=($824>>>0);
 var $833=($825>>>0)>($829>>>0);
 var $or_cond2_i=$832|$833;
 if($or_cond2_i){var $tsize_0303639_i=0;label=197;break;}else{label=187;break;}
 case 187: 
 var $835=_sbrk($ssize_0_i);
 var $836=($835|0)==($809|0);
 var $ssize_0__i=($836?$ssize_0_i:0);
 var $__i=($836?$809:-1);
 var $tbase_0_i=$__i;var $tsize_0_i=$ssize_0__i;var $br_0_i=$835;var $ssize_1_i=$ssize_0_i;label=190;break;
 case 188: 
 var $838=HEAP32[((2305068)>>2)];
 var $839=((($774)-($838))|0);
 var $840=$839&$775;
 var $841=($840>>>0)<2147483647;
 if($841){label=189;break;}else{var $tsize_0303639_i=0;label=197;break;}
 case 189: 
 var $843=_sbrk($840);
 var $844=HEAP32[(($796)>>2)];
 var $845=HEAP32[(($800)>>2)];
 var $846=(($844+$845)|0);
 var $847=($843|0)==($846|0);
 var $_3_i=($847?$840:0);
 var $_4_i=($847?$843:-1);
 var $tbase_0_i=$_4_i;var $tsize_0_i=$_3_i;var $br_0_i=$843;var $ssize_1_i=$840;label=190;break;
 case 190: 
 var $ssize_1_i;
 var $br_0_i;
 var $tsize_0_i;
 var $tbase_0_i;
 var $849=(((-$ssize_1_i))|0);
 var $850=($tbase_0_i|0)==-1;
 if($850){label=191;break;}else{var $tsize_244_i=$tsize_0_i;var $tbase_245_i=$tbase_0_i;label=201;break;}
 case 191: 
 var $852=($br_0_i|0)!=-1;
 var $853=($ssize_1_i>>>0)<2147483647;
 var $or_cond5_i=$852&$853;
 var $854=($ssize_1_i>>>0)<($771>>>0);
 var $or_cond6_i=$or_cond5_i&$854;
 if($or_cond6_i){label=192;break;}else{var $ssize_2_i=$ssize_1_i;label=196;break;}
 case 192: 
 var $856=HEAP32[((2272056)>>2)];
 var $857=((($773)-($ssize_1_i))|0);
 var $858=((($857)+($856))|0);
 var $859=(((-$856))|0);
 var $860=$858&$859;
 var $861=($860>>>0)<2147483647;
 if($861){label=193;break;}else{var $ssize_2_i=$ssize_1_i;label=196;break;}
 case 193: 
 var $863=_sbrk($860);
 var $864=($863|0)==-1;
 if($864){label=195;break;}else{label=194;break;}
 case 194: 
 var $866=((($860)+($ssize_1_i))|0);
 var $ssize_2_i=$866;label=196;break;
 case 195: 
 var $868=_sbrk($849);
 var $tsize_0303639_i=$tsize_0_i;label=197;break;
 case 196: 
 var $ssize_2_i;
 var $870=($br_0_i|0)==-1;
 if($870){var $tsize_0303639_i=$tsize_0_i;label=197;break;}else{var $tsize_244_i=$ssize_2_i;var $tbase_245_i=$br_0_i;label=201;break;}
 case 197: 
 var $tsize_0303639_i;
 var $871=HEAP32[((2305500)>>2)];
 var $872=$871|4;
 HEAP32[((2305500)>>2)]=$872;
 var $tsize_1_i=$tsize_0303639_i;label=198;break;
 case 198: 
 var $tsize_1_i;
 var $874=($776>>>0)<2147483647;
 if($874){label=199;break;}else{label=340;break;}
 case 199: 
 var $876=_sbrk($776);
 var $877=_sbrk(0);
 var $notlhs_i=($876|0)!=-1;
 var $notrhs_i=($877|0)!=-1;
 var $or_cond8_not_i=$notrhs_i&$notlhs_i;
 var $878=($876>>>0)<($877>>>0);
 var $or_cond9_i=$or_cond8_not_i&$878;
 if($or_cond9_i){label=200;break;}else{label=340;break;}
 case 200: 
 var $879=$877;
 var $880=$876;
 var $881=((($879)-($880))|0);
 var $882=((($nb_0)+(40))|0);
 var $883=($881>>>0)>($882>>>0);
 var $_tsize_1_i=($883?$881:$tsize_1_i);
 var $_tbase_1_i=($883?$876:-1);
 var $884=($_tbase_1_i|0)==-1;
 if($884){label=340;break;}else{var $tsize_244_i=$_tsize_1_i;var $tbase_245_i=$_tbase_1_i;label=201;break;}
 case 201: 
 var $tbase_245_i;
 var $tsize_244_i;
 var $885=HEAP32[((2305488)>>2)];
 var $886=((($885)+($tsize_244_i))|0);
 HEAP32[((2305488)>>2)]=$886;
 var $887=HEAP32[((2305492)>>2)];
 var $888=($886>>>0)>($887>>>0);
 if($888){label=202;break;}else{label=203;break;}
 case 202: 
 HEAP32[((2305492)>>2)]=$886;
 label=203;break;
 case 203: 
 var $890=HEAP32[((2305080)>>2)];
 var $891=($890|0)==0;
 if($891){label=204;break;}else{var $sp_067_i=2305504;label=211;break;}
 case 204: 
 var $893=HEAP32[((2305072)>>2)];
 var $894=($893|0)==0;
 var $895=($tbase_245_i>>>0)<($893>>>0);
 var $or_cond10_i=$894|$895;
 if($or_cond10_i){label=205;break;}else{label=206;break;}
 case 205: 
 HEAP32[((2305072)>>2)]=$tbase_245_i;
 label=206;break;
 case 206: 
 HEAP32[((2305504)>>2)]=$tbase_245_i;
 HEAP32[((2305508)>>2)]=$tsize_244_i;
 HEAP32[((2305516)>>2)]=0;
 var $897=HEAP32[((2272048)>>2)];
 HEAP32[((2305092)>>2)]=$897;
 HEAP32[((2305088)>>2)]=-1;
 var $i_02_i_i=0;label=207;break;
 case 207: 
 var $i_02_i_i;
 var $899=$i_02_i_i<<1;
 var $900=((2305096+($899<<2))|0);
 var $901=$900;
 var $_sum_i_i=((($899)+(3))|0);
 var $902=((2305096+($_sum_i_i<<2))|0);
 HEAP32[(($902)>>2)]=$901;
 var $_sum1_i_i=((($899)+(2))|0);
 var $903=((2305096+($_sum1_i_i<<2))|0);
 HEAP32[(($903)>>2)]=$901;
 var $904=((($i_02_i_i)+(1))|0);
 var $905=($904>>>0)<32;
 if($905){var $i_02_i_i=$904;label=207;break;}else{label=208;break;}
 case 208: 
 var $906=((($tsize_244_i)-(40))|0);
 var $907=(($tbase_245_i+8)|0);
 var $908=$907;
 var $909=$908&7;
 var $910=($909|0)==0;
 if($910){var $914=0;label=210;break;}else{label=209;break;}
 case 209: 
 var $912=(((-$908))|0);
 var $913=$912&7;
 var $914=$913;label=210;break;
 case 210: 
 var $914;
 var $915=(($tbase_245_i+$914)|0);
 var $916=$915;
 var $917=((($906)-($914))|0);
 HEAP32[((2305080)>>2)]=$916;
 HEAP32[((2305068)>>2)]=$917;
 var $918=$917|1;
 var $_sum_i14_i=((($914)+(4))|0);
 var $919=(($tbase_245_i+$_sum_i14_i)|0);
 var $920=$919;
 HEAP32[(($920)>>2)]=$918;
 var $_sum2_i_i=((($tsize_244_i)-(36))|0);
 var $921=(($tbase_245_i+$_sum2_i_i)|0);
 var $922=$921;
 HEAP32[(($922)>>2)]=40;
 var $923=HEAP32[((2272064)>>2)];
 HEAP32[((2305084)>>2)]=$923;
 label=338;break;
 case 211: 
 var $sp_067_i;
 var $924=(($sp_067_i)|0);
 var $925=HEAP32[(($924)>>2)];
 var $926=(($sp_067_i+4)|0);
 var $927=HEAP32[(($926)>>2)];
 var $928=(($925+$927)|0);
 var $929=($tbase_245_i|0)==($928|0);
 if($929){label=213;break;}else{label=212;break;}
 case 212: 
 var $931=(($sp_067_i+8)|0);
 var $932=HEAP32[(($931)>>2)];
 var $933=($932|0)==0;
 if($933){label=218;break;}else{var $sp_067_i=$932;label=211;break;}
 case 213: 
 var $934=(($sp_067_i+12)|0);
 var $935=HEAP32[(($934)>>2)];
 var $936=$935&8;
 var $937=($936|0)==0;
 if($937){label=214;break;}else{label=218;break;}
 case 214: 
 var $939=$890;
 var $940=($939>>>0)>=($925>>>0);
 var $941=($939>>>0)<($tbase_245_i>>>0);
 var $or_cond47_i=$940&$941;
 if($or_cond47_i){label=215;break;}else{label=218;break;}
 case 215: 
 var $943=((($927)+($tsize_244_i))|0);
 HEAP32[(($926)>>2)]=$943;
 var $944=HEAP32[((2305080)>>2)];
 var $945=HEAP32[((2305068)>>2)];
 var $946=((($945)+($tsize_244_i))|0);
 var $947=$944;
 var $948=(($944+8)|0);
 var $949=$948;
 var $950=$949&7;
 var $951=($950|0)==0;
 if($951){var $955=0;label=217;break;}else{label=216;break;}
 case 216: 
 var $953=(((-$949))|0);
 var $954=$953&7;
 var $955=$954;label=217;break;
 case 217: 
 var $955;
 var $956=(($947+$955)|0);
 var $957=$956;
 var $958=((($946)-($955))|0);
 HEAP32[((2305080)>>2)]=$957;
 HEAP32[((2305068)>>2)]=$958;
 var $959=$958|1;
 var $_sum_i18_i=((($955)+(4))|0);
 var $960=(($947+$_sum_i18_i)|0);
 var $961=$960;
 HEAP32[(($961)>>2)]=$959;
 var $_sum2_i19_i=((($946)+(4))|0);
 var $962=(($947+$_sum2_i19_i)|0);
 var $963=$962;
 HEAP32[(($963)>>2)]=40;
 var $964=HEAP32[((2272064)>>2)];
 HEAP32[((2305084)>>2)]=$964;
 label=338;break;
 case 218: 
 var $965=HEAP32[((2305072)>>2)];
 var $966=($tbase_245_i>>>0)<($965>>>0);
 if($966){label=219;break;}else{label=220;break;}
 case 219: 
 HEAP32[((2305072)>>2)]=$tbase_245_i;
 label=220;break;
 case 220: 
 var $968=(($tbase_245_i+$tsize_244_i)|0);
 var $sp_160_i=2305504;label=221;break;
 case 221: 
 var $sp_160_i;
 var $970=(($sp_160_i)|0);
 var $971=HEAP32[(($970)>>2)];
 var $972=($971|0)==($968|0);
 if($972){label=223;break;}else{label=222;break;}
 case 222: 
 var $974=(($sp_160_i+8)|0);
 var $975=HEAP32[(($974)>>2)];
 var $976=($975|0)==0;
 if($976){label=304;break;}else{var $sp_160_i=$975;label=221;break;}
 case 223: 
 var $977=(($sp_160_i+12)|0);
 var $978=HEAP32[(($977)>>2)];
 var $979=$978&8;
 var $980=($979|0)==0;
 if($980){label=224;break;}else{label=304;break;}
 case 224: 
 HEAP32[(($970)>>2)]=$tbase_245_i;
 var $982=(($sp_160_i+4)|0);
 var $983=HEAP32[(($982)>>2)];
 var $984=((($983)+($tsize_244_i))|0);
 HEAP32[(($982)>>2)]=$984;
 var $985=(($tbase_245_i+8)|0);
 var $986=$985;
 var $987=$986&7;
 var $988=($987|0)==0;
 if($988){var $993=0;label=226;break;}else{label=225;break;}
 case 225: 
 var $990=(((-$986))|0);
 var $991=$990&7;
 var $993=$991;label=226;break;
 case 226: 
 var $993;
 var $994=(($tbase_245_i+$993)|0);
 var $_sum93_i=((($tsize_244_i)+(8))|0);
 var $995=(($tbase_245_i+$_sum93_i)|0);
 var $996=$995;
 var $997=$996&7;
 var $998=($997|0)==0;
 if($998){var $1003=0;label=228;break;}else{label=227;break;}
 case 227: 
 var $1000=(((-$996))|0);
 var $1001=$1000&7;
 var $1003=$1001;label=228;break;
 case 228: 
 var $1003;
 var $_sum94_i=((($1003)+($tsize_244_i))|0);
 var $1004=(($tbase_245_i+$_sum94_i)|0);
 var $1005=$1004;
 var $1006=$1004;
 var $1007=$994;
 var $1008=((($1006)-($1007))|0);
 var $_sum_i21_i=((($993)+($nb_0))|0);
 var $1009=(($tbase_245_i+$_sum_i21_i)|0);
 var $1010=$1009;
 var $1011=((($1008)-($nb_0))|0);
 var $1012=$nb_0|3;
 var $_sum1_i22_i=((($993)+(4))|0);
 var $1013=(($tbase_245_i+$_sum1_i22_i)|0);
 var $1014=$1013;
 HEAP32[(($1014)>>2)]=$1012;
 var $1015=HEAP32[((2305080)>>2)];
 var $1016=($1005|0)==($1015|0);
 if($1016){label=229;break;}else{label=230;break;}
 case 229: 
 var $1018=HEAP32[((2305068)>>2)];
 var $1019=((($1018)+($1011))|0);
 HEAP32[((2305068)>>2)]=$1019;
 HEAP32[((2305080)>>2)]=$1010;
 var $1020=$1019|1;
 var $_sum46_i_i=((($_sum_i21_i)+(4))|0);
 var $1021=(($tbase_245_i+$_sum46_i_i)|0);
 var $1022=$1021;
 HEAP32[(($1022)>>2)]=$1020;
 label=303;break;
 case 230: 
 var $1024=HEAP32[((2305076)>>2)];
 var $1025=($1005|0)==($1024|0);
 if($1025){label=231;break;}else{label=232;break;}
 case 231: 
 var $1027=HEAP32[((2305064)>>2)];
 var $1028=((($1027)+($1011))|0);
 HEAP32[((2305064)>>2)]=$1028;
 HEAP32[((2305076)>>2)]=$1010;
 var $1029=$1028|1;
 var $_sum44_i_i=((($_sum_i21_i)+(4))|0);
 var $1030=(($tbase_245_i+$_sum44_i_i)|0);
 var $1031=$1030;
 HEAP32[(($1031)>>2)]=$1029;
 var $_sum45_i_i=((($1028)+($_sum_i21_i))|0);
 var $1032=(($tbase_245_i+$_sum45_i_i)|0);
 var $1033=$1032;
 HEAP32[(($1033)>>2)]=$1028;
 label=303;break;
 case 232: 
 var $_sum2_i23_i=((($tsize_244_i)+(4))|0);
 var $_sum95_i=((($_sum2_i23_i)+($1003))|0);
 var $1035=(($tbase_245_i+$_sum95_i)|0);
 var $1036=$1035;
 var $1037=HEAP32[(($1036)>>2)];
 var $1038=$1037&3;
 var $1039=($1038|0)==1;
 if($1039){label=233;break;}else{var $oldfirst_0_i_i=$1005;var $qsize_0_i_i=$1011;label=280;break;}
 case 233: 
 var $1041=$1037&-8;
 var $1042=$1037>>>3;
 var $1043=($1037>>>0)<256;
 if($1043){label=234;break;}else{label=246;break;}
 case 234: 
 var $_sum3940_i_i=$1003|8;
 var $_sum105_i=((($_sum3940_i_i)+($tsize_244_i))|0);
 var $1045=(($tbase_245_i+$_sum105_i)|0);
 var $1046=$1045;
 var $1047=HEAP32[(($1046)>>2)];
 var $_sum41_i_i=((($tsize_244_i)+(12))|0);
 var $_sum106_i=((($_sum41_i_i)+($1003))|0);
 var $1048=(($tbase_245_i+$_sum106_i)|0);
 var $1049=$1048;
 var $1050=HEAP32[(($1049)>>2)];
 var $1051=$1042<<1;
 var $1052=((2305096+($1051<<2))|0);
 var $1053=$1052;
 var $1054=($1047|0)==($1053|0);
 if($1054){label=237;break;}else{label=235;break;}
 case 235: 
 var $1056=$1047;
 var $1057=HEAP32[((2305072)>>2)];
 var $1058=($1056>>>0)<($1057>>>0);
 if($1058){label=245;break;}else{label=236;break;}
 case 236: 
 var $1060=(($1047+12)|0);
 var $1061=HEAP32[(($1060)>>2)];
 var $1062=($1061|0)==($1005|0);
 if($1062){label=237;break;}else{label=245;break;}
 case 237: 
 var $1063=($1050|0)==($1047|0);
 if($1063){label=238;break;}else{label=239;break;}
 case 238: 
 var $1065=1<<$1042;
 var $1066=$1065^-1;
 var $1067=HEAP32[((2305056)>>2)];
 var $1068=$1067&$1066;
 HEAP32[((2305056)>>2)]=$1068;
 label=279;break;
 case 239: 
 var $1070=($1050|0)==($1053|0);
 if($1070){label=240;break;}else{label=241;break;}
 case 240: 
 var $_pre56_i_i=(($1050+8)|0);
 var $_pre_phi57_i_i=$_pre56_i_i;label=243;break;
 case 241: 
 var $1072=$1050;
 var $1073=HEAP32[((2305072)>>2)];
 var $1074=($1072>>>0)<($1073>>>0);
 if($1074){label=244;break;}else{label=242;break;}
 case 242: 
 var $1076=(($1050+8)|0);
 var $1077=HEAP32[(($1076)>>2)];
 var $1078=($1077|0)==($1005|0);
 if($1078){var $_pre_phi57_i_i=$1076;label=243;break;}else{label=244;break;}
 case 243: 
 var $_pre_phi57_i_i;
 var $1079=(($1047+12)|0);
 HEAP32[(($1079)>>2)]=$1050;
 HEAP32[(($_pre_phi57_i_i)>>2)]=$1047;
 label=279;break;
 case 244: 
 _abort();
 throw "Reached an unreachable!";
 case 245: 
 _abort();
 throw "Reached an unreachable!";
 case 246: 
 var $1081=$1004;
 var $_sum34_i_i=$1003|24;
 var $_sum96_i=((($_sum34_i_i)+($tsize_244_i))|0);
 var $1082=(($tbase_245_i+$_sum96_i)|0);
 var $1083=$1082;
 var $1084=HEAP32[(($1083)>>2)];
 var $_sum5_i_i=((($tsize_244_i)+(12))|0);
 var $_sum97_i=((($_sum5_i_i)+($1003))|0);
 var $1085=(($tbase_245_i+$_sum97_i)|0);
 var $1086=$1085;
 var $1087=HEAP32[(($1086)>>2)];
 var $1088=($1087|0)==($1081|0);
 if($1088){label=252;break;}else{label=247;break;}
 case 247: 
 var $_sum3637_i_i=$1003|8;
 var $_sum98_i=((($_sum3637_i_i)+($tsize_244_i))|0);
 var $1090=(($tbase_245_i+$_sum98_i)|0);
 var $1091=$1090;
 var $1092=HEAP32[(($1091)>>2)];
 var $1093=$1092;
 var $1094=HEAP32[((2305072)>>2)];
 var $1095=($1093>>>0)<($1094>>>0);
 if($1095){label=251;break;}else{label=248;break;}
 case 248: 
 var $1097=(($1092+12)|0);
 var $1098=HEAP32[(($1097)>>2)];
 var $1099=($1098|0)==($1081|0);
 if($1099){label=249;break;}else{label=251;break;}
 case 249: 
 var $1101=(($1087+8)|0);
 var $1102=HEAP32[(($1101)>>2)];
 var $1103=($1102|0)==($1081|0);
 if($1103){label=250;break;}else{label=251;break;}
 case 250: 
 HEAP32[(($1097)>>2)]=$1087;
 HEAP32[(($1101)>>2)]=$1092;
 var $R_1_i_i=$1087;label=259;break;
 case 251: 
 _abort();
 throw "Reached an unreachable!";
 case 252: 
 var $_sum67_i_i=$1003|16;
 var $_sum103_i=((($_sum2_i23_i)+($_sum67_i_i))|0);
 var $1106=(($tbase_245_i+$_sum103_i)|0);
 var $1107=$1106;
 var $1108=HEAP32[(($1107)>>2)];
 var $1109=($1108|0)==0;
 if($1109){label=253;break;}else{var $R_0_i_i=$1108;var $RP_0_i_i=$1107;label=254;break;}
 case 253: 
 var $_sum104_i=((($_sum67_i_i)+($tsize_244_i))|0);
 var $1111=(($tbase_245_i+$_sum104_i)|0);
 var $1112=$1111;
 var $1113=HEAP32[(($1112)>>2)];
 var $1114=($1113|0)==0;
 if($1114){var $R_1_i_i=0;label=259;break;}else{var $R_0_i_i=$1113;var $RP_0_i_i=$1112;label=254;break;}
 case 254: 
 var $RP_0_i_i;
 var $R_0_i_i;
 var $1115=(($R_0_i_i+20)|0);
 var $1116=HEAP32[(($1115)>>2)];
 var $1117=($1116|0)==0;
 if($1117){label=255;break;}else{var $R_0_i_i=$1116;var $RP_0_i_i=$1115;label=254;break;}
 case 255: 
 var $1119=(($R_0_i_i+16)|0);
 var $1120=HEAP32[(($1119)>>2)];
 var $1121=($1120|0)==0;
 if($1121){label=256;break;}else{var $R_0_i_i=$1120;var $RP_0_i_i=$1119;label=254;break;}
 case 256: 
 var $1123=$RP_0_i_i;
 var $1124=HEAP32[((2305072)>>2)];
 var $1125=($1123>>>0)<($1124>>>0);
 if($1125){label=258;break;}else{label=257;break;}
 case 257: 
 HEAP32[(($RP_0_i_i)>>2)]=0;
 var $R_1_i_i=$R_0_i_i;label=259;break;
 case 258: 
 _abort();
 throw "Reached an unreachable!";
 case 259: 
 var $R_1_i_i;
 var $1129=($1084|0)==0;
 if($1129){label=279;break;}else{label=260;break;}
 case 260: 
 var $_sum31_i_i=((($tsize_244_i)+(28))|0);
 var $_sum99_i=((($_sum31_i_i)+($1003))|0);
 var $1131=(($tbase_245_i+$_sum99_i)|0);
 var $1132=$1131;
 var $1133=HEAP32[(($1132)>>2)];
 var $1134=((2305360+($1133<<2))|0);
 var $1135=HEAP32[(($1134)>>2)];
 var $1136=($1081|0)==($1135|0);
 if($1136){label=261;break;}else{label=263;break;}
 case 261: 
 HEAP32[(($1134)>>2)]=$R_1_i_i;
 var $cond_i_i=($R_1_i_i|0)==0;
 if($cond_i_i){label=262;break;}else{label=269;break;}
 case 262: 
 var $1138=HEAP32[(($1132)>>2)];
 var $1139=1<<$1138;
 var $1140=$1139^-1;
 var $1141=HEAP32[((2305060)>>2)];
 var $1142=$1141&$1140;
 HEAP32[((2305060)>>2)]=$1142;
 label=279;break;
 case 263: 
 var $1144=$1084;
 var $1145=HEAP32[((2305072)>>2)];
 var $1146=($1144>>>0)<($1145>>>0);
 if($1146){label=267;break;}else{label=264;break;}
 case 264: 
 var $1148=(($1084+16)|0);
 var $1149=HEAP32[(($1148)>>2)];
 var $1150=($1149|0)==($1081|0);
 if($1150){label=265;break;}else{label=266;break;}
 case 265: 
 HEAP32[(($1148)>>2)]=$R_1_i_i;
 label=268;break;
 case 266: 
 var $1153=(($1084+20)|0);
 HEAP32[(($1153)>>2)]=$R_1_i_i;
 label=268;break;
 case 267: 
 _abort();
 throw "Reached an unreachable!";
 case 268: 
 var $1156=($R_1_i_i|0)==0;
 if($1156){label=279;break;}else{label=269;break;}
 case 269: 
 var $1158=$R_1_i_i;
 var $1159=HEAP32[((2305072)>>2)];
 var $1160=($1158>>>0)<($1159>>>0);
 if($1160){label=278;break;}else{label=270;break;}
 case 270: 
 var $1162=(($R_1_i_i+24)|0);
 HEAP32[(($1162)>>2)]=$1084;
 var $_sum3233_i_i=$1003|16;
 var $_sum100_i=((($_sum3233_i_i)+($tsize_244_i))|0);
 var $1163=(($tbase_245_i+$_sum100_i)|0);
 var $1164=$1163;
 var $1165=HEAP32[(($1164)>>2)];
 var $1166=($1165|0)==0;
 if($1166){label=274;break;}else{label=271;break;}
 case 271: 
 var $1168=$1165;
 var $1169=HEAP32[((2305072)>>2)];
 var $1170=($1168>>>0)<($1169>>>0);
 if($1170){label=273;break;}else{label=272;break;}
 case 272: 
 var $1172=(($R_1_i_i+16)|0);
 HEAP32[(($1172)>>2)]=$1165;
 var $1173=(($1165+24)|0);
 HEAP32[(($1173)>>2)]=$R_1_i_i;
 label=274;break;
 case 273: 
 _abort();
 throw "Reached an unreachable!";
 case 274: 
 var $_sum101_i=((($_sum2_i23_i)+($_sum3233_i_i))|0);
 var $1176=(($tbase_245_i+$_sum101_i)|0);
 var $1177=$1176;
 var $1178=HEAP32[(($1177)>>2)];
 var $1179=($1178|0)==0;
 if($1179){label=279;break;}else{label=275;break;}
 case 275: 
 var $1181=$1178;
 var $1182=HEAP32[((2305072)>>2)];
 var $1183=($1181>>>0)<($1182>>>0);
 if($1183){label=277;break;}else{label=276;break;}
 case 276: 
 var $1185=(($R_1_i_i+20)|0);
 HEAP32[(($1185)>>2)]=$1178;
 var $1186=(($1178+24)|0);
 HEAP32[(($1186)>>2)]=$R_1_i_i;
 label=279;break;
 case 277: 
 _abort();
 throw "Reached an unreachable!";
 case 278: 
 _abort();
 throw "Reached an unreachable!";
 case 279: 
 var $_sum9_i_i=$1041|$1003;
 var $_sum102_i=((($_sum9_i_i)+($tsize_244_i))|0);
 var $1190=(($tbase_245_i+$_sum102_i)|0);
 var $1191=$1190;
 var $1192=((($1041)+($1011))|0);
 var $oldfirst_0_i_i=$1191;var $qsize_0_i_i=$1192;label=280;break;
 case 280: 
 var $qsize_0_i_i;
 var $oldfirst_0_i_i;
 var $1194=(($oldfirst_0_i_i+4)|0);
 var $1195=HEAP32[(($1194)>>2)];
 var $1196=$1195&-2;
 HEAP32[(($1194)>>2)]=$1196;
 var $1197=$qsize_0_i_i|1;
 var $_sum10_i_i=((($_sum_i21_i)+(4))|0);
 var $1198=(($tbase_245_i+$_sum10_i_i)|0);
 var $1199=$1198;
 HEAP32[(($1199)>>2)]=$1197;
 var $_sum11_i_i=((($qsize_0_i_i)+($_sum_i21_i))|0);
 var $1200=(($tbase_245_i+$_sum11_i_i)|0);
 var $1201=$1200;
 HEAP32[(($1201)>>2)]=$qsize_0_i_i;
 var $1202=$qsize_0_i_i>>>3;
 var $1203=($qsize_0_i_i>>>0)<256;
 if($1203){label=281;break;}else{label=286;break;}
 case 281: 
 var $1205=$1202<<1;
 var $1206=((2305096+($1205<<2))|0);
 var $1207=$1206;
 var $1208=HEAP32[((2305056)>>2)];
 var $1209=1<<$1202;
 var $1210=$1208&$1209;
 var $1211=($1210|0)==0;
 if($1211){label=282;break;}else{label=283;break;}
 case 282: 
 var $1213=$1208|$1209;
 HEAP32[((2305056)>>2)]=$1213;
 var $_sum27_pre_i_i=((($1205)+(2))|0);
 var $_pre_i24_i=((2305096+($_sum27_pre_i_i<<2))|0);
 var $F4_0_i_i=$1207;var $_pre_phi_i25_i=$_pre_i24_i;label=285;break;
 case 283: 
 var $_sum30_i_i=((($1205)+(2))|0);
 var $1215=((2305096+($_sum30_i_i<<2))|0);
 var $1216=HEAP32[(($1215)>>2)];
 var $1217=$1216;
 var $1218=HEAP32[((2305072)>>2)];
 var $1219=($1217>>>0)<($1218>>>0);
 if($1219){label=284;break;}else{var $F4_0_i_i=$1216;var $_pre_phi_i25_i=$1215;label=285;break;}
 case 284: 
 _abort();
 throw "Reached an unreachable!";
 case 285: 
 var $_pre_phi_i25_i;
 var $F4_0_i_i;
 HEAP32[(($_pre_phi_i25_i)>>2)]=$1010;
 var $1222=(($F4_0_i_i+12)|0);
 HEAP32[(($1222)>>2)]=$1010;
 var $_sum28_i_i=((($_sum_i21_i)+(8))|0);
 var $1223=(($tbase_245_i+$_sum28_i_i)|0);
 var $1224=$1223;
 HEAP32[(($1224)>>2)]=$F4_0_i_i;
 var $_sum29_i_i=((($_sum_i21_i)+(12))|0);
 var $1225=(($tbase_245_i+$_sum29_i_i)|0);
 var $1226=$1225;
 HEAP32[(($1226)>>2)]=$1207;
 label=303;break;
 case 286: 
 var $1228=$1009;
 var $1229=$qsize_0_i_i>>>8;
 var $1230=($1229|0)==0;
 if($1230){var $I7_0_i_i=0;label=289;break;}else{label=287;break;}
 case 287: 
 var $1232=($qsize_0_i_i>>>0)>16777215;
 if($1232){var $I7_0_i_i=31;label=289;break;}else{label=288;break;}
 case 288: 
 var $1234=((($1229)+(1048320))|0);
 var $1235=$1234>>>16;
 var $1236=$1235&8;
 var $1237=$1229<<$1236;
 var $1238=((($1237)+(520192))|0);
 var $1239=$1238>>>16;
 var $1240=$1239&4;
 var $1241=$1240|$1236;
 var $1242=$1237<<$1240;
 var $1243=((($1242)+(245760))|0);
 var $1244=$1243>>>16;
 var $1245=$1244&2;
 var $1246=$1241|$1245;
 var $1247=(((14)-($1246))|0);
 var $1248=$1242<<$1245;
 var $1249=$1248>>>15;
 var $1250=((($1247)+($1249))|0);
 var $1251=$1250<<1;
 var $1252=((($1250)+(7))|0);
 var $1253=$qsize_0_i_i>>>($1252>>>0);
 var $1254=$1253&1;
 var $1255=$1254|$1251;
 var $I7_0_i_i=$1255;label=289;break;
 case 289: 
 var $I7_0_i_i;
 var $1257=((2305360+($I7_0_i_i<<2))|0);
 var $_sum12_i26_i=((($_sum_i21_i)+(28))|0);
 var $1258=(($tbase_245_i+$_sum12_i26_i)|0);
 var $1259=$1258;
 HEAP32[(($1259)>>2)]=$I7_0_i_i;
 var $_sum13_i_i=((($_sum_i21_i)+(16))|0);
 var $1260=(($tbase_245_i+$_sum13_i_i)|0);
 var $_sum14_i_i=((($_sum_i21_i)+(20))|0);
 var $1261=(($tbase_245_i+$_sum14_i_i)|0);
 var $1262=$1261;
 HEAP32[(($1262)>>2)]=0;
 var $1263=$1260;
 HEAP32[(($1263)>>2)]=0;
 var $1264=HEAP32[((2305060)>>2)];
 var $1265=1<<$I7_0_i_i;
 var $1266=$1264&$1265;
 var $1267=($1266|0)==0;
 if($1267){label=290;break;}else{label=291;break;}
 case 290: 
 var $1269=$1264|$1265;
 HEAP32[((2305060)>>2)]=$1269;
 HEAP32[(($1257)>>2)]=$1228;
 var $1270=$1257;
 var $_sum15_i_i=((($_sum_i21_i)+(24))|0);
 var $1271=(($tbase_245_i+$_sum15_i_i)|0);
 var $1272=$1271;
 HEAP32[(($1272)>>2)]=$1270;
 var $_sum16_i_i=((($_sum_i21_i)+(12))|0);
 var $1273=(($tbase_245_i+$_sum16_i_i)|0);
 var $1274=$1273;
 HEAP32[(($1274)>>2)]=$1228;
 var $_sum17_i_i=((($_sum_i21_i)+(8))|0);
 var $1275=(($tbase_245_i+$_sum17_i_i)|0);
 var $1276=$1275;
 HEAP32[(($1276)>>2)]=$1228;
 label=303;break;
 case 291: 
 var $1278=HEAP32[(($1257)>>2)];
 var $1279=($I7_0_i_i|0)==31;
 if($1279){var $1284=0;label=293;break;}else{label=292;break;}
 case 292: 
 var $1281=$I7_0_i_i>>>1;
 var $1282=(((25)-($1281))|0);
 var $1284=$1282;label=293;break;
 case 293: 
 var $1284;
 var $1285=$qsize_0_i_i<<$1284;
 var $K8_0_i_i=$1285;var $T_0_i27_i=$1278;label=294;break;
 case 294: 
 var $T_0_i27_i;
 var $K8_0_i_i;
 var $1287=(($T_0_i27_i+4)|0);
 var $1288=HEAP32[(($1287)>>2)];
 var $1289=$1288&-8;
 var $1290=($1289|0)==($qsize_0_i_i|0);
 if($1290){label=299;break;}else{label=295;break;}
 case 295: 
 var $1292=$K8_0_i_i>>>31;
 var $1293=(($T_0_i27_i+16+($1292<<2))|0);
 var $1294=HEAP32[(($1293)>>2)];
 var $1295=($1294|0)==0;
 var $1296=$K8_0_i_i<<1;
 if($1295){label=296;break;}else{var $K8_0_i_i=$1296;var $T_0_i27_i=$1294;label=294;break;}
 case 296: 
 var $1298=$1293;
 var $1299=HEAP32[((2305072)>>2)];
 var $1300=($1298>>>0)<($1299>>>0);
 if($1300){label=298;break;}else{label=297;break;}
 case 297: 
 HEAP32[(($1293)>>2)]=$1228;
 var $_sum24_i_i=((($_sum_i21_i)+(24))|0);
 var $1302=(($tbase_245_i+$_sum24_i_i)|0);
 var $1303=$1302;
 HEAP32[(($1303)>>2)]=$T_0_i27_i;
 var $_sum25_i_i=((($_sum_i21_i)+(12))|0);
 var $1304=(($tbase_245_i+$_sum25_i_i)|0);
 var $1305=$1304;
 HEAP32[(($1305)>>2)]=$1228;
 var $_sum26_i_i=((($_sum_i21_i)+(8))|0);
 var $1306=(($tbase_245_i+$_sum26_i_i)|0);
 var $1307=$1306;
 HEAP32[(($1307)>>2)]=$1228;
 label=303;break;
 case 298: 
 _abort();
 throw "Reached an unreachable!";
 case 299: 
 var $1310=(($T_0_i27_i+8)|0);
 var $1311=HEAP32[(($1310)>>2)];
 var $1312=$T_0_i27_i;
 var $1313=HEAP32[((2305072)>>2)];
 var $1314=($1312>>>0)<($1313>>>0);
 if($1314){label=302;break;}else{label=300;break;}
 case 300: 
 var $1316=$1311;
 var $1317=($1316>>>0)<($1313>>>0);
 if($1317){label=302;break;}else{label=301;break;}
 case 301: 
 var $1319=(($1311+12)|0);
 HEAP32[(($1319)>>2)]=$1228;
 HEAP32[(($1310)>>2)]=$1228;
 var $_sum21_i_i=((($_sum_i21_i)+(8))|0);
 var $1320=(($tbase_245_i+$_sum21_i_i)|0);
 var $1321=$1320;
 HEAP32[(($1321)>>2)]=$1311;
 var $_sum22_i_i=((($_sum_i21_i)+(12))|0);
 var $1322=(($tbase_245_i+$_sum22_i_i)|0);
 var $1323=$1322;
 HEAP32[(($1323)>>2)]=$T_0_i27_i;
 var $_sum23_i_i=((($_sum_i21_i)+(24))|0);
 var $1324=(($tbase_245_i+$_sum23_i_i)|0);
 var $1325=$1324;
 HEAP32[(($1325)>>2)]=0;
 label=303;break;
 case 302: 
 _abort();
 throw "Reached an unreachable!";
 case 303: 
 var $_sum1819_i_i=$993|8;
 var $1326=(($tbase_245_i+$_sum1819_i_i)|0);
 var $mem_0=$1326;label=341;break;
 case 304: 
 var $1327=$890;
 var $sp_0_i_i_i=2305504;label=305;break;
 case 305: 
 var $sp_0_i_i_i;
 var $1329=(($sp_0_i_i_i)|0);
 var $1330=HEAP32[(($1329)>>2)];
 var $1331=($1330>>>0)>($1327>>>0);
 if($1331){label=307;break;}else{label=306;break;}
 case 306: 
 var $1333=(($sp_0_i_i_i+4)|0);
 var $1334=HEAP32[(($1333)>>2)];
 var $1335=(($1330+$1334)|0);
 var $1336=($1335>>>0)>($1327>>>0);
 if($1336){label=308;break;}else{label=307;break;}
 case 307: 
 var $1338=(($sp_0_i_i_i+8)|0);
 var $1339=HEAP32[(($1338)>>2)];
 var $sp_0_i_i_i=$1339;label=305;break;
 case 308: 
 var $_sum_i15_i=((($1334)-(47))|0);
 var $_sum1_i16_i=((($1334)-(39))|0);
 var $1340=(($1330+$_sum1_i16_i)|0);
 var $1341=$1340;
 var $1342=$1341&7;
 var $1343=($1342|0)==0;
 if($1343){var $1348=0;label=310;break;}else{label=309;break;}
 case 309: 
 var $1345=(((-$1341))|0);
 var $1346=$1345&7;
 var $1348=$1346;label=310;break;
 case 310: 
 var $1348;
 var $_sum2_i17_i=((($_sum_i15_i)+($1348))|0);
 var $1349=(($1330+$_sum2_i17_i)|0);
 var $1350=(($890+16)|0);
 var $1351=$1350;
 var $1352=($1349>>>0)<($1351>>>0);
 var $1353=($1352?$1327:$1349);
 var $1354=(($1353+8)|0);
 var $1355=$1354;
 var $1356=((($tsize_244_i)-(40))|0);
 var $1357=(($tbase_245_i+8)|0);
 var $1358=$1357;
 var $1359=$1358&7;
 var $1360=($1359|0)==0;
 if($1360){var $1364=0;label=312;break;}else{label=311;break;}
 case 311: 
 var $1362=(((-$1358))|0);
 var $1363=$1362&7;
 var $1364=$1363;label=312;break;
 case 312: 
 var $1364;
 var $1365=(($tbase_245_i+$1364)|0);
 var $1366=$1365;
 var $1367=((($1356)-($1364))|0);
 HEAP32[((2305080)>>2)]=$1366;
 HEAP32[((2305068)>>2)]=$1367;
 var $1368=$1367|1;
 var $_sum_i_i_i=((($1364)+(4))|0);
 var $1369=(($tbase_245_i+$_sum_i_i_i)|0);
 var $1370=$1369;
 HEAP32[(($1370)>>2)]=$1368;
 var $_sum2_i_i_i=((($tsize_244_i)-(36))|0);
 var $1371=(($tbase_245_i+$_sum2_i_i_i)|0);
 var $1372=$1371;
 HEAP32[(($1372)>>2)]=40;
 var $1373=HEAP32[((2272064)>>2)];
 HEAP32[((2305084)>>2)]=$1373;
 var $1374=(($1353+4)|0);
 var $1375=$1374;
 HEAP32[(($1375)>>2)]=27;
 assert(16 % 1 === 0);HEAP32[(($1354)>>2)]=HEAP32[((2305504)>>2)];HEAP32[((($1354)+(4))>>2)]=HEAP32[((2305508)>>2)];HEAP32[((($1354)+(8))>>2)]=HEAP32[((2305512)>>2)];HEAP32[((($1354)+(12))>>2)]=HEAP32[((2305516)>>2)];
 HEAP32[((2305504)>>2)]=$tbase_245_i;
 HEAP32[((2305508)>>2)]=$tsize_244_i;
 HEAP32[((2305516)>>2)]=0;
 HEAP32[((2305512)>>2)]=$1355;
 var $1376=(($1353+28)|0);
 var $1377=$1376;
 HEAP32[(($1377)>>2)]=7;
 var $1378=(($1353+32)|0);
 var $1379=($1378>>>0)<($1335>>>0);
 if($1379){var $1380=$1377;label=313;break;}else{label=314;break;}
 case 313: 
 var $1380;
 var $1381=(($1380+4)|0);
 HEAP32[(($1381)>>2)]=7;
 var $1382=(($1380+8)|0);
 var $1383=$1382;
 var $1384=($1383>>>0)<($1335>>>0);
 if($1384){var $1380=$1381;label=313;break;}else{label=314;break;}
 case 314: 
 var $1385=($1353|0)==($1327|0);
 if($1385){label=338;break;}else{label=315;break;}
 case 315: 
 var $1387=$1353;
 var $1388=$890;
 var $1389=((($1387)-($1388))|0);
 var $1390=(($1327+$1389)|0);
 var $_sum3_i_i=((($1389)+(4))|0);
 var $1391=(($1327+$_sum3_i_i)|0);
 var $1392=$1391;
 var $1393=HEAP32[(($1392)>>2)];
 var $1394=$1393&-2;
 HEAP32[(($1392)>>2)]=$1394;
 var $1395=$1389|1;
 var $1396=(($890+4)|0);
 HEAP32[(($1396)>>2)]=$1395;
 var $1397=$1390;
 HEAP32[(($1397)>>2)]=$1389;
 var $1398=$1389>>>3;
 var $1399=($1389>>>0)<256;
 if($1399){label=316;break;}else{label=321;break;}
 case 316: 
 var $1401=$1398<<1;
 var $1402=((2305096+($1401<<2))|0);
 var $1403=$1402;
 var $1404=HEAP32[((2305056)>>2)];
 var $1405=1<<$1398;
 var $1406=$1404&$1405;
 var $1407=($1406|0)==0;
 if($1407){label=317;break;}else{label=318;break;}
 case 317: 
 var $1409=$1404|$1405;
 HEAP32[((2305056)>>2)]=$1409;
 var $_sum11_pre_i_i=((($1401)+(2))|0);
 var $_pre_i_i=((2305096+($_sum11_pre_i_i<<2))|0);
 var $F_0_i_i=$1403;var $_pre_phi_i_i=$_pre_i_i;label=320;break;
 case 318: 
 var $_sum12_i_i=((($1401)+(2))|0);
 var $1411=((2305096+($_sum12_i_i<<2))|0);
 var $1412=HEAP32[(($1411)>>2)];
 var $1413=$1412;
 var $1414=HEAP32[((2305072)>>2)];
 var $1415=($1413>>>0)<($1414>>>0);
 if($1415){label=319;break;}else{var $F_0_i_i=$1412;var $_pre_phi_i_i=$1411;label=320;break;}
 case 319: 
 _abort();
 throw "Reached an unreachable!";
 case 320: 
 var $_pre_phi_i_i;
 var $F_0_i_i;
 HEAP32[(($_pre_phi_i_i)>>2)]=$890;
 var $1418=(($F_0_i_i+12)|0);
 HEAP32[(($1418)>>2)]=$890;
 var $1419=(($890+8)|0);
 HEAP32[(($1419)>>2)]=$F_0_i_i;
 var $1420=(($890+12)|0);
 HEAP32[(($1420)>>2)]=$1403;
 label=338;break;
 case 321: 
 var $1422=$890;
 var $1423=$1389>>>8;
 var $1424=($1423|0)==0;
 if($1424){var $I1_0_i_i=0;label=324;break;}else{label=322;break;}
 case 322: 
 var $1426=($1389>>>0)>16777215;
 if($1426){var $I1_0_i_i=31;label=324;break;}else{label=323;break;}
 case 323: 
 var $1428=((($1423)+(1048320))|0);
 var $1429=$1428>>>16;
 var $1430=$1429&8;
 var $1431=$1423<<$1430;
 var $1432=((($1431)+(520192))|0);
 var $1433=$1432>>>16;
 var $1434=$1433&4;
 var $1435=$1434|$1430;
 var $1436=$1431<<$1434;
 var $1437=((($1436)+(245760))|0);
 var $1438=$1437>>>16;
 var $1439=$1438&2;
 var $1440=$1435|$1439;
 var $1441=(((14)-($1440))|0);
 var $1442=$1436<<$1439;
 var $1443=$1442>>>15;
 var $1444=((($1441)+($1443))|0);
 var $1445=$1444<<1;
 var $1446=((($1444)+(7))|0);
 var $1447=$1389>>>($1446>>>0);
 var $1448=$1447&1;
 var $1449=$1448|$1445;
 var $I1_0_i_i=$1449;label=324;break;
 case 324: 
 var $I1_0_i_i;
 var $1451=((2305360+($I1_0_i_i<<2))|0);
 var $1452=(($890+28)|0);
 var $I1_0_c_i_i=$I1_0_i_i;
 HEAP32[(($1452)>>2)]=$I1_0_c_i_i;
 var $1453=(($890+20)|0);
 HEAP32[(($1453)>>2)]=0;
 var $1454=(($890+16)|0);
 HEAP32[(($1454)>>2)]=0;
 var $1455=HEAP32[((2305060)>>2)];
 var $1456=1<<$I1_0_i_i;
 var $1457=$1455&$1456;
 var $1458=($1457|0)==0;
 if($1458){label=325;break;}else{label=326;break;}
 case 325: 
 var $1460=$1455|$1456;
 HEAP32[((2305060)>>2)]=$1460;
 HEAP32[(($1451)>>2)]=$1422;
 var $1461=(($890+24)|0);
 var $_c_i_i=$1451;
 HEAP32[(($1461)>>2)]=$_c_i_i;
 var $1462=(($890+12)|0);
 HEAP32[(($1462)>>2)]=$890;
 var $1463=(($890+8)|0);
 HEAP32[(($1463)>>2)]=$890;
 label=338;break;
 case 326: 
 var $1465=HEAP32[(($1451)>>2)];
 var $1466=($I1_0_i_i|0)==31;
 if($1466){var $1471=0;label=328;break;}else{label=327;break;}
 case 327: 
 var $1468=$I1_0_i_i>>>1;
 var $1469=(((25)-($1468))|0);
 var $1471=$1469;label=328;break;
 case 328: 
 var $1471;
 var $1472=$1389<<$1471;
 var $K2_0_i_i=$1472;var $T_0_i_i=$1465;label=329;break;
 case 329: 
 var $T_0_i_i;
 var $K2_0_i_i;
 var $1474=(($T_0_i_i+4)|0);
 var $1475=HEAP32[(($1474)>>2)];
 var $1476=$1475&-8;
 var $1477=($1476|0)==($1389|0);
 if($1477){label=334;break;}else{label=330;break;}
 case 330: 
 var $1479=$K2_0_i_i>>>31;
 var $1480=(($T_0_i_i+16+($1479<<2))|0);
 var $1481=HEAP32[(($1480)>>2)];
 var $1482=($1481|0)==0;
 var $1483=$K2_0_i_i<<1;
 if($1482){label=331;break;}else{var $K2_0_i_i=$1483;var $T_0_i_i=$1481;label=329;break;}
 case 331: 
 var $1485=$1480;
 var $1486=HEAP32[((2305072)>>2)];
 var $1487=($1485>>>0)<($1486>>>0);
 if($1487){label=333;break;}else{label=332;break;}
 case 332: 
 HEAP32[(($1480)>>2)]=$1422;
 var $1489=(($890+24)|0);
 var $T_0_c8_i_i=$T_0_i_i;
 HEAP32[(($1489)>>2)]=$T_0_c8_i_i;
 var $1490=(($890+12)|0);
 HEAP32[(($1490)>>2)]=$890;
 var $1491=(($890+8)|0);
 HEAP32[(($1491)>>2)]=$890;
 label=338;break;
 case 333: 
 _abort();
 throw "Reached an unreachable!";
 case 334: 
 var $1494=(($T_0_i_i+8)|0);
 var $1495=HEAP32[(($1494)>>2)];
 var $1496=$T_0_i_i;
 var $1497=HEAP32[((2305072)>>2)];
 var $1498=($1496>>>0)<($1497>>>0);
 if($1498){label=337;break;}else{label=335;break;}
 case 335: 
 var $1500=$1495;
 var $1501=($1500>>>0)<($1497>>>0);
 if($1501){label=337;break;}else{label=336;break;}
 case 336: 
 var $1503=(($1495+12)|0);
 HEAP32[(($1503)>>2)]=$1422;
 HEAP32[(($1494)>>2)]=$1422;
 var $1504=(($890+8)|0);
 var $_c7_i_i=$1495;
 HEAP32[(($1504)>>2)]=$_c7_i_i;
 var $1505=(($890+12)|0);
 var $T_0_c_i_i=$T_0_i_i;
 HEAP32[(($1505)>>2)]=$T_0_c_i_i;
 var $1506=(($890+24)|0);
 HEAP32[(($1506)>>2)]=0;
 label=338;break;
 case 337: 
 _abort();
 throw "Reached an unreachable!";
 case 338: 
 var $1507=HEAP32[((2305068)>>2)];
 var $1508=($1507>>>0)>($nb_0>>>0);
 if($1508){label=339;break;}else{label=340;break;}
 case 339: 
 var $1510=((($1507)-($nb_0))|0);
 HEAP32[((2305068)>>2)]=$1510;
 var $1511=HEAP32[((2305080)>>2)];
 var $1512=$1511;
 var $1513=(($1512+$nb_0)|0);
 var $1514=$1513;
 HEAP32[((2305080)>>2)]=$1514;
 var $1515=$1510|1;
 var $_sum_i134=((($nb_0)+(4))|0);
 var $1516=(($1512+$_sum_i134)|0);
 var $1517=$1516;
 HEAP32[(($1517)>>2)]=$1515;
 var $1518=$nb_0|3;
 var $1519=(($1511+4)|0);
 HEAP32[(($1519)>>2)]=$1518;
 var $1520=(($1511+8)|0);
 var $1521=$1520;
 var $mem_0=$1521;label=341;break;
 case 340: 
 var $1522=___errno_location();
 HEAP32[(($1522)>>2)]=12;
 var $mem_0=0;label=341;break;
 case 341: 
 var $mem_0;
 return $mem_0;
  default: assert(0, "bad label: " + label);
 }
}
Module["_malloc"] = _malloc;
function _free($mem){
 var label=0;
 label = 1; 
 while(1)switch(label){
 case 1: 
 var $1=($mem|0)==0;
 if($1){label=140;break;}else{label=2;break;}
 case 2: 
 var $3=((($mem)-(8))|0);
 var $4=$3;
 var $5=HEAP32[((2305072)>>2)];
 var $6=($3>>>0)<($5>>>0);
 if($6){label=139;break;}else{label=3;break;}
 case 3: 
 var $8=((($mem)-(4))|0);
 var $9=$8;
 var $10=HEAP32[(($9)>>2)];
 var $11=$10&3;
 var $12=($11|0)==1;
 if($12){label=139;break;}else{label=4;break;}
 case 4: 
 var $14=$10&-8;
 var $_sum=((($14)-(8))|0);
 var $15=(($mem+$_sum)|0);
 var $16=$15;
 var $17=$10&1;
 var $18=($17|0)==0;
 if($18){label=5;break;}else{var $p_0=$4;var $psize_0=$14;label=56;break;}
 case 5: 
 var $20=$3;
 var $21=HEAP32[(($20)>>2)];
 var $22=($11|0)==0;
 if($22){label=140;break;}else{label=6;break;}
 case 6: 
 var $_sum232=(((-8)-($21))|0);
 var $24=(($mem+$_sum232)|0);
 var $25=$24;
 var $26=((($21)+($14))|0);
 var $27=($24>>>0)<($5>>>0);
 if($27){label=139;break;}else{label=7;break;}
 case 7: 
 var $29=HEAP32[((2305076)>>2)];
 var $30=($25|0)==($29|0);
 if($30){label=54;break;}else{label=8;break;}
 case 8: 
 var $32=$21>>>3;
 var $33=($21>>>0)<256;
 if($33){label=9;break;}else{label=21;break;}
 case 9: 
 var $_sum276=((($_sum232)+(8))|0);
 var $35=(($mem+$_sum276)|0);
 var $36=$35;
 var $37=HEAP32[(($36)>>2)];
 var $_sum277=((($_sum232)+(12))|0);
 var $38=(($mem+$_sum277)|0);
 var $39=$38;
 var $40=HEAP32[(($39)>>2)];
 var $41=$32<<1;
 var $42=((2305096+($41<<2))|0);
 var $43=$42;
 var $44=($37|0)==($43|0);
 if($44){label=12;break;}else{label=10;break;}
 case 10: 
 var $46=$37;
 var $47=($46>>>0)<($5>>>0);
 if($47){label=20;break;}else{label=11;break;}
 case 11: 
 var $49=(($37+12)|0);
 var $50=HEAP32[(($49)>>2)];
 var $51=($50|0)==($25|0);
 if($51){label=12;break;}else{label=20;break;}
 case 12: 
 var $52=($40|0)==($37|0);
 if($52){label=13;break;}else{label=14;break;}
 case 13: 
 var $54=1<<$32;
 var $55=$54^-1;
 var $56=HEAP32[((2305056)>>2)];
 var $57=$56&$55;
 HEAP32[((2305056)>>2)]=$57;
 var $p_0=$25;var $psize_0=$26;label=56;break;
 case 14: 
 var $59=($40|0)==($43|0);
 if($59){label=15;break;}else{label=16;break;}
 case 15: 
 var $_pre305=(($40+8)|0);
 var $_pre_phi306=$_pre305;label=18;break;
 case 16: 
 var $61=$40;
 var $62=($61>>>0)<($5>>>0);
 if($62){label=19;break;}else{label=17;break;}
 case 17: 
 var $64=(($40+8)|0);
 var $65=HEAP32[(($64)>>2)];
 var $66=($65|0)==($25|0);
 if($66){var $_pre_phi306=$64;label=18;break;}else{label=19;break;}
 case 18: 
 var $_pre_phi306;
 var $67=(($37+12)|0);
 HEAP32[(($67)>>2)]=$40;
 HEAP32[(($_pre_phi306)>>2)]=$37;
 var $p_0=$25;var $psize_0=$26;label=56;break;
 case 19: 
 _abort();
 throw "Reached an unreachable!";
 case 20: 
 _abort();
 throw "Reached an unreachable!";
 case 21: 
 var $69=$24;
 var $_sum266=((($_sum232)+(24))|0);
 var $70=(($mem+$_sum266)|0);
 var $71=$70;
 var $72=HEAP32[(($71)>>2)];
 var $_sum267=((($_sum232)+(12))|0);
 var $73=(($mem+$_sum267)|0);
 var $74=$73;
 var $75=HEAP32[(($74)>>2)];
 var $76=($75|0)==($69|0);
 if($76){label=27;break;}else{label=22;break;}
 case 22: 
 var $_sum273=((($_sum232)+(8))|0);
 var $78=(($mem+$_sum273)|0);
 var $79=$78;
 var $80=HEAP32[(($79)>>2)];
 var $81=$80;
 var $82=($81>>>0)<($5>>>0);
 if($82){label=26;break;}else{label=23;break;}
 case 23: 
 var $84=(($80+12)|0);
 var $85=HEAP32[(($84)>>2)];
 var $86=($85|0)==($69|0);
 if($86){label=24;break;}else{label=26;break;}
 case 24: 
 var $88=(($75+8)|0);
 var $89=HEAP32[(($88)>>2)];
 var $90=($89|0)==($69|0);
 if($90){label=25;break;}else{label=26;break;}
 case 25: 
 HEAP32[(($84)>>2)]=$75;
 HEAP32[(($88)>>2)]=$80;
 var $R_1=$75;label=34;break;
 case 26: 
 _abort();
 throw "Reached an unreachable!";
 case 27: 
 var $_sum269=((($_sum232)+(20))|0);
 var $93=(($mem+$_sum269)|0);
 var $94=$93;
 var $95=HEAP32[(($94)>>2)];
 var $96=($95|0)==0;
 if($96){label=28;break;}else{var $R_0=$95;var $RP_0=$94;label=29;break;}
 case 28: 
 var $_sum268=((($_sum232)+(16))|0);
 var $98=(($mem+$_sum268)|0);
 var $99=$98;
 var $100=HEAP32[(($99)>>2)];
 var $101=($100|0)==0;
 if($101){var $R_1=0;label=34;break;}else{var $R_0=$100;var $RP_0=$99;label=29;break;}
 case 29: 
 var $RP_0;
 var $R_0;
 var $102=(($R_0+20)|0);
 var $103=HEAP32[(($102)>>2)];
 var $104=($103|0)==0;
 if($104){label=30;break;}else{var $R_0=$103;var $RP_0=$102;label=29;break;}
 case 30: 
 var $106=(($R_0+16)|0);
 var $107=HEAP32[(($106)>>2)];
 var $108=($107|0)==0;
 if($108){label=31;break;}else{var $R_0=$107;var $RP_0=$106;label=29;break;}
 case 31: 
 var $110=$RP_0;
 var $111=($110>>>0)<($5>>>0);
 if($111){label=33;break;}else{label=32;break;}
 case 32: 
 HEAP32[(($RP_0)>>2)]=0;
 var $R_1=$R_0;label=34;break;
 case 33: 
 _abort();
 throw "Reached an unreachable!";
 case 34: 
 var $R_1;
 var $115=($72|0)==0;
 if($115){var $p_0=$25;var $psize_0=$26;label=56;break;}else{label=35;break;}
 case 35: 
 var $_sum270=((($_sum232)+(28))|0);
 var $117=(($mem+$_sum270)|0);
 var $118=$117;
 var $119=HEAP32[(($118)>>2)];
 var $120=((2305360+($119<<2))|0);
 var $121=HEAP32[(($120)>>2)];
 var $122=($69|0)==($121|0);
 if($122){label=36;break;}else{label=38;break;}
 case 36: 
 HEAP32[(($120)>>2)]=$R_1;
 var $cond=($R_1|0)==0;
 if($cond){label=37;break;}else{label=44;break;}
 case 37: 
 var $124=HEAP32[(($118)>>2)];
 var $125=1<<$124;
 var $126=$125^-1;
 var $127=HEAP32[((2305060)>>2)];
 var $128=$127&$126;
 HEAP32[((2305060)>>2)]=$128;
 var $p_0=$25;var $psize_0=$26;label=56;break;
 case 38: 
 var $130=$72;
 var $131=HEAP32[((2305072)>>2)];
 var $132=($130>>>0)<($131>>>0);
 if($132){label=42;break;}else{label=39;break;}
 case 39: 
 var $134=(($72+16)|0);
 var $135=HEAP32[(($134)>>2)];
 var $136=($135|0)==($69|0);
 if($136){label=40;break;}else{label=41;break;}
 case 40: 
 HEAP32[(($134)>>2)]=$R_1;
 label=43;break;
 case 41: 
 var $139=(($72+20)|0);
 HEAP32[(($139)>>2)]=$R_1;
 label=43;break;
 case 42: 
 _abort();
 throw "Reached an unreachable!";
 case 43: 
 var $142=($R_1|0)==0;
 if($142){var $p_0=$25;var $psize_0=$26;label=56;break;}else{label=44;break;}
 case 44: 
 var $144=$R_1;
 var $145=HEAP32[((2305072)>>2)];
 var $146=($144>>>0)<($145>>>0);
 if($146){label=53;break;}else{label=45;break;}
 case 45: 
 var $148=(($R_1+24)|0);
 HEAP32[(($148)>>2)]=$72;
 var $_sum271=((($_sum232)+(16))|0);
 var $149=(($mem+$_sum271)|0);
 var $150=$149;
 var $151=HEAP32[(($150)>>2)];
 var $152=($151|0)==0;
 if($152){label=49;break;}else{label=46;break;}
 case 46: 
 var $154=$151;
 var $155=HEAP32[((2305072)>>2)];
 var $156=($154>>>0)<($155>>>0);
 if($156){label=48;break;}else{label=47;break;}
 case 47: 
 var $158=(($R_1+16)|0);
 HEAP32[(($158)>>2)]=$151;
 var $159=(($151+24)|0);
 HEAP32[(($159)>>2)]=$R_1;
 label=49;break;
 case 48: 
 _abort();
 throw "Reached an unreachable!";
 case 49: 
 var $_sum272=((($_sum232)+(20))|0);
 var $162=(($mem+$_sum272)|0);
 var $163=$162;
 var $164=HEAP32[(($163)>>2)];
 var $165=($164|0)==0;
 if($165){var $p_0=$25;var $psize_0=$26;label=56;break;}else{label=50;break;}
 case 50: 
 var $167=$164;
 var $168=HEAP32[((2305072)>>2)];
 var $169=($167>>>0)<($168>>>0);
 if($169){label=52;break;}else{label=51;break;}
 case 51: 
 var $171=(($R_1+20)|0);
 HEAP32[(($171)>>2)]=$164;
 var $172=(($164+24)|0);
 HEAP32[(($172)>>2)]=$R_1;
 var $p_0=$25;var $psize_0=$26;label=56;break;
 case 52: 
 _abort();
 throw "Reached an unreachable!";
 case 53: 
 _abort();
 throw "Reached an unreachable!";
 case 54: 
 var $_sum233=((($14)-(4))|0);
 var $176=(($mem+$_sum233)|0);
 var $177=$176;
 var $178=HEAP32[(($177)>>2)];
 var $179=$178&3;
 var $180=($179|0)==3;
 if($180){label=55;break;}else{var $p_0=$25;var $psize_0=$26;label=56;break;}
 case 55: 
 HEAP32[((2305064)>>2)]=$26;
 var $182=HEAP32[(($177)>>2)];
 var $183=$182&-2;
 HEAP32[(($177)>>2)]=$183;
 var $184=$26|1;
 var $_sum264=((($_sum232)+(4))|0);
 var $185=(($mem+$_sum264)|0);
 var $186=$185;
 HEAP32[(($186)>>2)]=$184;
 var $187=$15;
 HEAP32[(($187)>>2)]=$26;
 label=140;break;
 case 56: 
 var $psize_0;
 var $p_0;
 var $189=$p_0;
 var $190=($189>>>0)<($15>>>0);
 if($190){label=57;break;}else{label=139;break;}
 case 57: 
 var $_sum263=((($14)-(4))|0);
 var $192=(($mem+$_sum263)|0);
 var $193=$192;
 var $194=HEAP32[(($193)>>2)];
 var $195=$194&1;
 var $phitmp=($195|0)==0;
 if($phitmp){label=139;break;}else{label=58;break;}
 case 58: 
 var $197=$194&2;
 var $198=($197|0)==0;
 if($198){label=59;break;}else{label=112;break;}
 case 59: 
 var $200=HEAP32[((2305080)>>2)];
 var $201=($16|0)==($200|0);
 if($201){label=60;break;}else{label=62;break;}
 case 60: 
 var $203=HEAP32[((2305068)>>2)];
 var $204=((($203)+($psize_0))|0);
 HEAP32[((2305068)>>2)]=$204;
 HEAP32[((2305080)>>2)]=$p_0;
 var $205=$204|1;
 var $206=(($p_0+4)|0);
 HEAP32[(($206)>>2)]=$205;
 var $207=HEAP32[((2305076)>>2)];
 var $208=($p_0|0)==($207|0);
 if($208){label=61;break;}else{label=140;break;}
 case 61: 
 HEAP32[((2305076)>>2)]=0;
 HEAP32[((2305064)>>2)]=0;
 label=140;break;
 case 62: 
 var $211=HEAP32[((2305076)>>2)];
 var $212=($16|0)==($211|0);
 if($212){label=63;break;}else{label=64;break;}
 case 63: 
 var $214=HEAP32[((2305064)>>2)];
 var $215=((($214)+($psize_0))|0);
 HEAP32[((2305064)>>2)]=$215;
 HEAP32[((2305076)>>2)]=$p_0;
 var $216=$215|1;
 var $217=(($p_0+4)|0);
 HEAP32[(($217)>>2)]=$216;
 var $218=(($189+$215)|0);
 var $219=$218;
 HEAP32[(($219)>>2)]=$215;
 label=140;break;
 case 64: 
 var $221=$194&-8;
 var $222=((($221)+($psize_0))|0);
 var $223=$194>>>3;
 var $224=($194>>>0)<256;
 if($224){label=65;break;}else{label=77;break;}
 case 65: 
 var $226=(($mem+$14)|0);
 var $227=$226;
 var $228=HEAP32[(($227)>>2)];
 var $_sum257258=$14|4;
 var $229=(($mem+$_sum257258)|0);
 var $230=$229;
 var $231=HEAP32[(($230)>>2)];
 var $232=$223<<1;
 var $233=((2305096+($232<<2))|0);
 var $234=$233;
 var $235=($228|0)==($234|0);
 if($235){label=68;break;}else{label=66;break;}
 case 66: 
 var $237=$228;
 var $238=HEAP32[((2305072)>>2)];
 var $239=($237>>>0)<($238>>>0);
 if($239){label=76;break;}else{label=67;break;}
 case 67: 
 var $241=(($228+12)|0);
 var $242=HEAP32[(($241)>>2)];
 var $243=($242|0)==($16|0);
 if($243){label=68;break;}else{label=76;break;}
 case 68: 
 var $244=($231|0)==($228|0);
 if($244){label=69;break;}else{label=70;break;}
 case 69: 
 var $246=1<<$223;
 var $247=$246^-1;
 var $248=HEAP32[((2305056)>>2)];
 var $249=$248&$247;
 HEAP32[((2305056)>>2)]=$249;
 label=110;break;
 case 70: 
 var $251=($231|0)==($234|0);
 if($251){label=71;break;}else{label=72;break;}
 case 71: 
 var $_pre303=(($231+8)|0);
 var $_pre_phi304=$_pre303;label=74;break;
 case 72: 
 var $253=$231;
 var $254=HEAP32[((2305072)>>2)];
 var $255=($253>>>0)<($254>>>0);
 if($255){label=75;break;}else{label=73;break;}
 case 73: 
 var $257=(($231+8)|0);
 var $258=HEAP32[(($257)>>2)];
 var $259=($258|0)==($16|0);
 if($259){var $_pre_phi304=$257;label=74;break;}else{label=75;break;}
 case 74: 
 var $_pre_phi304;
 var $260=(($228+12)|0);
 HEAP32[(($260)>>2)]=$231;
 HEAP32[(($_pre_phi304)>>2)]=$228;
 label=110;break;
 case 75: 
 _abort();
 throw "Reached an unreachable!";
 case 76: 
 _abort();
 throw "Reached an unreachable!";
 case 77: 
 var $262=$15;
 var $_sum235=((($14)+(16))|0);
 var $263=(($mem+$_sum235)|0);
 var $264=$263;
 var $265=HEAP32[(($264)>>2)];
 var $_sum236237=$14|4;
 var $266=(($mem+$_sum236237)|0);
 var $267=$266;
 var $268=HEAP32[(($267)>>2)];
 var $269=($268|0)==($262|0);
 if($269){label=83;break;}else{label=78;break;}
 case 78: 
 var $271=(($mem+$14)|0);
 var $272=$271;
 var $273=HEAP32[(($272)>>2)];
 var $274=$273;
 var $275=HEAP32[((2305072)>>2)];
 var $276=($274>>>0)<($275>>>0);
 if($276){label=82;break;}else{label=79;break;}
 case 79: 
 var $278=(($273+12)|0);
 var $279=HEAP32[(($278)>>2)];
 var $280=($279|0)==($262|0);
 if($280){label=80;break;}else{label=82;break;}
 case 80: 
 var $282=(($268+8)|0);
 var $283=HEAP32[(($282)>>2)];
 var $284=($283|0)==($262|0);
 if($284){label=81;break;}else{label=82;break;}
 case 81: 
 HEAP32[(($278)>>2)]=$268;
 HEAP32[(($282)>>2)]=$273;
 var $R7_1=$268;label=90;break;
 case 82: 
 _abort();
 throw "Reached an unreachable!";
 case 83: 
 var $_sum239=((($14)+(12))|0);
 var $287=(($mem+$_sum239)|0);
 var $288=$287;
 var $289=HEAP32[(($288)>>2)];
 var $290=($289|0)==0;
 if($290){label=84;break;}else{var $R7_0=$289;var $RP9_0=$288;label=85;break;}
 case 84: 
 var $_sum238=((($14)+(8))|0);
 var $292=(($mem+$_sum238)|0);
 var $293=$292;
 var $294=HEAP32[(($293)>>2)];
 var $295=($294|0)==0;
 if($295){var $R7_1=0;label=90;break;}else{var $R7_0=$294;var $RP9_0=$293;label=85;break;}
 case 85: 
 var $RP9_0;
 var $R7_0;
 var $296=(($R7_0+20)|0);
 var $297=HEAP32[(($296)>>2)];
 var $298=($297|0)==0;
 if($298){label=86;break;}else{var $R7_0=$297;var $RP9_0=$296;label=85;break;}
 case 86: 
 var $300=(($R7_0+16)|0);
 var $301=HEAP32[(($300)>>2)];
 var $302=($301|0)==0;
 if($302){label=87;break;}else{var $R7_0=$301;var $RP9_0=$300;label=85;break;}
 case 87: 
 var $304=$RP9_0;
 var $305=HEAP32[((2305072)>>2)];
 var $306=($304>>>0)<($305>>>0);
 if($306){label=89;break;}else{label=88;break;}
 case 88: 
 HEAP32[(($RP9_0)>>2)]=0;
 var $R7_1=$R7_0;label=90;break;
 case 89: 
 _abort();
 throw "Reached an unreachable!";
 case 90: 
 var $R7_1;
 var $310=($265|0)==0;
 if($310){label=110;break;}else{label=91;break;}
 case 91: 
 var $_sum250=((($14)+(20))|0);
 var $312=(($mem+$_sum250)|0);
 var $313=$312;
 var $314=HEAP32[(($313)>>2)];
 var $315=((2305360+($314<<2))|0);
 var $316=HEAP32[(($315)>>2)];
 var $317=($262|0)==($316|0);
 if($317){label=92;break;}else{label=94;break;}
 case 92: 
 HEAP32[(($315)>>2)]=$R7_1;
 var $cond298=($R7_1|0)==0;
 if($cond298){label=93;break;}else{label=100;break;}
 case 93: 
 var $319=HEAP32[(($313)>>2)];
 var $320=1<<$319;
 var $321=$320^-1;
 var $322=HEAP32[((2305060)>>2)];
 var $323=$322&$321;
 HEAP32[((2305060)>>2)]=$323;
 label=110;break;
 case 94: 
 var $325=$265;
 var $326=HEAP32[((2305072)>>2)];
 var $327=($325>>>0)<($326>>>0);
 if($327){label=98;break;}else{label=95;break;}
 case 95: 
 var $329=(($265+16)|0);
 var $330=HEAP32[(($329)>>2)];
 var $331=($330|0)==($262|0);
 if($331){label=96;break;}else{label=97;break;}
 case 96: 
 HEAP32[(($329)>>2)]=$R7_1;
 label=99;break;
 case 97: 
 var $334=(($265+20)|0);
 HEAP32[(($334)>>2)]=$R7_1;
 label=99;break;
 case 98: 
 _abort();
 throw "Reached an unreachable!";
 case 99: 
 var $337=($R7_1|0)==0;
 if($337){label=110;break;}else{label=100;break;}
 case 100: 
 var $339=$R7_1;
 var $340=HEAP32[((2305072)>>2)];
 var $341=($339>>>0)<($340>>>0);
 if($341){label=109;break;}else{label=101;break;}
 case 101: 
 var $343=(($R7_1+24)|0);
 HEAP32[(($343)>>2)]=$265;
 var $_sum251=((($14)+(8))|0);
 var $344=(($mem+$_sum251)|0);
 var $345=$344;
 var $346=HEAP32[(($345)>>2)];
 var $347=($346|0)==0;
 if($347){label=105;break;}else{label=102;break;}
 case 102: 
 var $349=$346;
 var $350=HEAP32[((2305072)>>2)];
 var $351=($349>>>0)<($350>>>0);
 if($351){label=104;break;}else{label=103;break;}
 case 103: 
 var $353=(($R7_1+16)|0);
 HEAP32[(($353)>>2)]=$346;
 var $354=(($346+24)|0);
 HEAP32[(($354)>>2)]=$R7_1;
 label=105;break;
 case 104: 
 _abort();
 throw "Reached an unreachable!";
 case 105: 
 var $_sum252=((($14)+(12))|0);
 var $357=(($mem+$_sum252)|0);
 var $358=$357;
 var $359=HEAP32[(($358)>>2)];
 var $360=($359|0)==0;
 if($360){label=110;break;}else{label=106;break;}
 case 106: 
 var $362=$359;
 var $363=HEAP32[((2305072)>>2)];
 var $364=($362>>>0)<($363>>>0);
 if($364){label=108;break;}else{label=107;break;}
 case 107: 
 var $366=(($R7_1+20)|0);
 HEAP32[(($366)>>2)]=$359;
 var $367=(($359+24)|0);
 HEAP32[(($367)>>2)]=$R7_1;
 label=110;break;
 case 108: 
 _abort();
 throw "Reached an unreachable!";
 case 109: 
 _abort();
 throw "Reached an unreachable!";
 case 110: 
 var $371=$222|1;
 var $372=(($p_0+4)|0);
 HEAP32[(($372)>>2)]=$371;
 var $373=(($189+$222)|0);
 var $374=$373;
 HEAP32[(($374)>>2)]=$222;
 var $375=HEAP32[((2305076)>>2)];
 var $376=($p_0|0)==($375|0);
 if($376){label=111;break;}else{var $psize_1=$222;label=113;break;}
 case 111: 
 HEAP32[((2305064)>>2)]=$222;
 label=140;break;
 case 112: 
 var $379=$194&-2;
 HEAP32[(($193)>>2)]=$379;
 var $380=$psize_0|1;
 var $381=(($p_0+4)|0);
 HEAP32[(($381)>>2)]=$380;
 var $382=(($189+$psize_0)|0);
 var $383=$382;
 HEAP32[(($383)>>2)]=$psize_0;
 var $psize_1=$psize_0;label=113;break;
 case 113: 
 var $psize_1;
 var $385=$psize_1>>>3;
 var $386=($psize_1>>>0)<256;
 if($386){label=114;break;}else{label=119;break;}
 case 114: 
 var $388=$385<<1;
 var $389=((2305096+($388<<2))|0);
 var $390=$389;
 var $391=HEAP32[((2305056)>>2)];
 var $392=1<<$385;
 var $393=$391&$392;
 var $394=($393|0)==0;
 if($394){label=115;break;}else{label=116;break;}
 case 115: 
 var $396=$391|$392;
 HEAP32[((2305056)>>2)]=$396;
 var $_sum248_pre=((($388)+(2))|0);
 var $_pre=((2305096+($_sum248_pre<<2))|0);
 var $F16_0=$390;var $_pre_phi=$_pre;label=118;break;
 case 116: 
 var $_sum249=((($388)+(2))|0);
 var $398=((2305096+($_sum249<<2))|0);
 var $399=HEAP32[(($398)>>2)];
 var $400=$399;
 var $401=HEAP32[((2305072)>>2)];
 var $402=($400>>>0)<($401>>>0);
 if($402){label=117;break;}else{var $F16_0=$399;var $_pre_phi=$398;label=118;break;}
 case 117: 
 _abort();
 throw "Reached an unreachable!";
 case 118: 
 var $_pre_phi;
 var $F16_0;
 HEAP32[(($_pre_phi)>>2)]=$p_0;
 var $405=(($F16_0+12)|0);
 HEAP32[(($405)>>2)]=$p_0;
 var $406=(($p_0+8)|0);
 HEAP32[(($406)>>2)]=$F16_0;
 var $407=(($p_0+12)|0);
 HEAP32[(($407)>>2)]=$390;
 label=140;break;
 case 119: 
 var $409=$p_0;
 var $410=$psize_1>>>8;
 var $411=($410|0)==0;
 if($411){var $I18_0=0;label=122;break;}else{label=120;break;}
 case 120: 
 var $413=($psize_1>>>0)>16777215;
 if($413){var $I18_0=31;label=122;break;}else{label=121;break;}
 case 121: 
 var $415=((($410)+(1048320))|0);
 var $416=$415>>>16;
 var $417=$416&8;
 var $418=$410<<$417;
 var $419=((($418)+(520192))|0);
 var $420=$419>>>16;
 var $421=$420&4;
 var $422=$421|$417;
 var $423=$418<<$421;
 var $424=((($423)+(245760))|0);
 var $425=$424>>>16;
 var $426=$425&2;
 var $427=$422|$426;
 var $428=(((14)-($427))|0);
 var $429=$423<<$426;
 var $430=$429>>>15;
 var $431=((($428)+($430))|0);
 var $432=$431<<1;
 var $433=((($431)+(7))|0);
 var $434=$psize_1>>>($433>>>0);
 var $435=$434&1;
 var $436=$435|$432;
 var $I18_0=$436;label=122;break;
 case 122: 
 var $I18_0;
 var $438=((2305360+($I18_0<<2))|0);
 var $439=(($p_0+28)|0);
 var $I18_0_c=$I18_0;
 HEAP32[(($439)>>2)]=$I18_0_c;
 var $440=(($p_0+20)|0);
 HEAP32[(($440)>>2)]=0;
 var $441=(($p_0+16)|0);
 HEAP32[(($441)>>2)]=0;
 var $442=HEAP32[((2305060)>>2)];
 var $443=1<<$I18_0;
 var $444=$442&$443;
 var $445=($444|0)==0;
 if($445){label=123;break;}else{label=124;break;}
 case 123: 
 var $447=$442|$443;
 HEAP32[((2305060)>>2)]=$447;
 HEAP32[(($438)>>2)]=$409;
 var $448=(($p_0+24)|0);
 var $_c=$438;
 HEAP32[(($448)>>2)]=$_c;
 var $449=(($p_0+12)|0);
 HEAP32[(($449)>>2)]=$p_0;
 var $450=(($p_0+8)|0);
 HEAP32[(($450)>>2)]=$p_0;
 label=136;break;
 case 124: 
 var $452=HEAP32[(($438)>>2)];
 var $453=($I18_0|0)==31;
 if($453){var $458=0;label=126;break;}else{label=125;break;}
 case 125: 
 var $455=$I18_0>>>1;
 var $456=(((25)-($455))|0);
 var $458=$456;label=126;break;
 case 126: 
 var $458;
 var $459=$psize_1<<$458;
 var $K19_0=$459;var $T_0=$452;label=127;break;
 case 127: 
 var $T_0;
 var $K19_0;
 var $461=(($T_0+4)|0);
 var $462=HEAP32[(($461)>>2)];
 var $463=$462&-8;
 var $464=($463|0)==($psize_1|0);
 if($464){label=132;break;}else{label=128;break;}
 case 128: 
 var $466=$K19_0>>>31;
 var $467=(($T_0+16+($466<<2))|0);
 var $468=HEAP32[(($467)>>2)];
 var $469=($468|0)==0;
 var $470=$K19_0<<1;
 if($469){label=129;break;}else{var $K19_0=$470;var $T_0=$468;label=127;break;}
 case 129: 
 var $472=$467;
 var $473=HEAP32[((2305072)>>2)];
 var $474=($472>>>0)<($473>>>0);
 if($474){label=131;break;}else{label=130;break;}
 case 130: 
 HEAP32[(($467)>>2)]=$409;
 var $476=(($p_0+24)|0);
 var $T_0_c245=$T_0;
 HEAP32[(($476)>>2)]=$T_0_c245;
 var $477=(($p_0+12)|0);
 HEAP32[(($477)>>2)]=$p_0;
 var $478=(($p_0+8)|0);
 HEAP32[(($478)>>2)]=$p_0;
 label=136;break;
 case 131: 
 _abort();
 throw "Reached an unreachable!";
 case 132: 
 var $481=(($T_0+8)|0);
 var $482=HEAP32[(($481)>>2)];
 var $483=$T_0;
 var $484=HEAP32[((2305072)>>2)];
 var $485=($483>>>0)<($484>>>0);
 if($485){label=135;break;}else{label=133;break;}
 case 133: 
 var $487=$482;
 var $488=($487>>>0)<($484>>>0);
 if($488){label=135;break;}else{label=134;break;}
 case 134: 
 var $490=(($482+12)|0);
 HEAP32[(($490)>>2)]=$409;
 HEAP32[(($481)>>2)]=$409;
 var $491=(($p_0+8)|0);
 var $_c244=$482;
 HEAP32[(($491)>>2)]=$_c244;
 var $492=(($p_0+12)|0);
 var $T_0_c=$T_0;
 HEAP32[(($492)>>2)]=$T_0_c;
 var $493=(($p_0+24)|0);
 HEAP32[(($493)>>2)]=0;
 label=136;break;
 case 135: 
 _abort();
 throw "Reached an unreachable!";
 case 136: 
 var $495=HEAP32[((2305088)>>2)];
 var $496=((($495)-(1))|0);
 HEAP32[((2305088)>>2)]=$496;
 var $497=($496|0)==0;
 if($497){var $sp_0_in_i=2305512;label=137;break;}else{label=140;break;}
 case 137: 
 var $sp_0_in_i;
 var $sp_0_i=HEAP32[(($sp_0_in_i)>>2)];
 var $498=($sp_0_i|0)==0;
 var $499=(($sp_0_i+8)|0);
 if($498){label=138;break;}else{var $sp_0_in_i=$499;label=137;break;}
 case 138: 
 HEAP32[((2305088)>>2)]=-1;
 label=140;break;
 case 139: 
 _abort();
 throw "Reached an unreachable!";
 case 140: 
 return;
  default: assert(0, "bad label: " + label);
 }
}
Module["_free"] = _free;
// EMSCRIPTEN_END_FUNCS
// EMSCRIPTEN_END_FUNCS
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
if (memoryInitializer) {
  function applyData(data) {
    HEAPU8.set(data, STATIC_BASE);
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    applyData(Module['readBinary'](memoryInitializer));
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      applyData(data);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;
var initialStackTop;
var preloadStartTime = null;
var calledMain = false;
dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}
Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');
  args = args || [];
  if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
    Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
  }
  ensureInitRuntime();
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);
  initialStackTop = STACKTOP;
  try {
    var ret = Module['_main'](argc, argv, 0);
    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}
function run(args) {
  args = args || Module['arguments'];
  if (preloadStartTime === null) preloadStartTime = Date.now();
  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }
  preRun();
  if (runDependencies > 0) {
    // a preRun added a dependency, run will be called later
    return;
  }
  function doRun() {
    ensureInitRuntime();
    preMain();
    Module['calledRun'] = true;
    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;
function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;
  // exit the runtime
  exitRuntime();
  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371
  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;
function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }
  ABORT = true;
  EXITSTATUS = 1;
  throw 'abort() at ' + stackTrace();
}
Module['abort'] = Module.abort = abort;
// {{PRE_RUN_ADDITIONS}}
if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}
// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}
run();
// {{POST_RUN_ADDITIONS}}
// {{MODULE_ADDITIONS}}
//@ sourceMappingURL=index.html.map