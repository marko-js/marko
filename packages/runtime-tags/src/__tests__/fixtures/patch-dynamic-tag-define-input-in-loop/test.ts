import type { TestConfig } from "../../main.test";

const row = (id: string, useA: boolean) => ({
  id,
  useA,
  record: { name: "SHOWN_name" + id, passwordHash: "SECRET_hash" + id },
});

// A `<define>` a dynamic tag in a loop row selects: a patch adding a row or
// swapping its tag ships the body's shell and the name, never the whole record.
export const config: TestConfig = {
  patches: true,
  steps: [
    { rows: [row("1", true)] },
    { rows: [row("1", false), row("2", true)] },
  ],
};
