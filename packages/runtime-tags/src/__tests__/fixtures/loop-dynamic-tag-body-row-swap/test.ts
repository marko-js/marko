import type { TestConfig } from "../../main.test";
const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};
export const config: TestConfig = {
  steps: [
    {
      wrap: true,
      rows: [
        { id: 1, label: "b" },
        { id: 2, label: "c" },
      ],
    },
    toggle,
    toggle,
  ],
};
