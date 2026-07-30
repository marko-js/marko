import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";
function clickA(document: Document) {
  document.querySelector<HTMLButtonElement>("#a")!.click();
}
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, clickA, wait],
};
