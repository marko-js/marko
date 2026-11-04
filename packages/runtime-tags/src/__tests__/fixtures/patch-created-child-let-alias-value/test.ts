import type { TestConfig } from "../../main.test";

const click = (index: number) => (document: Document) =>
  document.querySelectorAll("button")[index].click();

// A created child's `<let>` passes its value on through a `<const>` alias of it:
// the patch fills the `<let>`, and the grandchild's `<let>` starts from it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click(0),
    click(1),
    { show: true, label: "c" },
  ],
};
