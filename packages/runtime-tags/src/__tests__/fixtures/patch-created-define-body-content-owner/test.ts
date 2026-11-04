import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  for (const button of container.querySelectorAll("button")) button.click();
};

// A created `<define>` body reading its owner renders content its calling
// branch defines, an owner the body's `_` (the root) skips: hops reach it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
