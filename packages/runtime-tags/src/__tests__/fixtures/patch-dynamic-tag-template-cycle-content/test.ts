import type { TestConfig } from "../../main.test";

const node = (id: string) => ({
  name: "a" + id,
  secret: "SECRET_" + id,
  kid: {
    name: "b" + id,
    secret: "SECRET_b" + id,
    kid: { name: "c" + id, secret: "SECRET_c" + id },
  },
});

// Two templates rendering each other through content, one picked by a dynamic
// tag: each level renders, and no patch ships the `secret` none reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { deep: false, node: node("1") },
    { deep: true, node: node("2") },
    { deep: true, node: node("3") },
  ],
};
