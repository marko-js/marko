import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function pick(document: Document) {
  document.querySelector<HTMLButtonElement>("#pick")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: [{ text: "a" }, { text: "b" }] }, flush, wait, pick],
};
