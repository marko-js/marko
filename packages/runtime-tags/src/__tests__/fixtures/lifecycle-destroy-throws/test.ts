import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, throws(toggle)],
};
