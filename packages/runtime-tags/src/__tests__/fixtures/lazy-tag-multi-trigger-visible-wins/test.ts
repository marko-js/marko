import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, flushVisible, wait, click, wait],
  equivalent: false,
};

function click(document: Document) {
  (document.querySelector("#inc") as HTMLElement).click();
}
