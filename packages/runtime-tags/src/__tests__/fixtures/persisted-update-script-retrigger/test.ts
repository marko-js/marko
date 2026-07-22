import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickTake = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.take")!.click();

// `$global.stock` is request-derived and mirrored into client state: every
// navigation's fresh global re-runs the script so the mirror reconciles.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, stock: 5, serializedGlobals: ["stock"] } },
    clickTake,
    clickTake,
    navigate({
      $global: { persisted: true, stock: 9, serializedGlobals: ["stock"] },
    }),
    clickTake,
    navigate({
      $global: { persisted: true, stock: 2, serializedGlobals: ["stock"] },
    }),
  ],
};
