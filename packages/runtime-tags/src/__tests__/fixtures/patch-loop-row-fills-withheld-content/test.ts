import type { TestConfig } from "../../main.test";

const panels = (s: string) => [0, 1].map((id) => ({ id, text: `T${id}${s}` }));
const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A loop row passes content reading its value to a child that renders it in
// state-driven structure, which the client re-renders: the row fills the value.
export const config: TestConfig = {
  patches: true,
  steps: [{ panels: panels("a") }, { panels: panels("b") }, click, click],
};
