import Child from "./components/child.marko";
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _dynamicScope = _dynamicTagInput(false || Child, {}, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write(`<button>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count");
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko_1_count/subscriber");
    _writeScope(_scope1_id, {
      "_": _serializedScope(_scope0_id)
    });
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "count": count,
    "#text/0!": _dynamicScope,
    "#text/0(": false || Child
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-dynamic-tag/template.marko");