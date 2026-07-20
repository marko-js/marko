import type { TestConfig } from "../../main.test";

// A controlled binding (`value` + `valueChange`) applied via a spread must stop
// taking effect once the spread drops it. The stored change handler used to
// never be cleared, so the persistent input listener kept firing it after the
// element became uncontrolled.
//   drop        -> spread becomes { type: "text" }; the input is now uncontrolled
//   type "hello" -> must NOT invoke the dropped valueChange; `value` stays "init"
export const config: TestConfig = {
  steps: [{}, drop, type("hello")],
};

function drop(document: Document) {
  document.querySelector("button")!.click();
}

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}
