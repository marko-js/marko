import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A dynamic tag variable a stateful child returns: a patch keeps the
// child's state, so the variable and the effect reading it keep it too.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, label: "a" },
    inc,
    { which: true, label: "b" },
    inc,
    { which: false, label: "c" },
    { which: true, label: "d" },
  ],
};
