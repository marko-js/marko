import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function reading client state is the client's: a patch neither binds it nor
// renders the child's hole that calls it, and client code makes it anew.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", x: 0 },
    click,
    { label: "a", x: 1 },
    { label: "b", x: 1 },
  ],
};
