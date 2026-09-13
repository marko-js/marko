import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// `<lifecycle>`, `<id>` and `<log>` compile as ordinary effects and values:
// a patched attribute re-runs the lifecycle's update.
export const config: TestConfig = {
  persisted: true,
  // Mount/update effects leave counts a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { value: "a", title: "t" },
    { value: "b", title: "t" },
    click,
    { value: "b", title: "u" },
  ],
};
