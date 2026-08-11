import type { TestConfig } from "../../main.test";

function post(document: Document) {
  document.querySelector<HTMLButtonElement>("#post")!.click();
}

function pre(document: Document) {
  document.querySelector<HTMLButtonElement>("#pre")!.click();
}

function dec(document: Document) {
  document.querySelector<HTMLButtonElement>("#dec")!.click();
}

export const config: TestConfig = {
  steps: [{}, post, pre, dec],
};
