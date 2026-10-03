import type { TestConfig } from "../../main.test";

function go(document: Document) {
  document.querySelector<HTMLButtonElement>(".go")!.click();
}

function check(document: Document) {
  document.querySelector<HTMLButtonElement>(".check")!.click();
}

export const config: TestConfig = {
  steps: [{}, go, check],
};
