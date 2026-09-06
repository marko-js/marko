import type { TestConfig } from "../../main.test";
// An effect in a nested branch reads a server-owned local declared in the enclosing branch: the frame writes the local and the effect's hop count targets that scope.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, inner: true, title: "a", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "?" },
  ],
};
