import type { TestConfig } from "../../main.test";
function pick(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
export const config: TestConfig = { steps: [{}, pick] };
