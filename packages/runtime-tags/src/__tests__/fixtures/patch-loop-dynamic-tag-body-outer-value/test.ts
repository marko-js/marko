import type { TestConfig } from "../../main.test";

const toggleAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};

// A row's body its renderer shows under its own state takes a patch's value
// of what it reads outside the row.
export const config: TestConfig = {
  patches: true,
  steps: [
    { wrap: true, suffix: "!", rows: [{ id: 1, label: "a" }] },
    {
      wrap: true,
      suffix: "?",
      rows: [
        { id: 1, label: "a" },
        { id: 2, label: "b" },
      ],
    },
    toggleAll,
    toggleAll,
    {
      wrap: true,
      suffix: ".",
      rows: [
        { id: 1, label: "a" },
        { id: 2, label: "b" },
      ],
    },
  ],
};
