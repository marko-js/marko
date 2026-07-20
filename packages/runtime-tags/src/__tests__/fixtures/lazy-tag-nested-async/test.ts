import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    { value: 1 },
    wait,
    flush,
    wait,
    flush,
    wait,
    clickChild,
    wait,
    clickGrand,
    wait,
  ],
  equivalent: false,
};

function clickChild(document: Document) {
  document.querySelector<HTMLButtonElement>("#child")!.click();
}

function clickGrand(document: Document) {
  document.querySelector<HTMLButtonElement>("#grand")!.click();
}
