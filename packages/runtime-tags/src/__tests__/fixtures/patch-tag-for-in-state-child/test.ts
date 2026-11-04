import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A <for … in> body's conditional passes a child client state beside a loop value
// and an input: its groups crashed at f961a29fd21.
export const config: TestConfig = {
  patches: true,
  steps: [
    { obj: { p: 1, q: 2 }, sel: "p", b: "x" },
    click,
    { obj: { p: 3, q: 4 }, sel: "q", b: "y" },
    click,
  ],
};
