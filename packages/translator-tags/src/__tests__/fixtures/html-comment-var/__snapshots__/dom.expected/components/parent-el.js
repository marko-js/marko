import { queueSource as _queueSource, tagVarSignal as _tagVarSignal, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => _tagVarSignal(_scope, tagName), void 0, _tagVarSignal);
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko_0", _scope => _queueSource(_scope, _tagName, _scope["#comment/0"].parentElement.tagName));
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
  _tagName(_scope, undefined);
};
export const template = "<!--Body Text-->";
export const walks = /* get, over(1) */" b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/html-comment-var/components/parent-el.marko");