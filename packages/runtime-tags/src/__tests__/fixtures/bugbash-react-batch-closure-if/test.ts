import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (container) => {
      container.querySelector<HTMLButtonElement>("#both")!.click();
    },
    (container) => {
      container.querySelector<HTMLButtonElement>("#both")!.click();
    },
  ],
};
