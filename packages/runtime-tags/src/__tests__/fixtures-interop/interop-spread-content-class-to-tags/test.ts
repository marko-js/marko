import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

function clickThing(document: Document) {
  (document.querySelector(".thing") as HTMLButtonElement | null)?.click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickThing, clickClass],
};
