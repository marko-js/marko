export const _template_ = "<button>hide</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _message$ifBody = /* @__PURE__ */_$.closure("message", (_scope, message) => _$.data(_scope["#text/0"], message.text));
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => [_message$ifBody]));
const _if = /* @__PURE__ */_$.conditional("#text/1");
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => _if(_scope, show ? _ifBody : null), () => _if);
const _message = /* @__PURE__ */_$.state("message", null, () => _$.inConditionalScope(_message$ifBody, "#text/1"));
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  _message(_scope, null);
  _show(_scope, false);
}));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _message(_scope, {
    text: "hi"
  });
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko");