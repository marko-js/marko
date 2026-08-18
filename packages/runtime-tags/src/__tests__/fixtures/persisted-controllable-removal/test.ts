import type { TestConfig } from "../../main.test";

const type = (document: Document) => {
  const el = document.querySelector("input")!;
  el.value = "loose";
  el.dispatchEvent(new document.defaultView!.Event("input", { bubbles: true }));
};

const check = (document: Document) => {
  // Pins that typing STUCK (uncontrolled now) and nothing reported.
  document.querySelector("main")!.dataset.final =
    document.querySelector("input")!.value;
};

// The handler is REMOVED between frames: the cleared slot returns the
// input to uncontrolled behavior — typing sticks, nothing reports.
export const config: TestConfig = {
  persisted: true,
  // An uncontrolled input keeps its live value (CSR semantics); a fresh
  // render shows the new default.
  skip_fresh_render: true,
  steps: [
    { title: "Store", value: "first", wire: true },
    { title: "Store!", value: "second", wire: false },
    type,
    check,
  ],
};
