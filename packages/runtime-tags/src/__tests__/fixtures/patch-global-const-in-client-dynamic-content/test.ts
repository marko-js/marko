import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const page = (label: string) => ({ $global: { label } });

// Content a tag client state names reads a `<const>` of `$global` alone: a patch
// changing the key reaches it through the `<const>`'s scope set.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), toggle, toggle, page("c")],
};
