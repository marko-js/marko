import type { TestConfig } from "../../main.test";

function clickB(container: Element) {
  // jsdom has no CSS.escape; polyfill so the runtime's radio-group
  // revert path (document.querySelectorAll + CSS.escape) can run.
  const win = container.ownerDocument!.defaultView! as any;
  win.CSS ||= { escape: (s: string) => s };
  container.querySelectorAll("input")[1]!.click();
}

function probe(container: Element) {
  // The change handler rejected the change, so the controlled value is
  // still "a" and radio a should still be checked. Write the live
  // checked state into the DOM so the tracker snapshots it.
  const [a, b] = Array.from(
    container.querySelectorAll<HTMLInputElement>("input"),
  );
  container.querySelector("span")!.textContent =
    `a:${a.checked} b:${b.checked}`;
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickB, probe],
};
