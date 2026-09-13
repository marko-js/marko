import type { TestConfig } from "../../main.test";

// A dynamic body fed to a content-consuming child that constructs: the
// body ships as a content record and the fed renderer entry mounts it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "a", note: "x" },
    { show: true, title: "b", note: "y" },
  ],
};
