import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// A body handed to a renderer whose params run renders its owner's values, also
// once the renderer's state renders it again or a native tag held its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    toggle,
    toggle,
    { show: true, label: "c" },
    { show: true, native: true, label: "d" },
    { show: true, label: "e" },
    toggle,
    toggle,
  ],
};
