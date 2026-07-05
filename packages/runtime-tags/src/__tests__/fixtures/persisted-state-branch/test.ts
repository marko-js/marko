import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (sel: string) => (container: Element) =>
  container.querySelector<HTMLButtonElement>(sel)!.click();
const clickToggle = click("button.toggle");
const clickCount = click("button.count");
const clickAdd = click("button.add");

// Purely state-driven `<if>`/`<for>` branches under the persisted option:
// they never participate in update payloads (the server never pairs into
// client-state-driven structure), so their owners are linked from resume
// markers instead of serialized -- this fixture proves the marker-linked
// owner chain works through resume, matched-scope navigations, and
// client-side destroy/reconstruct/reconcile.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickCount,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickCount,
    clickToggle,
    clickToggle,
    clickCount,
    clickAdd,
  ],
};
