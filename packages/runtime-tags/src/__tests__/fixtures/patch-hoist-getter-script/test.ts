import type { TestConfig } from "../../main.test";

// A `<script>` reads a `<const>` declared after it: its getter registers nothing a patch could carry.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }],
};
