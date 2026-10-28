import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn where the caller passes client state: the
// flush creating the branch names the join's init, as the client sets its value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    clickSet,
    { show: true, v: "a", w: "3" },
    { show: false, v: "b", w: "4" },
    clickSet,
    { show: true, v: "b", w: "5" },
  ],
};

function clickSet(document: Document) {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
}
