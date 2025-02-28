export const _template_ = "<button class=inc></button><button class=toggle></button><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$if_content = /* @__PURE__ */_$.conditionalClosure("count", "#text/2", 0, (_scope, count) => _$.data(_scope["#text/0"], count));
const _setup$if_content = _scope => {
  _count$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("The count is <!>", /* over(1), replace */"b%", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/2", _if_content);
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/4", (_scope, count) => {
  _count$if_content(_scope);
  _count_effect(_scope);
});
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/1"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/3", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup_(_scope) {
  _show(_scope, true);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);