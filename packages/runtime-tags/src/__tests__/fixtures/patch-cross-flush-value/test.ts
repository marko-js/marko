import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

const click = (id: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();
};

// One object reaches two boundaries that settle in separate flushes: the
// second flush references the first's copy, so the client holds one object.
export const config: TestConfig = {
  patches: true,
  steps: () => {
    const tag = { name: "x" };
    const next = { name: "y" };
    return [
      { first: { tag }, second: { tag } },
      {
        first: resolveAfter({ tag: next }, 2),
        second: resolveAfter({ tag: next }, 10),
      },
      wait,
      click("a"),
      click("b"),
    ];
  },
};
