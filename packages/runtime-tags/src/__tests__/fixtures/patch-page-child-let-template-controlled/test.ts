import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A controllable `<let>` follows its `value=`: a patch writes the template it
// follows, and the client's assignment goes to the handler, which keeps it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { big: false, label: "a" },
    { big: false, label: "b" },
    click,
    { big: true, label: "c" },
    { big: false, label: "d" },
  ],
};
