export const _template_ = "<button>Count: <!></button><!><!>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), replace, over(1) */" Db%l%bD";
import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tags0_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/2", void 0, 1);
const _expr_Text_x = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x
  } = _scope;
  _tags0_input(_scope, () => [x, 'foo']);
}, () => _tags0_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", 0, () => _expr_Text_x);
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
}, () => _expr_Text_x);
export function _setup_(_scope) {
  _x(_scope, 1);
  _dynamicTagName(_scope, tags[0]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);