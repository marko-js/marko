await Promise.all([
  import("../packages/runtime/bundle.mts"),
  import("../packages/translator/bundle.mts"),
]);
