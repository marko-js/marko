import type { TestConfig } from "../../main.test";

// Server-owned `content=` on a native tag re-renders from its dynamic tag
// entry: an unchanged renderer pairs, a swap constructs from the root record.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { mode: "a", note: "one" },
    { mode: "a", note: "two" },
    { mode: "b", note: "three" },
  ],
};
