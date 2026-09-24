import type { TestConfig } from "../../main.test";

function check(document: Document) {
  document.querySelector<HTMLButtonElement>(".check")!.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

export const config: TestConfig = {
  steps: [{ tag: null }, check, toggle, check, toggle, check],
};
