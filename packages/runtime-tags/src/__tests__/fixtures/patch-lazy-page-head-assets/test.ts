import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy page's stylesheet links where it renders and is copied into the head,
// which outlives the navigations that remove the page and bring it back.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ page: 0 }, wait, { page: 1 }, wait, { page: 0 }, wait],
};
