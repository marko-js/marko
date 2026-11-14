import type { TestConfig } from "../../main.test";

const globals = (flag: string, mark: string) => ({
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A value mixing a client-fed param with `$global` re-runs on the client as a
// key changes, before any click.
export const config: TestConfig = {
  patches: true,
  steps: [globals("1", "x"), globals("1", "y"), globals("2", "z")],
};
