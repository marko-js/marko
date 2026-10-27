import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const input = document.querySelector("input")!;
  input.value = "typed";
  input.dispatchEvent(new document.defaultView!.Event("input"));
};

// The same control in a child template: it links no control patcher, as no
// patch writes it once reasons settle.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, type],
};
