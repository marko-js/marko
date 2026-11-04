import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
// patch-fill-multicap with two patches while the branch is open: each one
// re-creates the function its hole calls from the captures it fills.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "1", b: "x" },
    click,
    { a: "2", b: "y" },
    { a: "3", b: "z" },
    { a: "3", b: "z" },
  ],
};
