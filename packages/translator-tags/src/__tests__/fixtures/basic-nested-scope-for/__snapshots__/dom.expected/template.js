export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_selected_num$forBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      selected
    },
    num
  } = _scope;
  _$.attr(_scope["#button/0"], "data-selected", selected === num);
  _$.attr(_scope["#button/0"], "data-multiple", num % selected === 0);
});
const _onClick = _scope => {
  const {
    num
  } = _scope;
  return function () {
    _selected(_scope._, num);
  };
};
const _num$forBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _num$forBody = /* @__PURE__ */_$.value("num", (_scope, num) => {
  _$.data(_scope["#text/1"], num);
  _num$forBody_effect(_scope);
}, () => _expr_selected_num$forBody);
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _num$forBody(_scope, _params_2[0]), () => _num$forBody);
const _selected$forBody = /* @__PURE__ */_$.closure("selected", null, void 0, () => _expr_selected_num$forBody);
const _forBody = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_selected$forBody], void 0, () => _params_2$forBody);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _forBody);
const _selected = /* @__PURE__ */_$.state("selected", null, () => _$.inLoopScope(_selected$forBody, "#text/0"));
export function _setup_(_scope) {
  _selected(_scope, 0);
  _for(_scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko");