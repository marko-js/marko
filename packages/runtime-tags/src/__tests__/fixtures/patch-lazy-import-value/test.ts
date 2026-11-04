import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy import used as a value in a branch a patch creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("button")!.click();
    },
    wait,
  ],
};
