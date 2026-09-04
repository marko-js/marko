import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A handler bound in one frame is bound again in the next: each streamed
// frame re-ships the sources its bind references.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    { title: "a", one: Promise.resolve(1), two: Promise.resolve(2) },
    { title: "b", one: Promise.resolve(1), two: resolveAfter(2, 10) },
    wait,
    (document: Document) => {
      document.querySelector<HTMLButtonElement>("#two")!.click();
    },
  ],
};
