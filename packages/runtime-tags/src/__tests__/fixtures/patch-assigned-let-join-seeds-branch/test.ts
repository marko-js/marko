import type { TestConfig } from "../../main.test";

// The `<let>` selecting the branch starts from one the client assigns, which a
// render join with an input reads: the join's reason makes it filled, so stateful.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a", b: 1 },
    { show: true, a: "b", b: 2 },
    click,
    { show: true, a: "c", b: 3 },
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
