import type { TestConfig } from "../../main.test";
import { after, wait } from "../../utils/resolve";

function click(document: Document, index = 0) {
  document.querySelectorAll("button")[index].click();
}

export const config: TestConfig = {
  steps: [{}, (document: Document) => click(document), after(1), wait],
};
