import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Lazy child starts hidden (show=false on first render). No _lazy_setup fires
// on initial render, and no <script> preload is injected into SSR HTML.
// The first toggle shows the child, triggering the lazy import on demand.
export const config: TestConfig = {
  steps: [{}, click, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
