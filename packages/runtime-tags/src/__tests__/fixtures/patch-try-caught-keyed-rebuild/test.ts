import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A caught `<try>` in a keyed `<for>` row: a patch changing the key rebuilds
// the row's try from its shell and seeds, rendering its body or its `@catch`;
// one keeping a caught row's key keeps its `@catch` while it throws, and
// reloads once it renders its body.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [
    { pages: [{ key: 1, title: "a" }] },
    { pages: [{ key: 1, title: "b", fail: true }] },
    { pages: [{ key: 2, title: "d" }] },
    click,
    { pages: [{ key: 3, title: "e", fail: true }] },
    { pages: [{ key: 3, title: "f", fail: true }] },
    { pages: [{ key: 3, title: "g" }] },
  ],
};
