import type { TestConfig } from "../../main.test";

// A `<script>` reading a global-DERIVED binding: the alias never re-ships,
// so the read would re-run stale — it rejects at compile.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
