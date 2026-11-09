import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { key: { name: "k" } },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>(".mutate")!.click(),
  ],
};
