import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A lazy loaded child that consumes `input` as a whole — `input.report`
// referenced dynamically inside an event handler alongside
// `<let/data=input.data/>` — so the parent drives the child's whole-input
// signal rather than per-prop signals. That signal must be wrapped in
// `_load_signal` like every other parent → child reference: applying it
// directly would run the child's input (and its event-attach effects)
// against the not-yet-cloned scope at CSR mount, and would statically
// import the lazy module, defeating the code splitting.
//
// Clicking the child verifies the handler end to end: `input.report`
// (a closure from main) compares the child's deserialized `data` against
// main's `shared`, rendering "child:true".
export const config: TestConfig = {
  steps: [{}, wait, wait, clickChild],
  equivalent: false,
};

function clickChild(container: Element) {
  container.querySelector<HTMLButtonElement>(".child")!.click();
}
