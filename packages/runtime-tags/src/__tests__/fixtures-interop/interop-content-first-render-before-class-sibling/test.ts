import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

function clickThing(document: Document) {
  (document.querySelector(".thing") as HTMLButtonElement).click();
}

// The content first renders while its Class parent rerenders, before a stateful sibling.
export const config: TestConfig = {
  steps: [{}, clickThing, clickClass, clickThing],
};
