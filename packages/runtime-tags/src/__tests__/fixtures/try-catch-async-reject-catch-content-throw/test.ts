import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button:not(.toggle)")!.click();

// The inner try's renderers streamed before its body rejected; its rendered
// catch is no longer a try, so an error thrown in it reaches the outer try.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click],
};
