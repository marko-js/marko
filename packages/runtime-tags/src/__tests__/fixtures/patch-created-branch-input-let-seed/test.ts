import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>(".b")!.click();

// A branch a patch creates seeds a `<let>` from an input that nothing assigns,
// joined with an assigned `<let>`: the new branch shows their sum.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "x" },
    { show: true, a: "x" },
    click,
    { show: true, a: "y" },
  ],
};
