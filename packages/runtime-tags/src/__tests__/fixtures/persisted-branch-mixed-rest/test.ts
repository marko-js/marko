import type { TestConfig } from "../../main.test";

// A rest grain in a selector has the whole-input problem: unrelated (or
// unserializable) members change it after the wire write. Fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
