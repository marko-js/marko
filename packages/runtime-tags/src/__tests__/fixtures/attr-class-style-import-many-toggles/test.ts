import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Past the toggles a class table indexes, the server checks only the class it writes, so
// a repeat in a combination it never renders goes unseen; the client does not check.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};
