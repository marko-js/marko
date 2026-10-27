import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// A recursive template keeps its body under each level's state: a later
// patch's param reaches each level's kept body by its fill.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, toggle, toggle],
};
