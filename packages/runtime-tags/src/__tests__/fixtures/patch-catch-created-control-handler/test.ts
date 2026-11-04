import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const input = document.querySelector("input")!;
  input.value = "typed";
  input.dispatchEvent(new document.defaultView!.Event("input"));
};

// A control in a `@catch` reading its error, reading none of it itself, binds
// its handler in the setup of the catch a patch creates, with no bind entry.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [{ fail: false, label: "a" }, { fail: true, label: "b" }, type],
};
