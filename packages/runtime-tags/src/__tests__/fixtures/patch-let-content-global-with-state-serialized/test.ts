import type { TestConfig } from "../../main.test";
const add = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();
const page = (label: string) => ({
  $global: { label, serializedGlobals: { label: true } },
});
// The same with the key serialized: a patch ships it, and the client's sum follows it.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), add, page("c")],
};
