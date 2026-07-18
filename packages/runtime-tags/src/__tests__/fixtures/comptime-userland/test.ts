import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "Hero" },
    (container: Element) => container.querySelector("button")!.click(),
  ],
};
