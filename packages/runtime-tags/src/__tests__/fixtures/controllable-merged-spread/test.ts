import type { TestConfig } from "../../main";
function pick(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
export const config: TestConfig = { steps: [{}, pick] };
