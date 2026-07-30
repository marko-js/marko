import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, wait, click, wait, click, wait, click, wait, click, wait],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
