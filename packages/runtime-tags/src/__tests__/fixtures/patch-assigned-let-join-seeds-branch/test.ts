import type { TestConfig } from "../../main.test";

// The `<let>` selecting the branch starts from one the client assigns in its
// scope: it keeps that first value, so the patch writes the branch it selects.
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
