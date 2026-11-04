import type { TestConfig } from "../../main.test";

// A `<const>` naming a template, rendered in a branch the client shows.
const show = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#show")!.click();
const open = (document: Document) =>
  document.querySelector<HTMLButtonElement>(".toggle")!.click();

export const config: TestConfig = {
  steps: [{}, show, open],
};
