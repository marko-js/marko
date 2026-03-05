import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
  skip_csr: true,
  error_runtime: true,
};
