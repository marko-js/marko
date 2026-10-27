import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document, index = 0) {
  document.querySelectorAll("button")[index].click();
}

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => click(document, 0),
    wait,
    (document: Document) => click(document, 1),
    wait,
  ],
};
