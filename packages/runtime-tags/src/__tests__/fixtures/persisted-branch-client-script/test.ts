import type { TestConfig } from "../../main.test";

// A `<script>` reading a server value inside client-owned structure: its
// re-run entry would ride the branch partial the frame no longer carries.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
