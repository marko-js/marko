import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

export const config: TestConfig = {
  steps: [
    {
      on: true,
      note: "b",
      rows: [
        { id: 1, label: "y" },
        { id: 2, label: "z" },
      ],
    },
    toggle,
    toggle,
  ],
};
