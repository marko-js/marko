import type { TestConfig } from "../../main.test";

// patch-created-content-dynamic-tag-join-member-filled without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, which: true, id: "a" },
    { show: true, which: true, id: "b" },
    { show: true, which: false, id: "c" },
    { show: false, which: true, id: "d" },
    { show: true, which: true, id: "e" },
  ],
};
