"use strict";

var complain = "MARKO_DEBUG" && require("complain");

module.exports = function forRangeHelper(from, to, step, callback) {
  if (step == null) {
    step = from <= to ? 1 : -1;

    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      if (step === -1) {
        complain(
          '<for> "step" is now required when moving backwards. This will no longer be supported in future versions of Marko.'
        );
      }
    }
  }

  var currentStep = 0;
  var totalSteps = (to - from) / step;

  while (currentStep <= totalSteps) {
    callback(from + currentStep++ * step);
  }
};
