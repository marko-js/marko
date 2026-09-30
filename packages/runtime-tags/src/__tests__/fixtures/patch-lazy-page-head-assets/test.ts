import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy page's assets link in the head, where a navigation never removes
// them: the bundler counts them loaded for as long as the page lives.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ page: 0 }, wait, { page: 1 }, wait, { page: 0 }, wait],
};
