export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_selected_num$for_content = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    _: {
      selected
    },
    num
  } = _scope;
  _$.attr(_scope["#button/0"], "data-selected", selected === num);
  _$.attr(_scope["#button/0"], "data-multiple", num % selected === 0);
});
const _num$for_content_effect = _$.effect("__tests__/template.marko_1_num", (_scope, {
  num
}) => _$.on(_scope["#button/0"], "click", function () {
  _selected(_scope._, num);
}));
const _num$for_content = /* @__PURE__ */_$.value("num", (_scope, num) => {
  _$.data(_scope["#text/1"], num);
  _expr_selected_num$for_content(_scope);
  _num$for_content_effect(_scope);
});
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _num$for_content(_scope, _params_2[0]));
const _selected$for_content = /* @__PURE__ */_$.loopClosure("selected", "#text/0", (_scope, selected) => _expr_selected_num$for_content(_scope));
const _for_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", 0, () => _params_2$for_content, _scope => _selected$for_content._(_scope));
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _selected = /* @__PURE__ */_$.state("selected/1", (_scope, selected) => _selected$for_content(_scope));
export function _setup_(_scope) {
  _selected(_scope, 0);
  _for(_scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);