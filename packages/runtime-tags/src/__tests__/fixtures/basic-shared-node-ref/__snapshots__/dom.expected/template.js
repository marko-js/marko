export const _template_ = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x$for_content = /* @__PURE__ */_$.value("x", (_scope, x) => _$.data(_scope["#text/0"], x));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _x$for_content(_scope, _params_2[0]));
const _for_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<li> </li>", /* next(1), get */"D ", void 0, void 0, () => _params_2$for_content));
const _for = /* @__PURE__ */_$.loopOf("#ul/0", _for_content);
const _list_effect = _$.effect("__tests__/template.marko_0_list", (_scope, {
  list
}) => _$.on(_scope["#button/2"], "click", function () {
  _list(_scope, [].concat(list).reverse());
}));
const _list = /* @__PURE__ */_$.state("list", (_scope, list) => {
  _list_effect(_scope);
  _for(_scope, [list, function (x) {
    return x;
  }]);
});
const _open_effect = _$.effect("__tests__/template.marko_0_open", (_scope, {
  open
}) => _$.on(_scope["#button/1"], "click", function () {
  _open(_scope, !open);
}));
const _open = /* @__PURE__ */_$.state("open", (_scope, open) => {
  _$.attr(_scope["#ul/0"], "hidden", !open);
  _open_effect(_scope);
});
export function _setup_(_scope) {
  _open(_scope, true);
  _list(_scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);