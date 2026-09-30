import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A nested placeholder throws in the render's last flush, firing a `@catch` around a
// pending await; its empty reorder still completes the outer placeholder's content.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, flush, wait],
};
