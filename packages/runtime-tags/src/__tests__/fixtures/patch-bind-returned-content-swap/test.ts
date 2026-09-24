import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLElement>(selector)!.click();

// The dynamic tag's renderer is content bound to a sibling child's scope
// (off the tag's owner chain), switching from `a` to `b`.
export const config: TestConfig = {
  patches: true,
  steps: () => [{ first: true }, { first: false }, click("em")],
};
