import type { TestConfig } from "../../main.test";

// A `<show>` over client state keeps the client's display through a patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "one" },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
    { label: "two" },
  ],
};
