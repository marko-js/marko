import type { TestConfig } from "../../main";

function click(document: Document) {
  document.querySelector<HTMLElement>(".A")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click],
};
