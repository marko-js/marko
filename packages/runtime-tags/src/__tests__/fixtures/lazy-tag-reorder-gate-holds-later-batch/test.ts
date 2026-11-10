import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The held batch's fill waits for its <try>'s await, after the module loaded, so
// its gate must hold the streamed batch, which reads the held one's object.
export const config: TestConfig = {
  steps: [{}, wait, flush, wait, flush, wait, clickHeld, clickStreamed],
  equivalent: false,
};

function clickHeld(document: Document) {
  document.querySelector<HTMLButtonElement>(".held")!.click();
}

function clickStreamed(document: Document) {
  document.querySelector<HTMLButtonElement>(".streamed")!.click();
}
