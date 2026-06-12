import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A promise serialized by lazy loaded content settles after that content's
// chunk has flushed. Its resolution must be written into the lazy module's
// ready stream (deserialized only once the module loads, where its handle
// is bound) rather than the main stream that flushes first.
export const config: TestConfig = {
  steps: [{}, wait, wait],
  equivalent: false,
};
