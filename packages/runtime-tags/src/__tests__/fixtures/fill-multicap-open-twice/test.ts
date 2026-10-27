import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
// patch-fill-multicap-open-twice without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "1", b: "x" },
    click,
    { a: "2", b: "y" },
    { a: "3", b: "z" },
    { a: "3", b: "z" },
  ],
};
