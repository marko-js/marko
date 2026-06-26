import type { TestConfig } from "../../main.test";
function n(c: Element) {
  c.querySelector<HTMLButtonElement>("#n")!.click();
}
function o(c: Element) {
  c.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, n, o, n] };
