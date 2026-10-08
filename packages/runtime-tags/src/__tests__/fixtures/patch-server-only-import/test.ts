import type { TestConfig } from "../../main.test";

// A scriptless page reads a server-only module for a request-derived
// attribute the flush writes: the entry links the page's patch features,
// never the page module, so the browser never evaluates that import.
export const config: TestConfig = {
  patches: true,
  // Imports a server-only module, which a client render cannot load.
  skip_csr: true,
  steps: [{ msg: "a" }, { msg: "b" }],
};
