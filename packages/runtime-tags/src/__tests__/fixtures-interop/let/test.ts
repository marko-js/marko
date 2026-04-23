import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  skip_ssr: true,
  skip_resume: true,
  steps: [{}, click, click, click],
};
