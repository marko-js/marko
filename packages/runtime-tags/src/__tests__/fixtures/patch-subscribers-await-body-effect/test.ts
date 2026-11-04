import type { TestConfig } from "../../main.test";
import { resolveAfter } from "../../utils/resolve";

// The `<await>` body's `<const>` subscribes it to the value the walk runs for the define
// body; a patch reaches the `<await>` body by its entries, so the walk skips it.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { n: 0, m: 5, p: resolveAfter("v", 1) },
    { n: 3, m: 5, p: resolveAfter("v", 1) },
  ],
};
