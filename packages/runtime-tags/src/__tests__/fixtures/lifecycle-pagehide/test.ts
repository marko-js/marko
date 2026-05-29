import type { TestConfig } from "../../main.test";

function inc(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")?.click();
}

// Simulates the browser firing pagehide (tab closed / navigated away).
// Uses win.Event (the JSDOM Event constructor) rather than the global Event,
// because JSDOM's dispatchEvent rejects Node.js native Event instances.
// Uses a plain Event because JSDOM does not implement PageTransitionEvent,
// and our listener does not inspect event.persisted.
function pagehide(container: Element) {
  const win = container.ownerDocument.defaultView!;
  win.dispatchEvent(new (win as any).Event("pagehide"));
}

// Simulates BFCache restore (browser fires pageshow after returning to a
// frozen page).
function pageshow(container: Element) {
  const win = container.ownerDocument.defaultView!;
  win.dispatchEvent(new (win as any).Event("pageshow"));
}

export const config: TestConfig = {
  steps: [
    {}, // initial render – onMount fires → log: "mount,"
    inc, // normal update – onUpdate fires → log: "mount,update,"
    pagehide, // tab closes: isUnloading = true
    inc, // run() returns early – onUpdate suppressed → log unchanged
    pageshow, // BFCache restore: isUnloading = false
    inc, // run() resumes – onUpdate fires → log: "mount,update,update,"
  ],
};
