import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

const load = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#load")!.click();
const inc = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#inc")!.click();

// A body effect queued while `@placeholder` shows waits for the body to
// return, even from a flush that neither starts nor settles an await.
export const config: TestConfig = {
  steps: [{}, load, flushRAF, inc, wait],
};
