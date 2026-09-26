import type { TestConfig } from "../../main.test";

// A spread without `value` leaves the `<select>` uncontrolled, so the browser's
// default option stays selected instead of the `value=""` one.
export const config: TestConfig = {
  steps: [{ rest: { name: "x" } }],
};
