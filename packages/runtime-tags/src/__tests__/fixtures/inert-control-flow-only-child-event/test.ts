import type { TestConfig } from "../../main";

function click(document: Document) {
  document.querySelector<HTMLDivElement>("#target")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click],
};
