import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A recursive `<define>` branches on a param only its own calls pass, beside a
// call its caller's client state selects: no caller group hands that branch over.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, toggle, toggle, { v: "c" }],
};
