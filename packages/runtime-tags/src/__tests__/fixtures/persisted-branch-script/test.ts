import type { TestConfig } from "../../main.test";

// A `<script>` inside a server-driven branch runs when the branch mounts:
// once at hydration, then once per shell construct — never on a patch that
// merely pairs the already-shown branch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
  ],
};
