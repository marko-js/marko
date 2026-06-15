import type { TestConfig } from "../../main.test";

// `value:=state[key]` binds the change handler to `state[key + "Change"]`
// (here `state.vChange`), so typing updates `v`, not `wrong`.
//
// CSR-only: the change handler is selected dynamically (`state[key +
// "Change"]`), so the translator cannot statically register the resolved
// method for resume the way it does for a static `state.aChange` (see
// `bound-attr-shapes`). SSR therefore cannot serialize the controllable
// handler — debug throws "Unable to serialize ControlledHandler", optimize
// diverges from CSR.
export const config: TestConfig = {
  skip_ssr: true,
  steps: [{}, type("z")],
};

function type(value: string) {
  return (container: Element) => {
    const input = container.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}
