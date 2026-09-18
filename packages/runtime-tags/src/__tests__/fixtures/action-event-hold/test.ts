import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An act started in an event handler stays open for whatever a later
// listener in the same dispatch hands the event: the guess holds until that
// promise settles, and the source it produced confirms it with no DOM work.
// An event nobody takes over releases the act a task later.
export const config: TestConfig = {
  steps: [{}, clickClaimed, wait, clickUnclaimed, wait],
};

function clickClaimed(document: Document) {
  document.querySelector<HTMLButtonElement>("#claimed")!.click();
}

function clickUnclaimed(document: Document) {
  document.querySelector<HTMLButtonElement>("#unclaimed")!.click();
}
