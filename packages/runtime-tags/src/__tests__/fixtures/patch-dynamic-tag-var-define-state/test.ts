import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A dynamic tag variable a stateful `<define>` returns: a patch keeps the
// client's value, as for a template.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, label: "a" },
    inc,
    { which: true, label: "b" },
    { which: false, label: "c" },
    { which: true, label: "d" },
    inc,
  ],
};
