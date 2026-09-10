import type { TestConfig } from "../../main.test";

// A bound PascalCase tag whose direct child is an `<if>` still composes
// statically: the child's parent lookup must see the rewritten name.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("button")!.click();
    },
  ],
};
