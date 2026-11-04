import type { TestConfig } from "../../main.test";

const swap = (document: Document) => {
  document.querySelector("button")!.click();
};

// A body whose tag a caller's state names: the resumed page renders it, so
// what it reads fills.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "a" }, { note: "b" }, swap, { note: "c" }, swap],
};
