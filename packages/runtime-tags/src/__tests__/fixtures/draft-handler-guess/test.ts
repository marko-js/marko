import type { TestConfig } from "../../main.test";

// A guess from a plain event handler (no act) holds only until the source
// next derives.
export const config: TestConfig = {
  steps: [{}, clickGuess, clickSet],
};

function clickGuess(document: Document) {
  document.querySelector<HTMLButtonElement>("#guess")!.click();
}

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("#set")!.click();
}
