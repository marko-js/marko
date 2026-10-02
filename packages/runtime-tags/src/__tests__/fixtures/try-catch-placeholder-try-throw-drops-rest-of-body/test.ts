import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A nested `<try>` with only a `@placeholder` throws as the outer body's await
// settles; the outer body's content after it is dead once its `@catch` fires.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
