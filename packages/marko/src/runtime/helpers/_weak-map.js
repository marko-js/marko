var counter = 0;
var seed = "M" + Math.random().toFixed(5);
module.exports =
  global.WeakMap ||
  function WeakMap() {
    var id = seed + counter++;
    return {
      get: function(ref) {
        return ref[id];
      },
      set: function(ref, value) {
        ref[id] = value;
      }
    };
  };
