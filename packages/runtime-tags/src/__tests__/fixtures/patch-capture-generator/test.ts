import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

function* gen(...items: string[]) {
  yield* items;
}

// A handler captures a generator: the flush's bind scan must not consume it
// before the serializer writes its yields.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { title: "one", items: gen("a", "b") },
    navigate(() => ({ title: "two", items: gen("c", "d") })),
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
