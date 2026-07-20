import type { TestConfig } from "../../main.test";
function n(document: Document) {
  document.querySelector<HTMLButtonElement>("#n")!.click();
}
function o(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, n, o, n] };
