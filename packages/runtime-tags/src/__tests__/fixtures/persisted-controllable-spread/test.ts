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

// A spread carrying a controllable: the patched set re-claims the control
// through the run-time claim table, so the change handler stays live, an
// unchanged frame preserves the controlled value, and a changed server
// value wins the input.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { field: { value: "a", placeholder: "p1" } },
    type,
    probe,
    { field: { value: "a", placeholder: "p2" } },
    probe,
    { field: { value: "b", placeholder: "p2" } },
    probe,
  ],
};
