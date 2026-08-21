import type { TestConfig } from "../../main.test";

// An inert Class API page must stay out of the client bundle, and so must the
// inert Tags API sibling; only the interactive Tags root is linked.
function bump(document: Document) {
  (document.querySelector("#counter") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
