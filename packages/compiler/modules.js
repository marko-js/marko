"use strict";

exports.require =
  process.env.BUNDLE || typeof document === "object" ? undefined : require;
