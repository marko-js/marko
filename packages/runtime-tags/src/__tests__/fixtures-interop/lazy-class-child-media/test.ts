import type { TestConfig } from "../../main.test";
import { flushMedia, wait } from "../../utils/resolve";

function click(document: Document) {
  (document.querySelector("#inc") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{ value: 1 }, flushMedia, wait, click],
  equivalent: false,
};
