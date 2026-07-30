import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, wait, click, wait],
};
