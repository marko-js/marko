import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (container) => {
      // count and items change in the same batch: reorder + insert + remove
      container.querySelector<HTMLButtonElement>("#both")!.click();
    },
    (container) => {
      container.querySelector<HTMLButtonElement>("#count")!.click();
    },
  ],
};
