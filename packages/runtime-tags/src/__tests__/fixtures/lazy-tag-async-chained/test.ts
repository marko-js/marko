import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, flush, wait, clickSync, clickAsync, wait],
  equivalent: false,
};

function clickSync(document: Document) {
  document.querySelector<HTMLButtonElement>("#sync")!.click();
}

function clickAsync(document: Document) {
  document.querySelector<HTMLButtonElement>("#async")!.click();
}
