import type { TestConfig } from "../../main.test";

// A `<script>` reading server-derived values is rejected: it would observe
// stale reads on every run after hydration.
export const config: TestConfig = {
  persisted: true,
  error_compiler: true,
};
