import type { TestConfig } from "../../main.test";

// The `<if>` body is a single `<show>`, so both of the branch's range edges are
// owned by it, and the `<for>` inside changes that range while it sits detached.
// Hiding, refilling while hidden, and destroying the owner must all agree on
// where the branch begins and ends.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.show"),
    press("button.items"),
    press("button.show"),
    press("button.items"),
    press("button.outer"),
    press("button.outer"),
    press("button.show"),
  ],
};
