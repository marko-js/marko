import type { TestConfig } from "../../main.test";

// A row's script reads its item and an input its caller passes client state: a
// patch changing one row's item runs that row's script once, and no other's.
export const config: TestConfig = {
  patches: true,
  steps: [{ items: ["p", "q"] }, { items: ["r", "q"] }],
};
