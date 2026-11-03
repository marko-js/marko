import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
// As patch-created-branch-caller-join, the panel created by a patch: its
// members' fills carry them, so the created panel takes no seed.
export const config: TestConfig = {
  patches: true,
  steps: [
    { outer: false, show: true, x: "a" },
    { outer: true, show: true, x: "b" },
    click,
    { outer: true, show: true, x: "c" },
    { outer: false, show: true, x: "c" },
    click,
    { outer: true, show: true, x: "d" },
  ],
};
