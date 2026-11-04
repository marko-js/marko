import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const input = document.querySelector("input")!;
  input.value = "typed";
  input.dispatchEvent(new document.defaultView!.Event("input"));
};

// A control with only a change handler, which reads state: its group is
// state-sourced, so a patch writes no control entry and the client keeps it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, type],
};
