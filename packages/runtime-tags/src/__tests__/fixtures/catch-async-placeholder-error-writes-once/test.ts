import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The `@catch` for async `@placeholder` content fires while the stream consumes
// it, and its lazy content keeps the render open; nothing is written twice.
export const config: TestConfig = {
  steps: [{}, wait, wait],
  skip_csr: true,
  // Only debug builds carry the error's message, which the `@catch` renders.
  skip_parity: true,
};
