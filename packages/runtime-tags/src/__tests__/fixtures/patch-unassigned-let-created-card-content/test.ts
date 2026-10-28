import type { TestConfig } from "../../main.test";

// A created card's unassigned `<let>` read in content a child renders with the card.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, n: "a" },
    { on: true, n: "a" },
  ],
};
