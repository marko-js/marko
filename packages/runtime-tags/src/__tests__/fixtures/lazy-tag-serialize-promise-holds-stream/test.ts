import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A promise first serialized when the lazy content's ready data flushes, after
// the render itself completed, holds the stream open until it settles.
export const config: TestConfig = {
  steps: [{}, wait, wait],
  equivalent: false,
};
