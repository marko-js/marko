import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A `<define>` tag variable built from a server attr changes with it: a patch
// renders the attr's read again, as it does the child it passes the attr on to.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, inc, { label: "c" }],
};
