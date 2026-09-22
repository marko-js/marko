import type { TestConfig } from "../../main.test";

// A caught `<try>` with no await inside a branch: the branch's creation
// carries the try body's payload, and a throw then a recovery round-trip.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false },
    { show: true, message: "ok" },
    { show: true, message: "x", boom: true },
    { show: true, message: "back" },
    { show: false },
    { show: true, message: "again" },
  ],
};
