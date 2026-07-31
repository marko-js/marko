import type { TestConfig } from "../../main.test";

// A resumed branch that begins with a `<show>` has no marker of its own at that
// edge, so hiding the show moves the node the branch starts at. Destroying the
// branch afterwards must still find its range.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.show"),
    press("button.outer"),
    press("button.outer"),
  ],
};
