import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-child-effect-calls-joined-client-chosen-fn-captures without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { title: "a", other: "x" },
    { title: "b", other: "x" },
    click,
    { title: "b", other: "y" },
    { title: "c", other: "y" },
    click,
    { title: "d", other: "z" },
  ],
};
