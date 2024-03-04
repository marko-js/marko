import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  value
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const dummy = {};
  _write(`<div>${_escapeXML((dummy, value))}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  _writeScope(_scope0_id, {
    "value": value,
    "dummy": dummy
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");