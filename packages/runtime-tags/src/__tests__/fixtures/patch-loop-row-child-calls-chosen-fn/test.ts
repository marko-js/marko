import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function each row chooses by its item, passed to a child reading its whole input:
// the row marks the item's property, and a repeated patch re-runs nothing.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      title: "a",
      items: [
        { id: 1, upper: true },
        { id: 2, upper: false },
      ],
    },
    click,
    {
      title: "b",
      items: [
        { id: 1, upper: false },
        { id: 2, upper: false },
      ],
    },
    {
      title: "b",
      items: [
        { id: 2, upper: true },
        { id: 3, upper: false },
      ],
    },
  ],
};
