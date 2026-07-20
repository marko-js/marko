import type { TestConfig } from "../../main.test";
function s(document: Document) {
  document.querySelector<HTMLButtonElement>("#s")!.click();
}
function o(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, s, o] };
