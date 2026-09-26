import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// An effect queued by the update that starts a client `<await>` in a `<try>`
// still streaming from the server runs once that `<await>` completes the try.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, show, wait, flush, wait],
};
