import type { TestConfig } from "../../main.test";

// A `<script>` reading server input re-runs when its fill changes (and only
// then — the runs counter shows patches without a change skip it).
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { title: "Store", announce: "sale" },
    { title: "Store!", announce: "sale" },
    { title: "Store!", announce: "clearance" },
  ],
};
