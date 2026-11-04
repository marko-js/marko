import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector<HTMLButtonElement>("button.n")!.click();
};

// A written join in content a child renders in its `@catch`, which client code
// renders any time: its members ship under their unpatched keys wherever filled;
// a patch rendering the body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { a: "x", b: "p", fail: false },
    { a: "y", b: "q", fail: true },
    click,
    { a: "z", b: "r", fail: true },
    { a: "w", b: "s", fail: false },
  ],
};
