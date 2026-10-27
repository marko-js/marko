import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A child a `@catch` renders reads its error's message, the page's state and
// a param: patches throwing another error or rendering the body keep the
// first message, while the count and label update.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { fail: false, msg: "a", label: "L1" },
    { fail: true, msg: "b", label: "L2" },
    click,
    { fail: true, msg: "c", label: "L3" },
    click,
    { fail: false, msg: "d", label: "L4" },
  ],
};
