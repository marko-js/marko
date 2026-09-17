import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// A guessed draft the patch confirms: the fill lands on the source, the draft
// already shows it, and the flush does no DOM work for it. A fill the guess
// missed, or one with no guess, shows through the draft like any derivation.
export const config: TestConfig = {
  patches: true,
  steps: [
    { page: 1 },
    click,
    navigate({ page: 2 }),
    navigate({ page: 5 }),
    click,
    navigate({ page: 3 }),
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
