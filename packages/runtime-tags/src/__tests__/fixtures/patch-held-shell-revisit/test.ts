import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A revisited page names a shell the live page already holds: the request
// says so, and the flush ships the branch entry without the shell text.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ page: 0 }, { page: 1 }, wait, { page: 0 }, wait, { page: 1 }, wait],
};
