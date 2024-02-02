function init(globalThis: any) {
  Object.assign(globalThis, {
    // Forces tests to use the Marko debug runtime.
    MARKO_DEBUG: "true",
  });
}

init(globalThis);
export default init;
