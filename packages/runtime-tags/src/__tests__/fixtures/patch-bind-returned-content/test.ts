import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLElement>(selector)!.click();

// A child returns content bound to its own scope, below the dynamic tag that
// renders it: the renderer rides a bind reference, not a path.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "one" },
    navigate(() => ({ label: "two" })),
    click("button"),
    click("em"),
  ],
};
