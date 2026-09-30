import type { TestConfig } from "../../../main.test";
import { flushRAF, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// A body effect queued while `@placeholder` shows waits for the body to
// return, even from a flush that neither starts nor settles an await.
export const config: TestConfig = {
  steps: [{}, click("#load"), flushRAF, click("#inc"), wait],
};
