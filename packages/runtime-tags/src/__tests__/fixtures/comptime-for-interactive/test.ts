import type { TestConfig } from "../../main.test";

const click = (i: number) => (container: Element) => {
  container.querySelectorAll("button")[i].click();
};

export const config: TestConfig = {
  steps: [{}, click(0), click(1), click(0)],
};
