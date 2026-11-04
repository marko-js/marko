import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.b1")!.click();
};

// A handler and a script in attribute tag `<for>` content reading its loop param:
// a patch pairing the content writes the param, so a click picks the patched
// item and the script re-runs.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: 1, name: "A" }] },
    { items: [{ id: 1, name: "B" }] },
    click,
    {
      items: [
        { id: 1, name: "C" },
        { id: 2, name: "D" },
      ],
    },
    click,
  ],
};
