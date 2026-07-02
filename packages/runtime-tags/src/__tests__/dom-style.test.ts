import "./utils/polyfill-document";

import * as assert from "assert/strict";

import { _style_rule_item } from "../dom/dom";

describe("runtime-tags/dom styleRuleItem", () => {
  it("appends a new declaration", () => {
    const el = styleEl();
    _style_rule_item(el, "--a_0", "red");
    assert.equal(el.textContent, ".c ~ *{--a_0:red;}");
  });

  it("updates declarations in place", () => {
    const el = styleEl();
    _style_rule_item(el, "--a_0", "red");
    _style_rule_item(el, "--a_1", "1px");
    _style_rule_item(el, "--a_0", "blue");
    assert.equal(el.textContent, ".c ~ *{--a_0:blue;--a_1:1px;}");
    _style_rule_item(el, "--a_1", "2px");
    assert.equal(el.textContent, ".c ~ *{--a_0:blue;--a_1:2px;}");
  });

  it("escapes values so they cannot terminate the declaration or rule", () => {
    const el = styleEl();
    _style_rule_item(el, "--a_0", "red; } body{color:red");
    _style_rule_item(el, "--a_1", "blue");
    assert.equal(
      el.textContent,
      ".c ~ *{--a_0:red\\3B  \\} body\\{color:red;--a_1:blue;}",
    );
  });

  it("updates over a value containing escaped `;`", () => {
    const el = styleEl();
    _style_rule_item(el, "--a_0", "red; 10px");
    _style_rule_item(el, "--a_1", "blue");
    _style_rule_item(el, "--a_0", "green");
    assert.equal(el.textContent, ".c ~ *{--a_0:green;--a_1:blue;}");
  });

  it("updates over a value ending in a backslash", () => {
    const el = styleEl();
    _style_rule_item(el, "--a_0", "red\\");
    assert.equal(el.textContent, ".c ~ *{--a_0:red\\\\;}");
    _style_rule_item(el, "--a_0", "blue");
    assert.equal(el.textContent, ".c ~ *{--a_0:blue;}");
  });
});

function styleEl() {
  const el = document.createElement("style");
  el.textContent = ".c ~ *{}";
  return el;
}
