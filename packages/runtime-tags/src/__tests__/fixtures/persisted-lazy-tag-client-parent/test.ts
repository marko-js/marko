import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The template importing a load-on-render child only ever selects its site
// server-side, but the page mounts that template under client state: the
// client renders the site, so the child keeps its client render.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_fresh_render: true,
  steps: [
    { show: true, label: "a" },
    wait,
    { show: true, label: "b" },
    wait,
    click,
  ],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("main button")!.click();
}
