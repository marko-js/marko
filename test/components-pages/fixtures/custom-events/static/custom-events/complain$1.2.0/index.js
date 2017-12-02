$_mod.def("/complain$1.2.0/index", function(require, exports, module, __filename, __dirname) { 'use strict';var process=require("process"); 

var StackParser = require('/error-stack-parser$2.0.1/error-stack-parser'/*'error-stack-parser'*/);
var env = typeof process !== 'undefined' && process.env.NODE_ENV;
var isDevelopment = !env || env === 'dev' || env === 'development';
var logger = typeof console !== 'undefined' && console.warn && console;
var cwd = typeof process !== 'undefined' && process.cwd() + '/' || '';
var linebreak = typeof process !== 'undefined' && 'win32' === process.platform ? '\r\n' : '\n';
var newline = /(\r\n|\r|\n)/g;
var slice = [].slice;
var hits = {};

complain = isDevelopment ? complain : noop;
complain.method = isDevelopment ? method : noop;
complain.fn = isDevelopment ? fn : noopReturn;
complain.log = log;
complain.stream = typeof process !== 'undefined' && process.stderr;
complain.silence = false;
complain.color = complain.stream && complain.stream.isTTY;
complain.colors = { warning:'\x1b[31;1m', message:false, location:'\u001b[90m' };

/* istanbul ignore next */
if(typeof module !== 'undefined' && module.exports) {
  module.exports = complain;
} else if(typeof window !== 'undefined') {
  window.complain = complain;
}

function complain() {
  var options;
  var location;
  var getCallToDeprecate;
  var args = arguments;

  if(complain.silence) return;

  if(typeof args[args.length-1] === 'object') {
    options = args[args.length-1];
    args = slice.call(args, 0, -1);
  } else {
    options = {};
  }

  if(options.location === false) {
    // When the user explictly sets location to false,
    // We will get the location of the call to complain()
    // is called, instead of the location of the call to the
    // deprecated function.
    getCallToDeprecate = true;
  }

  location = options.location || getLocation(getCallToDeprecate);

  /* istanbul ignore next */
  // Location is only missing in older browsers.
  if(location) {
    if(hits[location]) return;
    else hits[location] = true;
  }

  var output = format('WARNING!!', complain.colors.warning);

  for(var i = 0; i < args.length; i++) {
    output += linebreak + format(args[i], complain.colors.message);
  }

  if(options.location !== false && location) {
    output += linebreak + format('  at '+location.replace(cwd, ''), complain.colors.location);
  }

  complain.log(linebreak + output + linebreak);
};

function method(object, methodName) {
    var originalMethod = object[methodName];
    var args = slice.call(arguments, 2);

    object[methodName] = function() {
        complain.apply(null, args);
        return originalMethod.apply(this, arguments);
    };
}

function fn(original) {
  var args = slice.call(arguments, 1);

  return function() {
    complain.apply(null, args);
    return original.apply(this, arguments);
  }
}

function log(message, color) {
  var formatted = format(message, color);
  if(complain.stream) {
    complain.stream.write(formatted+linebreak);
  } else if(logger) {
    logger.warn(formatted);
  }
}

function format(message, color) {
  return color && complain.color ? color + message + '\x1b[0m' : message;
}

function getLocation(getCallToDeprecate) {
  var stack;
  var frame;
  var location = '';
  var index = getCallToDeprecate ? 2 : 3;

  /**
   * Stack index descriptions.
   * 
   * 0: In getLocation(), the call to new Error()
   * 1: In complain(), the call to getLocation()
   * 2: In the deprecated function, the call to complain()
   * 3: The call to the deprecated function (THIS IS THE DEFAULT)
   */

  try {
    stack = StackParser.parse(new Error());
    frame = stack[index];
    location = frame.fileName+':'+frame.lineNumber+':'+frame.columnNumber;
  } catch(e) {}

  return location;
}

function noop(){};
function noopReturn(r) { return r; };

});