import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A `@placeholder` that throws while the stream consumes it fires the `@catch`,
// which takes the try's place; nothing of the placeholder is written after it.
export const config: TestConfig = {
  steps: [{}, wait],
  skip_csr: true,
};
