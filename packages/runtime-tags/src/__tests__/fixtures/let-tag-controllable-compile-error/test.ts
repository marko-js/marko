import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
  skip_resume: true,
  error_compiler: true,
};
