export const _template_ = "<div> </div><button> </button>";
export const _walks_ = /* next(1), get, out(1), get, next(1), get, out(1) */"D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _myObj = /* @__PURE__ */_$.value("myObj", (_scope, myObj) => _$.data(_scope["#text/0"], JSON.stringify(myObj)));
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _x_effect(_scope);
  _myObj(_scope, {
    foo: 1,
    bar: x + 1
  });
});
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko", _template_, _walks_, _setup_);