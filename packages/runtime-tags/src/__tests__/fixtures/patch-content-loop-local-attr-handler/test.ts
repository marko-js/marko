import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.b1")!.click();
};

// An attribute tag `<for>` handler closing over its loop param: a patch
// binds it with the row's values, so a click picks the patched item.
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
