import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container
    .querySelector<HTMLButtonElement>(
      "section + button, h1 ~ button:not(.buy)",
    )!
    .click();

// Inside the $global-driven branch: its wiring must survive both initial
// hydration and fresh creation through an update.
const clickBuy = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.buy")!.click();

// $global reads promoted under the persisted option: text/attr holes,
// a $global-driven conditional, and a state ∩ $global intersection all get
// resume markers and spine serialization when `$global.persisted` is set,
// while values still read the live (serialized) global object.
export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        title: "Persisted Page",
        params: { id: 42, tag: "featured", sale: 20 },
        serializedGlobals: { title: true, params: true },
      },
    },
    clickButton,
    clickBuy,
    clickButton,
    // Update renders must replay a conditional whose test reads $global
    // directly: sale toggles off (branch removed) and back on with a new
    // value (branch fresh-created), with the client-owned count preserved.
    navigate({
      $global: {
        persisted: true,
        title: "Persisted Page",
        params: { id: 42, tag: "featured", sale: 0 },
        serializedGlobals: { title: true, params: true },
      },
    }),
    navigate({
      $global: {
        persisted: true,
        title: "Persisted Page",
        params: { id: 7, tag: "featured", sale: 35 },
        serializedGlobals: { title: true, params: true },
      },
    }),
    clickButton,
    clickBuy,
  ],
};
