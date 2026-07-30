import type { TestConfig } from "../../main";

function click(document: Document) {
  (document.querySelector("button") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};
