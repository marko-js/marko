import type { TestConfig } from "../../main.test";

// Spreading attribute-tag attributes (`...input.foot`) drops the object, and
// attribute-tag content (`...input.head` body) resumes via the host tag's
// ConditionalRenderer on the light `_content` path. The stateful content must
// still resume and update.
function click(container: Element) {
  container.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
