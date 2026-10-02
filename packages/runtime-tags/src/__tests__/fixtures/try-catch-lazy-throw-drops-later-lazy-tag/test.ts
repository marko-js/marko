import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A lazy tag throws as a `<try>` body's await settles, ahead of a stateful lazy
// tag; the dead tag no longer renders, so the page still serializes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
