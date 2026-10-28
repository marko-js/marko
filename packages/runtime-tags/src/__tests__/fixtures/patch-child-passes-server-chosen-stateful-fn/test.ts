import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A choice the server makes, between functions one of which captures client state,
// passed on through a middle template, goes as a marked bind (not a client choice).
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", upper: true },
    click,
    { title: "b", upper: true },
    click,
    { title: "b", upper: false },
    { title: "c", upper: false },
  ],
};
