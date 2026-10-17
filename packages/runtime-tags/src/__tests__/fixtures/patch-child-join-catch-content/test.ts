import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A written join in content a child renders in its `@catch`, which client code
// renders any time: its members ship under their unpatched keys wherever filled.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { a: "x", b: "p", fail: false },
    { a: "y", b: "q", fail: true },
    click,
    { a: "z", b: "r", fail: true },
    { a: "w", b: "s", fail: false },
  ],
};
