import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, clickA, clickB, wait],
  equivalent: false,
};

function clickA(document: Document) {
  document.querySelector<HTMLButtonElement>("#a")!.click();
}

function clickB(document: Document) {
  document.querySelector<HTMLButtonElement>("#b")!.click();
}
