import { setup as _parentEl, template as _parentEl_template, walks as _parentEl_walks } from "./components/parent-el.marko";
import { setTagVar as _setTagVar, data as _data, value as _value, register as _register, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _spanName = _register("packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_spanName", /* @__PURE__ */_value("spanName", (_scope, spanName) => _data(_scope["#text/3"], spanName)));
const _divName = _register("packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko_0_divName", /* @__PURE__ */_value("divName", (_scope, divName) => _data(_scope["#text/1"], divName)));
const _setup = _scope => {
  _setTagVar(_scope, "#childScope/0", _divName);
  _parentEl(_scope["#childScope/0"]);
  _setTagVar(_scope, "#childScope/2", _spanName);
  _parentEl(_scope["#childScope/2"]);
};
export const template = `<div>${_parentEl_template}<!></div><span>${_parentEl_template}<!></span>`;
export const walks = /* next(1), beginChild, _parentEl_walks, endChild, replace, out(1), next(1), beginChild, _parentEl_walks, endChild, replace, out(1) */`D/${_parentEl_walks}&%lD/${_parentEl_walks}&%l`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/html-comment-var/template.marko");