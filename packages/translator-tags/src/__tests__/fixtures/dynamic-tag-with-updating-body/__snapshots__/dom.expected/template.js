export const _template_ = "<!><!><button id=changeTag></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import { _setup_ as _counter, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _setup$tagNameBody = _scope => {
  _counter(_scope["#childScope/0"]);
};
const _tagNameBody = _$.register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(`${_counter_template}`, /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`, _setup$tagNameBody));
const _tagName_input = _$.dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _tagName_input(_scope, () => ({})), () => _tagName_input);
const _onClick = _scope => {
  const {
    tagName
  } = _scope;
  return function () {
    _tagName(_scope, tagName === "span" ? "div" : "span");
  };
};
const _tagName_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => {
  _tagName_effect(_scope);
  _dynamicTagName(_scope, tagName || _tagNameBody(_scope));
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, "div");
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");