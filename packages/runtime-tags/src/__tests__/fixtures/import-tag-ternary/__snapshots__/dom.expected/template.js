export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x1BazFoo_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _scope => _x1BazFoo_input(_scope, () => ({})), () => _x1BazFoo_input);
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _dynamicTag(_scope, x === 1 ? baz : foo), () => _dynamicTag);
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);