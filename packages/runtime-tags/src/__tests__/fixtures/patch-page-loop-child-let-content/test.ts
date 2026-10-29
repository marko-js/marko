import type { TestConfig } from "../../main.test";

// Content a `<for>` passes to each row's child, which holds it in a `<let>`:
// every live row's instance subscribes, so it takes each patch's input.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { label: "a", rows: [{ id: 1 }, { id: 2 }] },
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    { label: "c", rows: [{ id: 1 }, { id: 2 }, { id: 3 }] },
  ],
};
