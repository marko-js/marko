import type { TestConfig } from "../../main.test";
// An effect in a nested branch reads a patch-written local of the enclosing
// branch: the flush writes it and the effect's hop count targets that scope.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, inner: true, title: "a", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "?" },
  ],
};
