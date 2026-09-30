import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Removing the branch that holds a pending `<await>` leaves the `<try>`
// standing: its placeholder has to dismiss, since nothing will ever render
// that await.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("button"), wait],
};
