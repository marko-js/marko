import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// The snapshot harness ignores `<title>` (and other head-ish tags) in DOM
// output and mutation logs, so each navigation reflects the live title text
// into the visible `<output>` -- the resulting UPDATE line is the
// assertion.
const reflectTitle = (container: Element) => {
  container.querySelector("output")!.textContent =
    container.querySelector("title")!.textContent;
};

// Text-only tag content (document head sync: `<title>`) is request-derived
// text that replaces wholesale through `_text_content` -- update renders
// capture the whole computed text under a reserved `textContent` pseudo-attr
// key and the merge replays it, so per-route titles follow persisted
// navigations. Client state (`count`) survives.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        docTitle: "Home",
        serializedGlobals: { docTitle: true },
      },
    },
    reflectTitle,
    clickButton,
    navigate({
      $global: {
        persisted: true,
        docTitle: "Detail",
        serializedGlobals: { docTitle: true },
      },
    }),
    reflectTitle,
    clickButton,
  ],
};
