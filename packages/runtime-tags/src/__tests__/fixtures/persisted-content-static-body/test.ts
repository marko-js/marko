import type { TestConfig } from "../../main.test";

// A static body fed to a content-consuming child on a scriptless page: it
// ships as a content record, so a construct renders it with no dom module.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "a" },
    { show: true, title: "b" },
    { show: true, title: "c" },
  ],
};
