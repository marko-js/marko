import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickTake = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.take")!.click();

// `$global.stock` is request-derived; the script mirrors it into client
// state. Optimistic local writes apply instantly, and every persisted
// navigation's fresh global re-runs the script (a navigation-retriggered
// effect) so the mirror reconciles to the server value.
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
