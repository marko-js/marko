import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  skip_html: true, // TODO: it is broken.
  steps: [{}, click, click, click],
};
