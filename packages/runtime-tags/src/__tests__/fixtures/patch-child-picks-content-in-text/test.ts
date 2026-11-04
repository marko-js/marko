import type { TestConfig } from "../../main.test";

const click = (d: Document) => d.querySelector("button")!.click();

// A child picks between the contents its caller passes by a server value, in
// a const it renders beside text: switching, the patch creates the picked content.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, x: "x", title: "t" },
    { on: false, x: "x", title: "t" },
    click,
    { on: true, x: "y", title: "u" },
    click,
  ],
};
