import type { TestConfig } from "../../main.test";
import { after, wait } from "../../utils/resolve";

// An act body's awaits compile to transaction re-entry, so a guess after an
// await still holds for the act. A body reading `arguments` keeps native
// awaits: only a guess before its first await joins the act, and one after
// it is a plain guess the settle's re-derivation replaces.
export const config: TestConfig = {
  steps: [{}, clickLate, after(1), wait, clickNative, after(3), wait],
};

function clickLate(document: Document) {
  document.querySelector<HTMLButtonElement>("#late")!.click();
}

function clickNative(document: Document) {
  document.querySelector<HTMLButtonElement>("#native")!.click();
}
