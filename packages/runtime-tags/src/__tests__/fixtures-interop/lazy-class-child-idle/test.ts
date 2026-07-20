import type { TestConfig } from "../../main.test";
import { flushIdle, wait } from "../../utils/resolve";

function click(document: Document) {
  (document.querySelector("#inc") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{ value: 1 }, flushIdle, wait, click],
  equivalent: false,
};
