import assert from "assert/strict";

import { _attr } from "../dom/dom";
import createBrowser from "./utils/create-browser";

// A page served with a nonce source hides a connected element's nonce attribute
// from every read while still honoring it, and only `nonce` reports the value.
// Writing the attribute is what exposes it, so the writer compares against the
// property. jsdom enforces no CSP, so these elements hide their own nonce.
function hiddenNonceElement(nonce: string) {
  const { window } = createBrowser();
  const { getAttribute, setAttribute, removeAttribute } =
    window.Element.prototype;
  const element = window.document.createElement("style");
  const writes: (string | undefined)[] = [];

  element.setAttribute = ((name: string, value: string) => {
    writes.push(value);
    setAttribute.call(element, name, value);
  }) as typeof element.setAttribute;
  element.removeAttribute = ((name: string) => {
    writes.push(undefined);
    removeAttribute.call(element, name);
  }) as typeof element.removeAttribute;
  element.getAttribute = ((name: string) =>
    name === "nonce" && element.hasAttribute(name)
      ? ""
      : getAttribute.call(element, name)) as typeof element.getAttribute;

  setAttribute.call(element, "nonce", nonce);
  return { element, writes };
}

describe("runtime-tags/dom csp nonce", () => {
  it("leaves a nonce the element already holds hidden", () => {
    const { element, writes } = hiddenNonceElement("abc123");

    _attr(element, "nonce", "abc123");

    assert.deepEqual(writes, []);
    assert.equal(element.getAttribute("nonce"), "");
  });

  it("writes a nonce the element does not hold", () => {
    const { element, writes } = hiddenNonceElement("abc123");

    _attr(element, "nonce", "def456");

    assert.deepEqual(writes, ["def456"]);
  });

  it("adds a nonce to an element that has none", () => {
    const { element, writes } = hiddenNonceElement("abc123");
    element.removeAttribute("nonce");
    writes.length = 0;

    _attr(element, "nonce", "ghi789");

    assert.deepEqual(writes, ["ghi789"]);
  });

  it("removes the nonce when the page has none", () => {
    const { element, writes } = hiddenNonceElement("abc123");

    _attr(element, "nonce", undefined);

    assert.deepEqual(writes, [undefined]);
    assert.equal(element.hasAttribute("nonce"), false);
  });

  it("still rewrites an attribute that is not the nonce", () => {
    const { element, writes } = hiddenNonceElement("abc123");

    _attr(element, "data-nonce", "abc123");
    _attr(element, "data-nonce", "abc123");

    assert.deepEqual(writes, ["abc123"]);
  });
});
