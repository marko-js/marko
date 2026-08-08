import type { TestConfig } from "../../main.test";

// A handler-local shadow of a safe arrow aliases a server function: the
// call resolves in its own scope and the child fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
