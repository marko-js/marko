import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// The server's copy settles after the response's first flush; the client's
// settled long before.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { title: "t1", label: "a", promise: Promise.resolve("a") },
    wait,
    navigate(slowCopy, betweenFlushes),
    wait,
  ],
};

function slowCopy() {
  return { title: "t2", label: "b", promise: resolveAfter("SECRET_server") };
}

function betweenFlushes() {}
