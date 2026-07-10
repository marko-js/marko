import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  steps: [
    { list: ["a"] },
    (container) => {
      (container.querySelector("button") as HTMLButtonElement).click();
    },
  ],
};
