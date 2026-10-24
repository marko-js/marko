import type { TestConfig } from "../../main.test";

// A `<const>` naming a template renders it as that template, so the rows a click
// adds compose it with nothing read from the `<const>`.
const add = (document: Document) =>
  document.querySelector<HTMLButtonElement>("#add")!.click();
const openLast = (document: Document) =>
  [...document.querySelectorAll<HTMLButtonElement>(".toggle")].at(-1)!.click();

export const config: TestConfig = {
  steps: [{}, add, openLast],
};
