export const _template_ = "<button>hide</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _message_text$if_content = /* @__PURE__ */_$.closure("message_text", (_scope, message_text) => _$.data(_scope["#text/0"], message_text));
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => [_message_text$if_content]));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => _if(_scope, show ? _if_content : null), () => _if);
const _message_text = /* @__PURE__ */_$.value("message_text", 0, () => _$.inConditionalScope(_message_text$if_content, "#text/1"));
const _message = /* @__PURE__ */_$.state("message", (_scope, message) => _message_text(_scope, message?.text), () => _message_text);
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
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
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);