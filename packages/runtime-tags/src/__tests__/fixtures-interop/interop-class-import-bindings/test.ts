import type { TestConfig } from "../../main.test";

function clickClass(document: Document) {
  (document.querySelector("#class") as HTMLButtonElement).click();
}

function clickNamed(document: Document) {
  (document.querySelector("#named-tags") as HTMLButtonElement).click();
}

function clickDirect(document: Document) {
  (document.querySelector("#direct") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickNamed, clickClass, clickDirect, clickNamed, clickClass],
};
