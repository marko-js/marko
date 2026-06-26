import type { TestConfig } from "../../main.test";
function c(el: Element) {
  el.querySelector<HTMLButtonElement>("#c")!.click();
}
function o(el: Element) {
  el.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, c, o, c] };
