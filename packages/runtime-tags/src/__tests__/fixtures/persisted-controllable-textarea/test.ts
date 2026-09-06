import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("textarea")!;
  el.value = "draft";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

// A CONTROLLED textarea: patches force the server's value; user input
// reports through the handler and reverts (no state loop closes it).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", text: "first" },
    { title: "Store!", text: "second" },
    type,
  ],
};
