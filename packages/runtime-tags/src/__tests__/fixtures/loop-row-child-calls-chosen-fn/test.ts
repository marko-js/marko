import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-loop-row-child-calls-chosen-fn without patches.
export const config: TestConfig = {
  equivalent: false,
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
