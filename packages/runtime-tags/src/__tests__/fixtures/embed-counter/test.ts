import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  skip_resume: false,
  steps: [{}, click, click, click],
};
