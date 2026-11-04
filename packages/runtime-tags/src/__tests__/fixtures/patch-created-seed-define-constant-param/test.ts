import type { TestConfig } from "../../main.test";

// A scope a patch creates takes no seed for a value only a `<define>` body's
// branch on a constant param reads, which the page never writes either.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "c" },
  ],
};
