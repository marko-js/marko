import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// A lazy tag throws as a `<try>` body's await settles, and the await after it
// is still pending when the render's last flush streams; the `@catch` still shows.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait],
};
