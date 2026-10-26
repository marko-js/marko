import type { TestConfig } from "../../main.test";

// The document rendered the `@catch` (a sync throw); later patches keep it,
// whether their body renders cleanly or throws again.
export const config: TestConfig = {
  patches: true,
  // A caught `<try>` keeps its `@catch`, which a fresh render of a later
  // input lacks.
  skip_fresh_render: true,
  steps: [
    { message: "x", boom: true },
    { message: "ok" },
    { message: "y", boom: true },
  ],
};
