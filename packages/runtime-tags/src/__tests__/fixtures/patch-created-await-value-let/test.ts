import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// An `<await>` body over a plain value a flush creates seeds its `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "a", show: true, value: Promise.resolve(1) },
    navigate(() => ({ title: "b", show: false, value: Promise.resolve(2) })),
    navigate(() => ({ title: "c", show: true, value: Promise.resolve(3) })),
  ],
};
