import type { TestConfig } from "../../main.test";

// Captured holes and attrs render through the capture helpers: escaping of
// static template parts and conditional/logical attr shapes must match the
// factored writers they replace.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { name: "x", on: true, flag: true },
    { name: "y&z", on: false, flag: false },
  ],
};
