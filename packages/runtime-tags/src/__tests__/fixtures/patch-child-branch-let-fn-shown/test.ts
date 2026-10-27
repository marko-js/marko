import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// A page function a child holds in a `<let>` inside its own branch, shown at
// page render: the child's branch resumes it, and a click replaces it.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true, label: "b" }, click],
};
