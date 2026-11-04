import type { TestConfig } from "../../main.test";

// A `<try @placeholder>` body a flush creates seeds its `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", show: true },
    { title: "b", show: false },
    { title: "c", show: true },
  ],
};
