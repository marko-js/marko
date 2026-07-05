import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// Stable branch sets over render-once values (a `<for>` of a module
// constant, an `<if>` of a constant test -- the ecommerce filter-chip
// shape) must still dispatch their body merges on navigation: the branches
// never change, but the request-derived content inside them does (`pick`
// moves the active class), and mixed state/global statements re-invoke
// after the globals assign (`count && tag` computes "hot" against live
// state). Client state (`count`) survives throughout.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        params: { pick: "home", tag: "" },
        serializedGlobals: { params: true },
      },
    },
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { pick: "toys", tag: "featured" },
        serializedGlobals: { params: true },
      },
    }),
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { pick: "toys", tag: "" },
        serializedGlobals: { params: true },
      },
    }),
  ],
};
