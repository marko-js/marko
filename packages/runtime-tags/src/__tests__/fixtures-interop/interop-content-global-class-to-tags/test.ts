import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

// A client-only render has no resumed runtime id on the Class global it hands down.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickClass],
};
