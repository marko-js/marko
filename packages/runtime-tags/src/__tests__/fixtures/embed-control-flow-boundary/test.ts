import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("button#toggle")!.click();
}

function cleanup(container: Element) {
  container.querySelector<HTMLButtonElement>("button#cleanup")!.click();
}

export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  skip_resume: false,
  steps: [{}, toggle, toggle, toggle, cleanup],
};
