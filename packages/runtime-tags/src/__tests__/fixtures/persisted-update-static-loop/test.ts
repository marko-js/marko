import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// Stable branch sets over render-once values must still dispatch their body
// merges: request-derived content inside them refreshes on navigation.
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
