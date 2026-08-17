import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Option `value`/`selected` patch like any attribute; a select's controlled
// value re-syncs its options after the frame's writes land, as a render does.
export const config: TestConfig = {
  persisted: true,
  steps: [
    {
      picked: "x",
      pick: "a",
      options: [
        { id: 1, value: "x", label: "X" },
        { id: 2, value: "y", label: "Y" },
      ],
    },
    click,
    {
      picked: "z",
      pick: "b",
      options: [
        { id: 1, value: "x", label: "X" },
        { id: 2, value: "z", label: "Z" },
      ],
    },
    click,
  ],
};
