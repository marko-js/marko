import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

function bumpSecond(document: Document) {
  document.querySelectorAll<HTMLButtonElement>(".bump")[1].click();
}

// Both providers return the same content section, so the dynamic tag sees one
// renderer id for two instances; only the owner distinguishes them.
export const config: TestConfig = {
  steps: [{}, toggle, bumpSecond, toggle],
};
