import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The body streams with a lazy tag's script before a sibling rejects: the range the
// `@catch` replaces takes the script with it, so it must be sent again past it, since
// the catch's own tag reuses it.
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
