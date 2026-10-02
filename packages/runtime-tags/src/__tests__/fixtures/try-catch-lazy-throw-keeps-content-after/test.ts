import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A lazy tag throws as a `<try>` body's await settles, and the body goes on to
// an await; the content after the `<try>` still streams.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
