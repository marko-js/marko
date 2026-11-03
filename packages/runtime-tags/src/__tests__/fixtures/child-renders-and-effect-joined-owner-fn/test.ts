import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-child-renders-and-effect-joined-owner-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a" },
    { title: "b" },
    click,
    { title: "c" },
    click,
    { title: "d" },
  ],
};
