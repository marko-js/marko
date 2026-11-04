import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

const reject = () =>
  new Promise<never>((_, fail) => setTimeout(() => fail(new Error("x")), 1));
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A known child or `<await>` in a `@placeholder` or a `@catch` reading no
// error is off the branch path: no patch pairs it, so nothing forces its writes.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    {
      label: "a",
      slow: resolveAfter("s1"),
      failing: reject(),
      other: Promise.resolve("o1"),
      $global: { brand: "acme", serializedGlobals: ["brand"] },
    },
    click,
    navigate(() => ({
      label: "b",
      slow: resolveAfter("s2"),
      failing: reject(),
      other: Promise.resolve("o2"),
      $global: { brand: "bmce", serializedGlobals: ["brand"] },
    })),
    {
      label: "c",
      slow: Promise.resolve("s3"),
      failing: reject(),
      other: Promise.resolve("o3"),
      $global: { brand: "cmce", serializedGlobals: ["brand"] },
    },
  ],
};
