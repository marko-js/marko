import type { TestConfig } from "../../main.test";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const config: TestConfig = {
  steps: [{}, click],
};
