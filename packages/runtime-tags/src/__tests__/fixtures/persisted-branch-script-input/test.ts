import type { TestConfig } from "../../main.test";

// A branch `<script>` reading server input: the fill re-runs it when the
// value changes, and a constructed branch runs it against current fills.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { title: "Store", show: true, value: "a" },
    { title: "Store", show: true, value: "b" },
    { title: "Store", show: false, value: "c" },
    { title: "Store", show: true, value: "d" },
  ],
};
