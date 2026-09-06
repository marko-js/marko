import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "typed";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

const probe = (document: Document) => {
  document.querySelector("p")!.textContent =
    `live:${document.querySelector("input")!.value}`;
};

// A control owned by a static (client-state) attr with a server spread: a
// frame carrying only the spread must leave the live control alone — the
// binding, handler, and typed value all survive the patch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { rest: { placeholder: "p1" } },
    type,
    { rest: { placeholder: "p2" } },
    probe,
    type,
    probe,
  ],
};
