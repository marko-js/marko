import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

export const config: TestConfig = {
  steps: [{ show: true }, click],
};
