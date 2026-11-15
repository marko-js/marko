import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function add(document: Document) {
  document.querySelector<HTMLButtonElement>(".add")!.click();
}

// The second toggle creates each row's branch again after resume, before the
// loop itself ever updates.
export const config: TestConfig = {
  steps: [{}, toggle, toggle, add],
};
