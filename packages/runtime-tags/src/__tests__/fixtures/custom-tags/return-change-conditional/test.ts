import type { TestConfig } from "../../../main.test";
import { throws } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

function clickAssign(document: Document) {
  document.querySelector<HTMLButtonElement>("#assign")!.click();
}

export const config: TestConfig = {
  skip_optimize: true,
  steps: [
    {},
    clickAssign,
    click("#toggle"),
    throws((document: Document) => clickAssign(document)),
  ],
};
