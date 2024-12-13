export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _message$ifBody = /* @__PURE__ */_$.closure("message", (_scope, message) => _$.data(_scope["#text/0"], message));
const _ifBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_message$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _message = /* @__PURE__ */_$.state("message", 0, () => _$.inConditionalScope(_message$ifBody, "#text/1"));
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/0"], "click", function () {
  _message(_scope, "bye");
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _message(_scope, "hi");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);