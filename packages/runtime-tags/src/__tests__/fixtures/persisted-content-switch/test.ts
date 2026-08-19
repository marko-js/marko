import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A content body switching arms (static, with a hole, none) at a
// server-owned and a client-owned site (own prop each: a shared prop's
// fill channel cannot also patch-write, so it fails closed).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { kind: "a", inner: "b" },
    { kind: "b", inner: "b" },
    click,
    { kind: undefined, inner: "a" },
    click,
    { kind: "b", inner: undefined },
    { kind: "a", inner: "a" },
  ],
};
