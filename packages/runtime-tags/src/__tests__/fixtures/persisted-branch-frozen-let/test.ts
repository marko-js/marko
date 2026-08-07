import type { TestConfig } from "../../main.test";

// A never-assigned let is NOT state (its selector can never change
// client-side), so the chain stays SERVER-owned: shells ship, frames
// speak the selection, and the interior captures directly. Adding an
// assignment later flips the whole chain to client-owned delivery.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }],
};
