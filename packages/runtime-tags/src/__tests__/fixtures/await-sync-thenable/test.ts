import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click, wait],
};
