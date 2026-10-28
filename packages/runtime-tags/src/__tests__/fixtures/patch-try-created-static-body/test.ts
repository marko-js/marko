import type { TestConfig } from "../../main.test";

// A patch creates a branch holding a `<try>` whose body writes nothing:
// the try's entry still ships, so the flush creates it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }],
};
