import type { TestConfig } from "../../main";
import { wait } from "../../utils/resolve";

const toggle = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// Removing the branch that holds a pending `<await>` leaves the `<try>`
// standing: its placeholder has to dismiss, since nothing will ever render
// that await.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, toggle, wait],
};
