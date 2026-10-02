import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// A sibling rejects before the first flush, dropping the body behind the
// placeholder and its lazy tag's script; the catch's own tag writes it again.
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
