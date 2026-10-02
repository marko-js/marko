import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(name: string) {
  return (document: Document) =>
    document.querySelector<HTMLButtonElement>(`.${name}`)?.click();
}

// A placeholder and the lazy tag in it serialize the same value in one pass:
// the main stream's data serializes first, so the lazy tag's reads it back.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("placeholder"), click("child"), flush, wait],
};
