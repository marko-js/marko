import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Arguments are prop-tree props: a constant arg recomputes client-side and
// a server-fed arg delivers as a fill, like named attributes.
export const config: TestConfig = {
  persisted: true,
  steps: [{ tag: "t1" }, toggle, { tag: "t2" }, toggle, { tag: "t3" }],
};
