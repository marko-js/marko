import type { TestConfig } from "../../main.test";

// The client swaps kept content for its own: a patch leaves that alone.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a" },
    (document: Document) => {
      document.querySelector("button")!.click();
    },
    { label: "b" },
  ],
};
