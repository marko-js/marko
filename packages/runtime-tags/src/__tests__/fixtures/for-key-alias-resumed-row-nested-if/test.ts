import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// The second toggle creates each row's branch again after resume.
export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
