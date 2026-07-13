const { promiseProvider } = require("../../../__util__/async-helpers");

// Order flushes by setImmediate ticks (the queue BufferedWriter flushes on)
// rather than wall-clock timers, so the interleaving can't collapse under load.
exports.templateData = {
  wait: (delay) => promiseProvider((delay / 10) * 3),
};

exports.skip_vdom = true;
