"use strict";

exports.require =
  process.env.BUNDLE || typeof window === "object" ? undefined : require;
