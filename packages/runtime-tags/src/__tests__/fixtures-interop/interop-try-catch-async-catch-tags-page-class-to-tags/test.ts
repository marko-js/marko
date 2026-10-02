import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A Tags API page's Class API child renders a `@catch` that streams out of order,
// ready while in-order content still holds back the html with its markers: its
// `<t>` streams only after them.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait],
};
