import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same for a control's value (an `<input>` and a `<textarea>`). The value
// attribute a patch leaves differs from a fresh render as for any input, so
// the page is checked against itself.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
