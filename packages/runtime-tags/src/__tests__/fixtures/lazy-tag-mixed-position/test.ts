import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The same load binding is used in both a known-tag position (<Child/>) and a
// dynamic/conditional position (<${show ? Child : null}/>). With .some(), the
// known-tag reference would cause the static import to be removed, leaving the
// conditional reference's binding dangling. With .every(), _load_renderer is
// generated for the binding so both positions work correctly.
export const config: TestConfig = {
  steps: [{}, wait, clickInc, clickToggle, wait],
  equivalent: false,
};

function clickToggle(container: Element) {
  container.querySelector<HTMLButtonElement>(".toggle")!.click();
}

function clickInc(container: Element) {
  container.querySelector<HTMLButtonElement>(".inc")!.click();
}
