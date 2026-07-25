const {
  callbackProvider,
  promiseProvider,
} = require("../../../__util__/async-helpers");

exports.templateData = {
  testDataProvider: callbackProvider(1, { name: "Frank" }),
  // Ordering is by immediate-tick count rather than wall clock so that a loaded
  // machine cannot reorder the out-of-order flush against the in-order `d`.
  ticks: promiseProvider,
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
