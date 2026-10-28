import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// The server's copy of a client's promise pends past the first flush, inside
// a `@placeholder` try: the client shows its own placeholder, if any.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    navigate(slowCopy, betweenFlushes),
    wait,
  ],
};

function slowCopy() {
  return { label: "b", promise: resolveAfter("SECRET_server") };
}

function betweenFlushes() {}
