import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  onClick,
  text
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<button>${_escapeXML(text)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick");
  _writeScope(_scope0_id, {
    "onClick": onClick
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko");