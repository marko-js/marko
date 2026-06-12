import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scope-bound registered value serialized at a root position — here as
// the resolution value of a serialized promise — must still invoke the
// registry factory with its scope (`_._.a0(_(1))`), written inline since
// there is no parent to defer an assignment onto. The resumed page's
// promise then resolves to the bound `getCount` and renders "1", matching
// the client-side render.
export const config: TestConfig = {
  steps: [{}, wait, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
