"use strict";

/**
 * Merges nested tags by rendering the body
 */
module.exports = function mergeNestedTags(input) {
  if (input.renderBody) {
    input.renderBody(null, input);
  }
  input.renderBody = null;
  return input;
};
