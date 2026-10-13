import type { TestConfig } from "../../main.test";

// A caught `<try>` outside any branch rebuilt by a later patch gets its seeds.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [{ title: "a" }, { title: "b", fail: true }, { title: "c" }],
};
