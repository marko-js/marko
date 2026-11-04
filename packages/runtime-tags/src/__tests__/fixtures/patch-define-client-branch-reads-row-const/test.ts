import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` branch its call hands the client reads a value of the loop
// row around it: a patch writes that value for the client to render it again.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", items: ["x"] },
    { v: "b", items: ["x", "y"] },
    toggle,
    toggle,
    { v: "c", items: ["y"] },
    toggle,
  ],
};
