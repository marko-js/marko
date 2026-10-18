import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// A body handed to a renderer whose params run renders its owner's values,
// in the patch creating its tag and once the renderer's state renders it
// again, after a flush created it from its shell in a native tag.
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
