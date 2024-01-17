import { attr as _attr, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const disabled = true;
  _write(`<input${_attr("disabled", disabled)}>${_markResumeNode(_scope0_id, "#input/0")}<button>${_escapeXML(disabled ? "enable" : "disable")}${_markResumeNode(_scope0_id, "#text/2")}</button>${_markResumeNode(_scope0_id, "#button/1")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko_0_disabled");
  _writeScope(_scope0_id, {
    "disabled": disabled
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/attr-boolean-dynamic/template.marko");