export const _template_ = "<!><!><button id=changeTag></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import { _setup_ as _counter, _template_ as _counter_template, _walks_ as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$tagName_content = _scope => {
  _counter(_scope["#childScope/0"]);
};
const _tagName_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(_counter_template, /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`, _setup$tagName_content));
const _tagName_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0", _tagName_content);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _scope => _tagName_input(_scope, () => ({})), () => _tagName_input);
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => {
  _tagName_effect(_scope);
  _dynamicTag(_scope, tagName || _tagName_content(_scope));
}, () => _dynamicTag);
export function _setup_(_scope) {
  _tagName(_scope, "div");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);