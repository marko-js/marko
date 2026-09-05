import type { TestConfig } from "../../main.test";
// An effect reads a branch local AND a root input: each read carries its own owner-hop depth in the effect entry.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, inner: true, title: "a", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "." },
    { show: true, inner: true, title: "b", suffix: "?" },
  ],
};
