import type { TestConfig } from "../../main";
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

function click(document: Document) {
  document.querySelector("button")!.click();
}
