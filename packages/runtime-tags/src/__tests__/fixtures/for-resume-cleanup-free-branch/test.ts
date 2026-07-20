import type { TestConfig } from "../../main.test";
function c(document: Document) {
  document.querySelector<HTMLButtonElement>("#c")!.click();
}
function o(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, c, o, c] };
