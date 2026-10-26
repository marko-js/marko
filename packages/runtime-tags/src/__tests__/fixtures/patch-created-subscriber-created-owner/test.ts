import type { TestConfig } from "../../main.test";

const error = (id: string) => new Error("SHOWN_message" + id);

// A `@catch` in a child the same patch creates passes content reading the
// child's input on: its subscriber resumes into an owner holding no set yet.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { show: false },
    { show: true, error: error("1"), label: "a" },
    { show: true, error: error("2"), label: "b" },
    { show: true, label: "c" },
  ],
};
