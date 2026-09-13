import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Route branches as the body of an eager root layout, the docs branch
// rendering a lazy layout whose body holds the page chain.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: () => [{ page: 0 }, { page: 1 }, wait, { page: 2 }, wait, { page: 0 }],
};
