import type { TestConfig } from "../../main.test";

// Content a `<for>` passes to each row's child, which holds it in a
// server-initialized `<let>`: every live row's child takes the patch's render.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", rows: [{ id: 1 }, { id: 2 }] },
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    { label: "c", rows: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  ],
};
