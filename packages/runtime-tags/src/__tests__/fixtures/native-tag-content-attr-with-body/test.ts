import type { TestConfig } from "../../main";

function bump(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
