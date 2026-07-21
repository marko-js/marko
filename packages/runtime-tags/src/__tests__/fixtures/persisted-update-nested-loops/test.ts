import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.bump")!.click();

// A request-derived value reaching branches through a non-immediate closure
// (a subscription set): every enclosing branch must join patch renders.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        params: { path: "intro", region: "na" },
        serializedGlobals: { params: true },
      },
    },
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { path: "routing", region: "na" },
        serializedGlobals: { params: true },
      },
    }),
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { path: "routing", region: "eu" },
        serializedGlobals: { params: true },
      },
    }),
  ],
};
