import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

const reject = () =>
  new Promise<never>((_, fail) => setTimeout(() => fail(new Error("x")), 1));
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `@catch`'s `<await>` given a settled promise while another `<await>` pends
// past a frame: its body updates in place, as on a client render.
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
    navigate(
      () => ({
        label: "b",
        // Still pending once the response's other flushes have applied.
        slow: resolveAfter("s2", 20),
        failing: Promise.reject(new Error("x")),
        other: Promise.resolve("o2"),
        $global: { brand: "bmce", serializedGlobals: ["brand"] },
      }),
      betweenFlushes,
    ),
    wait,
    {
      label: "c",
      slow: Promise.resolve("s3"),
      failing: reject(),
      other: Promise.resolve("o3"),
      $global: { brand: "cmce", serializedGlobals: ["brand"] },
    },
  ],
};

// A frame passes before each later flush applies.
function betweenFlushes(document: Document) {
  return new Promise((resolve) =>
    document.defaultView!.requestAnimationFrame(resolve),
  );
}
