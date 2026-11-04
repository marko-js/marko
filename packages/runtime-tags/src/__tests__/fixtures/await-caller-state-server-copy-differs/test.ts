import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// The server's copy resolves unlike the client's promise: no hole reading it ships.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: resolveAfter("client") },
    wait,
    { label: "b", promise: resolveAfter("SECRET_server") },
    wait,
  ],
};
