import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

// The snapshot harness ignores head-ish tags in DOM output, so each
// navigation reflects the live head state into the visible `<output>`.
const reflectHead = (document: Document) => {
  document.querySelector("output")!.textContent = [
    document.querySelector("title")!.textContent,
    document.querySelector("meta[name=description]")!.getAttribute("content"),
    document.querySelector("link[rel=canonical]")!.getAttribute("href"),
  ].join(" | ");
};

// Head sync: text-only tag content replaces wholesale through `_text_content`
// and `<meta>`/`<link>` attrs ride ordinary captures across navigations.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        docTitle: "Home",
        docPath: "/",
        serializedGlobals: { docTitle: true, docPath: true },
      },
    },
    reflectHead,
    clickButton,
    navigate({
      $global: {
        persisted: true,
        docTitle: "Detail",
        docPath: "/detail",
        serializedGlobals: { docTitle: true, docPath: true },
      },
    }),
    reflectHead,
    clickButton,
    // Head parity must hold when the patch crosses routes too.
    navigate({
      $global: {
        persisted: true,
        persistedCrossRoute: true,
        docTitle: "Archive",
        docPath: "/archive",
        serializedGlobals: { docTitle: true, docPath: true },
      },
    }),
    reflectHead,
    clickButton,
  ],
};
