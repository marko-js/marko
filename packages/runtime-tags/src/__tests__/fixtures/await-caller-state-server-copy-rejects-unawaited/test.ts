import type { TestConfig } from "../../main.test";
import { navigate, rejectAfter, resolveAfter, wait } from "../../utils/resolve";

// The body reads only the value; the second input's promise rejects unread, as
// the client keeps its own.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: resolveAfter("a") },
    wait,
    navigate(rejecting),
    wait,
    wait,
  ],
};

function rejecting() {
  return { label: "b", promise: rejectAfter(new Error("server copy")) };
}
