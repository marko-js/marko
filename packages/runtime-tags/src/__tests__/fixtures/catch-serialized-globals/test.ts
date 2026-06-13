import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      $global: {
        settings: { message: "a globals message long enough to dedup" },
        serializedGlobals: ["settings"],
      },
    },
    flush,
    wait,
    click,
  ],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
