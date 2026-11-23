import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, clickGo, wait],
  equivalent: false,
};

function clickGo(document: Document) {
  document.querySelector<HTMLButtonElement>("#go")!.click();
}
