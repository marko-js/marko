import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// The server's copy resolves unlike the client's promise: no hole reading it ships.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: resolveAfter("client") },
    wait,
    navigate(() => ({ label: "b", promise: resolveAfter("SECRET_server") })),
    wait,
  ],
};
