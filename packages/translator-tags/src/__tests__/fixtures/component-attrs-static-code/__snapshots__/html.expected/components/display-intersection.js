import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const dummy = {};
  _write(`<div>${_escapeXML((dummy, value))}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  _writeScope(_scope0_id, {
    "value": value,
    "dummy": dummy
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");