import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Only a child await fed changing input goes pending client side; one within
// the child's own placeholder never reaches the outer try.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait],
};
