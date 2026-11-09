import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ short: false }, shrink, grow],
};

function shrink(document: Document) {
  document.querySelector<HTMLButtonElement>("#shrink")!.click();
}

function grow(document: Document) {
  document.querySelector<HTMLButtonElement>("#grow")!.click();
}
