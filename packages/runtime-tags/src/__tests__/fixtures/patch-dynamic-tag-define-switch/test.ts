import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// A dynamic tag switching between `<define>`s: a patch writing the tag itself
// refreshes `label`'s content without re-running the join over a stale `which`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, label: "a" },
    inc,
    { which: true, label: "b" },
    { which: false, label: "c" },
    { which: true, label: "d" },
  ],
};
