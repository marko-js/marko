import type { TestConfig } from "../../main.test";

const record = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A `<define>` a dynamic tag in a child template selects: a patch swapping it
// ships the body's shell and the name it renders, never the whole record.
export const config: TestConfig = {
  patches: true,
  steps: [
    { useA: true, record: record("1") },
    { useA: false, record: record("2") },
  ],
};
