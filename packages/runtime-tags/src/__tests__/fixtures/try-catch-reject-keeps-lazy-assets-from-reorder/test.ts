import type { TestConfig } from "../../main.test";
import { flush, named } from "../../utils/resolve";

// An await renders a lazy tag after the placeholder streamed and a sibling rejects
// before the next flush, dropping its script; the catch's own tag writes it again.
export const config: TestConfig = {
  steps: [{}, flush, named(countLoadScripts)],
  equivalent: false,
  skip_csr: true,
};

function countLoadScripts(document: Document) {
  document.defaultView!.console.log(
    document.querySelectorAll('script[src="child.marko.load.mjs"]').length,
  );
}
