import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// The state-derived `<await>` enables update holding. The `<for>` still builds
// its new branches during the flush; only inserting/removing them in the live
// list is held until the flush drains.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click("inc"), wait, click("inc"), wait],
};
