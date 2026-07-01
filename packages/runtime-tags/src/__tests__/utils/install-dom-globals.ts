// Installs jsdom-backed DOM globals (plus a rAF shim) for unit tests that
// import DOM-runtime modules directly — several evaluate `document` at module
// load (e.g. dom/walker.ts creates a TreeWalker). Import this FIRST, before
// any `../dom/*` import.
import { JSDOM } from "jsdom";

const g = globalThis as any;
if (!g.document) {
  const { window } = new JSDOM("");
  g.window = window;
  g.document = window.document;
}
g.requestAnimationFrame ??= (cb: () => void) => setTimeout(cb, 0);

// dom/schedule.ts arms its macrotask through a `MessageChannel`. Node's real
// `MessagePort` keeps the event loop (and therefore mocha) alive forever once
// a listener is attached, so swap in a loop-safe stand-in with the same
// asynchronous delivery.
g.MessageChannel = class {
  port1: { onmessage?: () => void } = {};
  port2 = {
    postMessage: () => setTimeout(() => this.port1.onmessage?.(), 0),
  };
};
