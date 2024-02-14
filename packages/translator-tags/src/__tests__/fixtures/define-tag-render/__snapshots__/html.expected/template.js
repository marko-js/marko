import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const myTag = {
    renderBody({
      name
    }) {
      const _scope1_id = _nextScopeId();
      const y = 1;
      _write(`<div>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")} <!>${_escapeXML(y)}${_markResumeNode(_scope1_id, "#text/1")}</div><button>${_escapeXML(y)}${_markResumeNode(_scope1_id, "#text/3")}</button>${_markResumeNode(_scope1_id, "#button/2")}`);
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko_1_y");
      _writeScope(_scope1_id, {
        "y": y
      });
    }
  };
  myTag.renderBody({
    name: "Ryan"
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/define-tag-render/template.marko");