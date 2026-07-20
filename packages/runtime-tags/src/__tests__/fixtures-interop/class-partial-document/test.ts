import type { TestConfig } from "../../main.test";

// A Class API page entry with no `<body>` has no tag to inject
// `<init-components>`, so it must serialize its own payload to resume the button.
function increment(document: Document) {
  (document.querySelector("button") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, increment, increment],
};
