import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document, index = 0) {
  document.querySelectorAll("button")[index].click();
}

export const config: TestConfig = {
  // The debug-only warning is the point.
  skip_parity: true,
  steps: [
    {},
    async (document: Document) => {
      click(document, 0);
      await wait();
    },
    async (document: Document) => {
      click(document, 1);
      await wait();
    },
  ],
};
