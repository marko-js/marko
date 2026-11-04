import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy import reached through a `<const>` alias in a branch a patch creates.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    wait,
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("button")!.click();
    },
    wait,
  ],
};
