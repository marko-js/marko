import type { TestConfig } from "../../main.test";

// A dynamic style inside a keyed loop item constructs with the item: the
// fresh scope gets its shell rule before the first patched value.
export const config: TestConfig = {
  // The patched rule names the build-specific custom property.
  skip_parity: true,
  persisted: true,
  steps: [
    { items: [{ id: "a", color: "red" }] },
    {
      items: [
        { id: "a", color: "red" },
        { id: "b", color: "blue" },
      ],
    },
    { items: [{ id: "b", color: "green" }] },
  ],
};
