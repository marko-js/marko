import type { TestConfig } from "../../main.test";

const toggleAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};

export const config: TestConfig = {
  steps: [
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
  ],
};
