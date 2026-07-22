import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const clickAdd = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.add")!.click();

// A cross-route hop swaps in content the live render never executed: fresh
// branches must fill from the patch and the awaited section arrives later.
export const config: TestConfig = {
  persisted: true,
  // The computes genuinely cannot run in the browser, so a plain client
  // render of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        view: "cart",
        tag: "all",
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "item",
        productId: 2,
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    }),
    clickAdd,
    // Back to the cart cross-route: the fresh subtree's `<let>`s must seed
    // from the patch (a client-state compute over server-only data).
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        view: "cart",
        tag: "dev",
        data: { cart: [2] },
        serializedGlobals: { data: true },
      },
    }),
    clickCount,
  ],
};
