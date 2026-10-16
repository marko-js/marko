import type { TestConfig } from "../../main.test";
import { logScriptsAndStyles } from "../../utils/log-scripts";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const logSrc = (document: Document) => {
  document.defaultView!.console.log(
    Array.from(
      document.querySelectorAll("style[src]"),
      (style) => style.outerHTML,
    ),
  );
};

// A client-rendered style takes its text after the attributes it renders after
// insertion, so a nonce CSP checks its nonce, and keeps a `src` as the server's.
export const config: TestConfig = {
  steps: [
    {
      media: "screen",
      src: "y.css",
      $global: { cspNonce: "n1", serializedGlobals: { cspNonce: true } },
    },
    click,
    logScriptsAndStyles,
    logSrc,
  ],
};
