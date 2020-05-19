module.exports =
  typeof setImmediate === "function"
    ? setImmediate
    : (function() {
        var queue = [];
        var channel = new MessageChannel();
        channel.port1.onmessage = function() {
          var callbacks = queue;
          queue = [];
          for (let i = 0; i < callbacks.length; i++) {
            callbacks[i]();
          }
        };
        return function(callback) {
          if (queue.push(callback) === 1) {
            channel.port2.postMessage(0);
          }
        };
      })();
