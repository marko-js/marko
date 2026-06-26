import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
function clickA(c: Element) {
  c.querySelector<HTMLButtonElement>("#a")!.click();
}
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, clickA, wait],
};
