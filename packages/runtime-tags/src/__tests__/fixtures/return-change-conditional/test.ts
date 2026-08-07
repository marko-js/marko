import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";

function clickToggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

function clickAssign(document: Document) {
  document.querySelector<HTMLButtonElement>("#assign")!.click();
}

export const config: TestConfig = {
  skip_optimize: true,
  steps: [
    {},
    clickAssign,
    clickToggle,
    throws((document: Document) => clickAssign(document)),
  ],
};
