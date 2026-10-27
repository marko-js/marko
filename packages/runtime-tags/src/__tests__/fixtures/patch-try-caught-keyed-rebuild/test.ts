import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A caught `<try>` in a keyed `<for>` row: a patch keeping the key keeps its
// `@catch`, and one changing the key rebuilds the row's try from its shell
// and seeds, rendering its body or, when that throws, its `@catch`.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { pages: [{ key: 1, title: "a" }] },
    { pages: [{ key: 1, title: "b", fail: true }] },
    { pages: [{ key: 1, title: "c" }] },
    { pages: [{ key: 2, title: "d" }] },
    click,
    { pages: [{ key: 3, title: "e", fail: true }] },
  ],
};
