import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A sibling rejects before the first flush renders the placeholder, so the body
// behind it, holding a lazy tag's script, drops unstreamed with the caught body; the
// script must still reach the page, since the catch's own tag reuses it.
export const config: TestConfig = {
  steps: [{}, flush, countLoadScripts],
  equivalent: false,
  skip_csr: true,
};

function countLoadScripts(document: Document) {
  document.defaultView!.console.log(
    document.querySelectorAll('script[src="child.marko.load.mjs"]').length,
  );
}
