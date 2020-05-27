"use strict";

module.exports = process.env.BUNDLE
  ? require("./index-browser")
  : require("./index-default");
