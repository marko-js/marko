export const _template = "<span>child</span>";
export const _walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _$.tagVarSignal(_scope, x + y);
});
const _y = /* @__PURE__ */_$.state("y/1", _scope => _expr_x_y(_scope));
const _x = /* @__PURE__ */_$.state("x/0", _scope => _expr_x_y(_scope));
export function _setup(_scope) {
  _x(_scope, 1);
  _y(_scope, 2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup);