import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `<option>` spread patches as the attribute set like any element's, its
// select's value re-syncing the selection as a render does.
export const config: TestConfig = {
  patches: true,
  compare_defaults: true,
  steps: [
    { a: { value: "a" }, c: { disabled: false }, label: "A", pick: "a" },
    {
      a: { value: "a", "data-x": 1 },
      c: { disabled: true },
      label: "A1",
      pick: "b",
    },
    click,
    { a: { value: "c2" }, c: { "data-y": 2 }, label: "A2", pick: "c2" },
    click,
  ],
};
