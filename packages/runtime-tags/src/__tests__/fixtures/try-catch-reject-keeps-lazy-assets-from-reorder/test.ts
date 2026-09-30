import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// An await renders a lazy tag after the placeholder streamed, and a sibling rejects
// before the next flush: the tag's script, cut with the body, must stay in the page
// past the range the `@catch` replaces, since the catch's own tag reuses it.
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
