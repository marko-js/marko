import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A lazy tag throws as a `<try>` body's await settles; the body's content after
// it is dead once the `@catch` fires, so none of it streams.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
