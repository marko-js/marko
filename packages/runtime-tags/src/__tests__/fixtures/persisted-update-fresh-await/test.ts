import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// A freshly created branch containing an `<await>` over server-only compute:
// the promise is skipped client-side and the body's own frame fills it.
export const config: TestConfig = {
  persisted: true,
  // The computes genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { productId: 0, $global: { persisted: true } },
    clickCount,
    navigate({ productId: 7, $global: { persisted: true } }),
    clickCount,
    navigate({ productId: 0, $global: { persisted: true } }),
    navigate({ productId: 3, $global: { persisted: true } }),
  ],
};
