import type { TestConfig } from "../../main.test";

const clickControlled = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#controlled")!.click();
};

const clickUncontrolled = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#uncontrolled")!.click();
};

export const config: TestConfig = {
  steps: [
    {},
    clickControlled,
    clickUncontrolled,
    clickControlled,
    clickUncontrolled,
    clickControlled,
    clickUncontrolled,
  ],
};
