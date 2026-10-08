import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A loop's `<const>` local feeds a child's state-mixed input through its
// property: the fill is written after the local exists.
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: [{ item: { id: "a" } }] },
    { rows: [{ item: { id: "b" } }] },
    click,
  ],
};
