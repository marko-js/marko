export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _i$forBody = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/1"], i));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _i$forBody(_scope, _params_2[0]));
const _num$forBody_effect = _$.effect("__tests__/template.marko_1_num", (_scope, {
  _: {
    num
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _num(_scope._, num + 1), num;
}));
const _num$forBody = /* @__PURE__ */_$.closure("num", (_scope, num) => _num$forBody_effect(_scope));
const _forBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_num$forBody], () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopTo("#text/0", _forBody);
const _num = /* @__PURE__ */_$.state("num", (_scope, num) => _for(_scope, [num, 0, 1]), () => _$.intersections([_for, _$.inLoopScope(_num$forBody, "#text/0")]));
export function _setup_(_scope) {
  _num(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);