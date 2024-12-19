export const _template_ = "<button class=inc></button><button class=toggle></button><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$if_content = /* @__PURE__ */_$.closure("count", (_scope, count) => _$.data(_scope["#text/0"], count));
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("The count is <!>", /* over(1), replace */"b%", void 0, () => [_count$if_content]));
const _if = /* @__PURE__ */_$.conditional("#text/2", 0);
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count_effect(_scope), () => _$.inConditionalScope(_count$if_content, "#text/2"));
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/1"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _if_content : null);
}, () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);