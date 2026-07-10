import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (container) => {
      // switch from `one` (v:1) to `two` (v:10)
      container.querySelector<HTMLButtonElement>("#toggle")!.click();
    },
    (container) => {
      // update `two`'s value; should show v:11
      container.querySelector<HTMLButtonElement>("#inc-b")!.click();
    },
  ],
};
