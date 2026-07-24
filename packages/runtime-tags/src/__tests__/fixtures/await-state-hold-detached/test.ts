import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// The state-derived `<await>` enables update holding. While a `<show>` body is
// hidden its branch is detached, so its `${n}` update is applied immediately
// rather than held; toggling it back in must reveal the up-to-date value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click("inc"), wait, click("toggle"), click("inc"), wait],
};
