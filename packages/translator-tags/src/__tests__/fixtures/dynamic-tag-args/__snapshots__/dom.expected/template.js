export const _template_ = "<!><button>Count: <!></button><!><!>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), replace, over(1) */"D Db%l%bD";
import customTag from './components/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tags0_input = _$.dynamicTagAttrs("#text/2", void 0, 1);
const _expr_Text_x = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x
  } = _scope;
  _tags0_input(_scope, () => [x, 'foo']);
}, () => _tags0_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/2", 0, () => _expr_Text_x);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args/template.marko_0_x", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
}, () => _expr_Text_x);
export function _setup_(_scope) {
  _x(_scope, 1);
  _dynamicTagName(_scope, tags[0]);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args/template.marko", _template_, _walks_, _setup_);