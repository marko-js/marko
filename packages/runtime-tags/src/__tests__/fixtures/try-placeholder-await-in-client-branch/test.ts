import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A static await still goes pending client side when its branch is created
// there, so the resumed try keeps its placeholder.
export const config: TestConfig = {
  steps: [{}, click, wait],
};
