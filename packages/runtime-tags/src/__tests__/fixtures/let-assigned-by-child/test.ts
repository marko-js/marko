import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

const nextInput = () => ({ v: "a", promise: resolveAfter("ho") });

// patch-let-assigned-by-child without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { v: "a", promise: resolveAfter("hi") },
    wait,
    navigate(nextInput),
    wait,
  ],
};
