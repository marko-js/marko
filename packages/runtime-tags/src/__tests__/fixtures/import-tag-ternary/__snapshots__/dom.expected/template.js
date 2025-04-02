export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
import baz from "./tags/baz.marko";
import foo from "./tags/foo.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _x = /* @__PURE__ */_$.state("x/1", (_scope, x) => _dynamicTag(_scope, x === 1 ? baz : foo));
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);