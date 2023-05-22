var queue = [];
var msg = "" + Math.random();
window.addEventListener("message", function (ev) {
  if (ev.data === msg) {
    var callbacks = queue;
    queue = [];
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
  }
});

exports.___setImmediate = function (callback) {
  if (queue.push(callback) === 1) {
    window.postMessage(msg, "*");
  }
};
