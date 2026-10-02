import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)?.click();
}

// A lazy tag before a pending `<try>` and the `@placeholder` it renders share a
// value, which the main stream serializes first in the pass that writes both.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("placeholder"), click("child"), flush, wait],
};
