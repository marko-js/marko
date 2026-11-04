import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A direct and a dynamic call of one `<define>` both pass the param selecting
// its structure: the input's fill ships by its own registration, once.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }, click],
};
