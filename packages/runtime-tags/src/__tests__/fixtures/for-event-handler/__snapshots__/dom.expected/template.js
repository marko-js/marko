export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _i$for_content = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/1"], i));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _i$for_content(_scope, _params_2[0]));
const _num$for_content_effect = _$.effect("__tests__/template.marko_1_num", (_scope, {
  _: {
    num
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _num(_scope._, num + 1), num;
}));
const _num$for_content = /* @__PURE__ */_$.loopClosure("num", "#text/0", (_scope, num) => _num$for_content_effect(_scope));
const _for_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", 0, _params_2$for_content, _scope => _num$for_content._(_scope));
const _for = /* @__PURE__ */_$.loopTo("#text/0", _for_content);
const _num = /* @__PURE__ */_$.state("num/1", (_scope, num) => {
  _for(_scope, [num, 0, 1]);
  _num$for_content(_scope);
});
export function _setup_(_scope) {
  _num(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);