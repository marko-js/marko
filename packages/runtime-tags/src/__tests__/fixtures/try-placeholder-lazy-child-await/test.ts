import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".child")!.click();

// Nothing in the page itself goes pending client side, but the lazy child's
// await shows the page's placeholder once its chunk arrives.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click, wait],
};
