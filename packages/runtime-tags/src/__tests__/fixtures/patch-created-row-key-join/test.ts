import type { TestConfig } from "../../main.test";

// A created keyed row whose branch joins the loop key with state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: "a" }], show: true },
    { items: [{ id: "a" }, { id: "b" }], show: true },
  ],
};
