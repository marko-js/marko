import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A row's content a `<define>` body renders (called directly, by a dynamic tag,
// or by one in a nested row, inside the body's `<if>`) follows the row's state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: [{ id: 1, card: true, label: "a", tags: ["x"] }] },
    click,
    {
      rows: [
        { id: 1, card: false, label: "b", tags: [] },
        { id: 2, card: true, label: "c", tags: ["y", "z"] },
      ],
    },
    click,
    {
      rows: [
        { id: 2, card: false, label: "d", tags: ["z"] },
        { id: 1, card: true, label: "e", tags: ["x"] },
      ],
    },
    click,
  ],
};
