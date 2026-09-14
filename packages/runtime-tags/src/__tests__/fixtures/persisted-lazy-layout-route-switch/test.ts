import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// Switching route branches where the target's branch renders a lazy
// layout (an await inside, the page's own lazy content as its body).
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: () => [
    { page: 0 },
    { page: 1, list: resolveAfter(["x", "y"]) },
    wait,
    { page: 2, list: resolveAfter(["x"]) },
    wait,
    { page: 0 },
  ],
};
