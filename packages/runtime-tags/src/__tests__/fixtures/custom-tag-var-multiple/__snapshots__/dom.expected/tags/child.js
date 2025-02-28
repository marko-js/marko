export const _template_ = "<span>child</span>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    "x/0": x,
    "y/1": y
  } = _scope;
  _$.tagVarSignal(_scope, x + y);
});
const _y = /* @__PURE__ */_$.state("y/1", (_scope, y) => _expr_x_y(_scope));
const _x = /* @__PURE__ */_$.state("x/0", (_scope, x) => _expr_x_y(_scope));
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_);