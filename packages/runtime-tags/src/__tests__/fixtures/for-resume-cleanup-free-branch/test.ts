import type { TestConfig } from "../../main";
function c(document: Document) {
  document.querySelector<HTMLButtonElement>("#c")!.click();
}
function o(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, c, o, c] };
