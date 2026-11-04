import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// A template loading itself lazily renders: its server wrapper reads the template
// only as it renders, once the template's module has evaluated.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, wait, click, flushRAF, click, flushRAF],
};

function click(document: Document) {
  for (const b of document.querySelectorAll<HTMLButtonElement>("button"))
    b.click();
}
