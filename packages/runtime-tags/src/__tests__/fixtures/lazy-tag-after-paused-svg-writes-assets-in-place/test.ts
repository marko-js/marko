import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The stream pauses inside `<svg>` before the lazy tag renders; its assets go
// where it renders, after the `<svg>`, not at the next flush's start.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
