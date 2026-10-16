import type { TestConfig } from "../../main.test";
import { logScriptsAndStyles } from "../../utils/log-scripts";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A client-rendered dynamic `<style>` carries the page's nonce when inserted and
// keeps its declaration (client render only: optimize renames its properties).
export const config: TestConfig = {
  skip_ssr: true,
  steps: [
    {
      color: "red",
      $global: { cspNonce: "n1", serializedGlobals: { cspNonce: true } },
    },
    click,
    logScriptsAndStyles,
  ],
};
