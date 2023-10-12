import { classAttr as _classAttr, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const className = "A";
  _write(`<p${_classAttr(className)}>paragraph</p>${_markResumeNode(_scope0_id, "#p/0")}<button></button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className");
  _writeScope(_scope0_id, {
    "className": className
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");