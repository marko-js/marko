import type { TestConfig } from "../../main.test";

function clickEager(document: Document) {
  document.querySelectorAll<HTMLButtonElement>(".count")[1].click();
}

// The Tags counter is reached lazily (through the Tags wrapper) before the
// Class page renders it eagerly, so it must still become an eager root.
export const config: TestConfig = {
  steps: [{}, clickEager],
  skip_csr: true,
};
