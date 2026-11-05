import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { show: true, o: { a: 1, b: "b", title: "t" } },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#rename")!.click(),
  ],
};
