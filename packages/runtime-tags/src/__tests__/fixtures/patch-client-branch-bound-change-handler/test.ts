import type { TestConfig } from "../../main.test";
function type(d: Document) {
  for (const e of d.querySelectorAll<HTMLInputElement>("section input")) {
    e.value = "typed";
    e.dispatchEvent(new d.defaultView!.Event("input", { bubbles: true }));
  }
}
// A change handler ships owner-bound (`bindEntry`): its holes stay in the owner's entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    type,
    { show: true, label: "c" },
  ],
};
