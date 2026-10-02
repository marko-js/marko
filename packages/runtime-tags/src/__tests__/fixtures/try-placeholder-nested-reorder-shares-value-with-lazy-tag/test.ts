import type { TestConfig } from "../../main.test";
import { after, flush, wait } from "../../utils/resolve";

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)?.click();
}

// The innermost placeholder renders for a reorder queued while the pass streams
// the ones around it; its data still serializes before the lazy tag's.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, after(1), flush, click("placeholder"), click("child"), wait],
};
