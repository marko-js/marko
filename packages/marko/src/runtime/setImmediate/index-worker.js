var channel = new MessageChannel();
var queue = [];

channel.port1.onmessage = function () {
  var callbacks = queue;
  queue = [];
  for (var i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
};

module.exports = function (cb) {
  if (queue.push(cb) === 1) {
    channel.port2.postMessage(0);
  }
};
