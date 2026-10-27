import type { TestConfig } from "../../main.test";

// A row's item an effect reads joins a server input in a hole the patch writes:
// the effect's write keeps each item current.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: ["p", "q"], y: "s" },
    { items: ["r", "q"], y: "t" },
    { items: ["u", "v"], y: "w" },
  ],
};
