export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import baz from "./components/baz.marko";
import foo from "./components/foo.marko";
import { dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x1BazFoo_input = _dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _x1BazFoo_input(_scope, () => ({})), () => _x1BazFoo_input);
const _x = /* @__PURE__ */_value("x", (_scope, x) => _dynamicTagName(_scope, x === 1 ? baz : foo), () => _dynamicTagName);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/import-tag-ternary/template.marko");