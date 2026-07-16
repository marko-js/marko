import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// A reason-less dynamic tag renders once and needs no persisted merge.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        caption: "Home",
        serializedGlobals: { caption: true },
      },
    },
    clickButton,
    navigate({
      $global: {
        persisted: true,
        caption: "Detail",
        serializedGlobals: { caption: true },
      },
    }),
    clickButton,
  ],
};
