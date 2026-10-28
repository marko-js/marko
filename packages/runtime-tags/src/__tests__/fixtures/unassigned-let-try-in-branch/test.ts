import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

const nextInput = () => ({ show: true, promise: resolveAfter("ho") });

// patch-unassigned-let-try-in-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: true, promise: resolveAfter("hi") },
    wait,
    navigate(nextInput),
    wait,
  ],
};
