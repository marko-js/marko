import type { TestConfig } from "../../main.test";

const items = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ id: i + 10, name: "I" + i }));

// Children given constant inputs: no patch fills their holes or attributes and
// no client code changes them, so the document marks none of those nodes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { status: "a", items: items(3) },
    { status: "b", items: items(3) },
  ],
};
