import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

// A Tags template passes its lazily loaded template to a Class template, whose
// dynamic tag renders the load wrapper (its `_`), so the template's assets load
// before it resumes.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flushRAF, wait, click, flushRAF],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
