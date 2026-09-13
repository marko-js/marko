import type { TestConfig } from "../../main.test";

// A `<script>` reading several server inputs re-runs ONCE per patch that
// changes any of them (coalesced like the client `_or`), and a value
// returning to a former one (a: x->z->x) still re-runs each time.
export const config: TestConfig = {
  persisted: true,
  // The script leaves state on the page a fresh render lacks.
  skip_fresh_render: true,
  steps: [
    { title: "Store", a: "x", b: "y" },
    { title: "Store!", a: "x", b: "y" },
    { title: "Store!", a: "z", b: "w" },
    { title: "Store!", a: "x", b: "w" },
  ],
};
