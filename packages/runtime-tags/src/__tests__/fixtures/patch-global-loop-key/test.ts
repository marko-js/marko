import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b")],
};
