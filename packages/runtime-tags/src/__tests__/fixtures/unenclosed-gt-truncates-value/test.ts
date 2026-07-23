import type { TestConfig } from "../../main.test";

// The first two tags are truncated by the `>` in their value; the last three
// are the shapes that must stay quiet (enclosed, no space, text without `>`).
export const config: TestConfig = {
  steps: [{ n: 1, delta: 5, ok: true, cls: "c" }],
};
