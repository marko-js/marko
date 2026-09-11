import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A load-on-render child under client state (through a server-selected
// branch) is the client's to render: the page keeps its load site, and
// a patch never composes it.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_fresh_render: true,
  steps: [
    { show: true, label: "a" },
    toggle,
    wait,
    { show: true, label: "b" },
    wait,
    click,
    toggle,
    toggle,
    wait,
  ],
};

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}
function click(document: Document) {
  document.querySelector<HTMLButtonElement>("main button")!.click();
}
