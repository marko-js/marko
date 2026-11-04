import type { TestConfig } from "../../main.test";

// Server-fed `content=` on a native tag re-renders from its `AttrContent`
// entry: an unchanged renderer pairs, a swap creates from its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { mode: "a", note: "one" },
    { mode: "a", note: "two" },
    { mode: "b", note: "three" },
  ],
};
