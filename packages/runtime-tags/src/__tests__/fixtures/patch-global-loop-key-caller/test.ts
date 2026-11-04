import type { TestConfig } from "../../main.test";

const page = (x: string, m: number) => ({
  m,
  $global: { x, serializedGlobals: ["x"] },
});

export const config: TestConfig = {
  patches: true,
  steps: [page("a", 2), page("b", 3)],
};
