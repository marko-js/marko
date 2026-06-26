import type { TestConfig } from "../../main.test";
function clickS(c: Element) {
  c.querySelector<HTMLButtonElement>("#s")!.click();
}
function clickO(c: Element) {
  c.querySelector<HTMLButtonElement>("#o")!.click();
}
export const config: TestConfig = { steps: [{}, clickS, clickO] };
