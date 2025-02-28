export const _template_ = "<div> </div><button> </button>";
export const _walks_ = /* next(1), get, out(1), get, next(1), get, out(1) */"D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _myObj = /* @__PURE__ */_$.value("myObj", (_scope, myObj) => _$.data(_scope["#text/0"], JSON.stringify(myObj)));
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/1"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/3", (_scope, x) => {
  _$.data(_scope["#text/2"], x);
  _myObj(_scope, {
    foo: 1,
    bar: x + 1
  });
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);