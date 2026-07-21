import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

// Clicks while the await's first load is still pending (placeholder
// showing) supersede the promise and hold each flush's output — the
// button keeps its displayed text until the newest promise resolves, then
// everything commits atomically with the revealed content. Multiple
// superseding clicks still reveal (the counter is only entered once per
// await). A later click against committed content takes the normal
// transition path.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, clickInc, clickInc, wait, wait, clickInc, wait],
};
