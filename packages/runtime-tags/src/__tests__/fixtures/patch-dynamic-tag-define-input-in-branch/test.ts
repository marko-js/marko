import type { TestConfig } from "../../main.test";

const record = (id: string) => ({
  name: "SHOWN_name" + id,
  passwordHash: "SECRET_hash" + id,
});

// A `<define>` a dynamic tag in a branch selects: a patch creating or swapping
// it ships the body's shell and the name it renders, never the whole record.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, useA: true, record: record("1") },
    { show: true, useA: false, record: record("2") },
    { show: false, useA: false, record: record("3") },
    { show: true, useA: true, record: record("4") },
  ],
};
