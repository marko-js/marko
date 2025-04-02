export const _template = "<button>Count: <!></button><!><!>";
export const _walks = /* get, next(1), over(1), replace, out(1), replace, over(1) */" Db%l%bD";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, 0, 1);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/3", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _dynamicTag(_scope, tags[0], () => [x, 'foo']);
  _x_effect(_scope);
});
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);