import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The click creates each row's `<await>` after resume.
export const config: TestConfig = {
  steps: [{}, click, wait],
};
