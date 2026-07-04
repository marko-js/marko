import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();
const clickAdd = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.add")!.click();

// The run cross-route shape, server-first edition: the layout's
// `<${input.content}/>` hop swaps in a page content the live render has
// never executed, whose data is request-derived through server-only
// functions. The fresh branch's holes (text, attrs, child input) must fill
// from the patch -- its closures cannot compute them (`getProduct` does not
// exist client-side) -- and its awaited section arrives as a later frame.
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
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        view: "item",
        productId: 2,
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    }),
    clickAdd,
    navigate({
      $global: {
        persisted: true,
        view: "cart",
        data: { cart: [] },
        serializedGlobals: { data: true },
      },
    }),
    clickCount,
  ],
};
