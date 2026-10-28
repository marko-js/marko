import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy import used as a value, toggled without a navigation.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    wait,
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("button")!.click();
    },
    wait,
  ],
};
