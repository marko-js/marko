import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.outer")!.click();
};

// A child with `<lifecycle>` inside client-owned structure is a plain
// client instance: it mounts when revealed and its server param fills.
export const config: TestConfig = {
  persisted: true,
  // Mount counts leave state a fresh render lacks.
  skip_fresh_render: true,
  steps: [{ label: "a" }, toggle, { label: "b" }, toggle, toggle],
};
