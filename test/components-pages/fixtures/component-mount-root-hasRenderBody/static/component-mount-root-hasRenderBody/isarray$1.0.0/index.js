$_mod.def("/isarray$1.0.0/index", function(require, exports, module, __filename, __dirname) { var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

});