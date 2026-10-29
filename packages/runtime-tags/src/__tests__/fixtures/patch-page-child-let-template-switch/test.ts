import type { TestConfig } from "../../main.test";

// A live `<let>` the page doesn't hold, whose init switches template, follows
// the init as a reload does (the client render keeps the first one).
export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  steps: [
    { show: true, big: false, label: "a" },
    { show: true, big: true, label: "b" },
    { show: true, big: true, label: "c" },
  ],
};
