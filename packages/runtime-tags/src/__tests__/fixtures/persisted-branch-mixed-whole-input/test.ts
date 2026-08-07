import type { TestConfig } from "../../main.test";

// A whole-`input` read cannot feed a selector: the bag carries shapes
// (functions, unregistered objects) the wire cannot deliver faithfully.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
