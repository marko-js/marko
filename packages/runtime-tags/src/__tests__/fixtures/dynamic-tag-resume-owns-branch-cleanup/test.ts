import type { TestConfig } from "../../main";
function clickS(document: Document) {
  document.querySelector<HTMLButtonElement>("#s")!.click();
}
function clickO(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, clickS, clickO] };
