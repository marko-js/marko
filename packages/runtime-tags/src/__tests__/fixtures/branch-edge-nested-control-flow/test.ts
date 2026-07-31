import type { TestConfig } from "../../main.test";

// The `<if>` body starts with a `<for>` and ends with a `<show>`, so the
// branch's range edges are owned by nested control flow rather than markers of
// its own. Emptying, refilling, reordering and hiding each of those must keep
// the outer branch's range covering exactly its content.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.rotate"),
    press("button.show"),
    press("button.drop"),
    press("button.clear"),
    press("button.show"),
    press("button.outer"),
    press("button.outer"),
  ],
};
