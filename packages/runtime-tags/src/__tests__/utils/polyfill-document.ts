import { JSDOM } from "jsdom";

// Allows importing modules that touch `document` at module evaluation time
// (eg `dom/walker.ts`) from tests that don't need a full browser context.
if (typeof document === "undefined") {
  globalThis.document = new JSDOM().window.document as unknown as Document;
}
