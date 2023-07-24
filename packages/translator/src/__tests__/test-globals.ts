function init(globalThis: any) {
  Object.assign(globalThis, {
    // Forces test paths to use `/src` folders instead of `/dist`.
    MARKO_SRC: "true",
    // Forces tests to use the Marko debug runtime.
    MARKO_DEBUG: "true",
  });
}

init(globalThis);
export default init;
