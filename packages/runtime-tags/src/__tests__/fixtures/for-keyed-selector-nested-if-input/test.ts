import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {
      show: true,
      rows: [
        { id: 1, label: "a" },
        { id: 2, label: "b" },
        { id: 3, label: "c" },
      ],
    },
    clickSelect(1),
    clickSelect(2),
  ],
};
