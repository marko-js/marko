import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {
      items: [
        { id: 1, extra: "x" },
        { id: 2, extra: "y" },
      ],
      lists: [
        ["a", "b"],
        ["c", "d"],
      ],
    },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
