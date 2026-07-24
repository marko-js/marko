import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// The state-derived `<await>` enables update holding. The `<if>` still builds
// its new branch during the flush; only attaching it is held until the flush
// drains, so each toggle lands the branch with the current value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, click("inc"), wait, click("inc"), wait],
};
