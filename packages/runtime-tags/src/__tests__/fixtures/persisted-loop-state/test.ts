import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Item bodies closing over parent-scope state ship no shell (a construct
// cannot wire the closure): patches still pair, update, remove, and reorder
// existing items, but an addition rejects the patch (a document navigation,
// ending the run). Item-local state constructs fine — see persisted-loop-let.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      items: [
        { id: 1, label: "Apples" },
        { id: 2, label: "Bread" },
      ],
    },
    click,
    { items: [{ id: 2, label: "Rye" }] },
    {
      items: [
        { id: 2, label: "Rye" },
        { id: 3, label: "Milk" },
      ],
    },
  ],
};
