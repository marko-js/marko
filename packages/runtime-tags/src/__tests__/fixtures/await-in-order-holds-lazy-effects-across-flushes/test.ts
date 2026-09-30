import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(id: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${id}`)?.click();
}

// Lazy content streamed before, within, and reordered in while in-order content
// is pending holds its effects across flushes until the last await completes.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    flush,
    click("a"),
    flush,
    flush,
    flush,
    wait,
    click("a"),
    click("d"),
  ],
};
