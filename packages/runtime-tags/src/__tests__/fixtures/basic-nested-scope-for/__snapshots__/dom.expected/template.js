export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_selected_num$for_content = /* @__PURE__ */_$.intersection(2, _scope => {
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
  _num$for_content_effect(_scope);
}, () => _expr_selected_num$for_content);
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _num$for_content(_scope, _params_2[0]), () => _num$for_content);
const _selected$for_content = /* @__PURE__ */_$.closure("selected", 0, void 0, () => _expr_selected_num$for_content);
const _for_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_selected$for_content], () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _for_content);
const _selected = /* @__PURE__ */_$.state("selected", 0, () => _$.inLoopScope(_selected$for_content, "#text/0"));
export function _setup_(_scope) {
  _selected(_scope, 0);
  _for(_scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);