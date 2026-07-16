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

// Promoted $global reads (holes, a conditional, a state intersection) gain
// resume markers and spine serialization while values read the live global.
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
    // Patch renders must replay a conditional whose test reads $global:
    // sale toggles off and back on while the client-owned count survives.
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
    // Changing a global read by a state-mixing expression: the update entry
    // must re-invoke the statement against live state after globals assign.
    navigate({
      $global: {
        persisted: true,
        title: "Persisted Page",
        params: { id: 7, tag: "", sale: 35 },
        serializedGlobals: { title: true, params: true },
      },
    }),
  ],
};
