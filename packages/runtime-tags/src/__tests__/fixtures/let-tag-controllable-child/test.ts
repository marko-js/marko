import type { TestConfig } from "../../main";

function click(document: Document) {
  document.querySelectorAll("button")!.forEach((item) => item.click());
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
