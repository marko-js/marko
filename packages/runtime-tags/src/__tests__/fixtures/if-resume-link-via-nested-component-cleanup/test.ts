import type { TestConfig } from "../../main.test";
function s(c: Element) {
  c.querySelector<HTMLButtonElement>("#s")!.click();
}
function o(c: Element) {
  c.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, s, o] };
