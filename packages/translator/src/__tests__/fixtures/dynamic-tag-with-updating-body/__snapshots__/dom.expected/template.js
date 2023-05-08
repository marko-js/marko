import { setup as _counter, template as _counter_template, walks as _counter_walks } from "./components/counter.marko";
import { on as _on, queueSource as _queueSource, createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _setup$tagNameBody = _scope => {
  _counter(_scope["#childScope/0"]);
};
const _tagNameBody = /* @__PURE__ */_createRenderer(`${_counter_template}`, /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`, _setup$tagNameBody);
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _tagName_input(_scope, () => ({})), null, _tagName_input);
const _tagName_effect = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    tagName
  } = _scope;
  _queueSource(_scope, _tagName, tagName === "span" ? "div" : "span");
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName || _tagNameBody);
}, null, _dynamicTagName);
const _setup = _scope => {
  _tagName(_scope, "div");
};
export const template = "<!><button id=changeTag></button>";
export const walks = /* replace, over(1), get, over(1) */"%b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-with-updating-body/template.marko");