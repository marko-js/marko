import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Each Tags child holds the effects of its async `<try>` body apart from its own; the
// Class runtime flushes the children's content as one chunk, keeping every effect.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
