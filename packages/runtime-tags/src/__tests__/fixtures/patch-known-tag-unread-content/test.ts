import type { TestConfig } from "../../main.test";

// Content the child never reads renders nowhere, so a patch neither writes
// nor links anything for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a", items: ["x"], cls: "c" },
    { show: false, label: "b", items: ["y", "z"], cls: "d" },
  ],
};
