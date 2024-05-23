import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    onClick,
    value: {
      text
    }
  } = input;
  const {
    value: {
      text: textAlias
    }
  } = input;
  _write(`<button>${_escapeXML(text)}${_markResumeNode(_scope0_id, "#text/1")} <!>${_escapeXML(textAlias)}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/components/my-button.marko_0_onClick");
  _writeScope(_scope0_id, {
    "onClick": onClick
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/components/my-button.marko");