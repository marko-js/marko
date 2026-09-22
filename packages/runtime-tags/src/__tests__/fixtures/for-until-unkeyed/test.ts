import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, more, none, more],
};

function more(document: Document) {
  document.querySelector<HTMLButtonElement>(".more")!.click();
}

function none(document: Document) {
  document.querySelector<HTMLButtonElement>(".none")!.click();
}
