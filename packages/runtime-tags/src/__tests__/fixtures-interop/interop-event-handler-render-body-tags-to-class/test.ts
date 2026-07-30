import type { TestConfig } from "../../main";

function click(document: Document) {
  (document.querySelector("button") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
