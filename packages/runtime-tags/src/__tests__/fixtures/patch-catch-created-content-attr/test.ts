import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `content=` in a `@catch` reading its error, reading none of it itself:
// the catch a patch creates renders it, and later patches keep it current.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { fail: false, label: "a" },
    { fail: true, label: "b" },
    { fail: true, label: "c" },
    { fail: false, label: "d" },
    click,
    { fail: true, label: "e" },
  ],
};
