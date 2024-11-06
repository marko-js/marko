export const _template_ = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const _walks_ = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 2);
  };
};
const _onClick2 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count * 3);
  };
};
const _onClick3 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count ** 3);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count", _scope => {
  _$.on(_scope["#button/0"], "click", _onClick(_scope));
  _$.on(_scope["#button/2"], "click", _onClick2(_scope));
  _$.on(_scope["#button/4"], "click", _onClick3(_scope));
});
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _$.data(_scope["#text/3"], count);
  _$.data(_scope["#text/5"], count);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko");