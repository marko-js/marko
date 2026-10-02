import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A nested placeholder throws as a reorder streams, after an await it already
// requeued in the same caught body; the `@catch` still takes the body's place.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
