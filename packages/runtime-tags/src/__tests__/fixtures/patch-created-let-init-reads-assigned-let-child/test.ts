import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A child a patch creates takes a `<let>` whose init reads one the patch fills:
// the client runs that init, so it renders the child's param and its branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, a: "a" },
    { show: true, a: "b" },
    click,
    { show: true, a: "c" },
  ],
};
