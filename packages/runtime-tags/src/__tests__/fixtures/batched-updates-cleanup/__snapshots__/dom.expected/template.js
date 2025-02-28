export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _message$if_content = /* @__PURE__ */_$.conditionalClosure("message/3", "#text/1", 0, (_scope, message) => _$.data(_scope["#text/0"], message));
const _setup$if_content = _scope => {
  _message$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/1", _if_content);
const _message = /* @__PURE__ */_$.state("message/3", (_scope, message) => _message$if_content(_scope));
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  "show/2": show
}) => _$.on(_scope["#button/0"], "click", function () {
  _message(_scope, "bye");
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/2", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup_(_scope) {
  _show(_scope, true);
  _message(_scope, "hi");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);