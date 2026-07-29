import type { TestConfig } from "../../main.test";

// Persisted entries import `static` bindings, so handler and `<script>`
// assignments must fail at compile time; module-level assignments still pass.
export const config: TestConfig = {
  persisted: true,
  error_compiler: true,
};
