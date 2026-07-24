import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector<HTMLInputElement>("#field")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

// The state-derived `<await>` enables update holding, but the controlled input
// must stay responsive: each keystroke's value is kept even while the awaited
// value it drives is still resolving.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, wait, type("h"), type("he"), type("hel"), wait],
};
