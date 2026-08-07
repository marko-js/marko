import type { TestConfig } from "../../main.test";

// `value:=state[key]` binds the change handler to `state[key + "Change"]`
// (here `state.vChange`), so typing updates `v`, not `wrong`. The change
// handler is selected dynamically, so every method the expression can reach
// is registered and the reactive graph serializes for resume.
export const config: TestConfig = {
  steps: [{}, type("z")],
};

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}
