import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    (container) => {
      (container.querySelector("button") as HTMLButtonElement).click();
    },
  ],
};
