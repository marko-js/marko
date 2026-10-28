import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// Client code switches the content its consumer renders: the kept content's
// site entry leaves that branch alone.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ label: "a" }, { label: "b" }, click, { label: "c" }],
};
