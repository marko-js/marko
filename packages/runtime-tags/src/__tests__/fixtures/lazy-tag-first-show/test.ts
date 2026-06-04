import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Load child starts hidden (show=false on first render). No _load_setup fires
// on initial render, and no <script> preload is injected into SSR HTML.
// The first toggle shows the child, triggering the load import on demand.
export const config: TestConfig = {
  steps: [{}, click, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
