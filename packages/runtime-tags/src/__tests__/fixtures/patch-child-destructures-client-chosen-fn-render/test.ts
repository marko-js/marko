import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child rendering the client-chosen function it destructures re-renders by the
// child's init, which its call sends where it passed a client choice.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a" },
    click,
    { title: "b" },
    click,
    { title: "c" },
    { title: "c" },
  ],
};
