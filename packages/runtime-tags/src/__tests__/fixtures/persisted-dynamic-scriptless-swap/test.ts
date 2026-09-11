import type { TestConfig } from "../../main.test";

// A renderer swap on a scriptless page constructs from the template's root
// record, shipped in-band with the flush.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { mode: "a", label: "one" },
    { mode: "a", label: "two" },
    { mode: "b", label: "three" },
  ],
};
