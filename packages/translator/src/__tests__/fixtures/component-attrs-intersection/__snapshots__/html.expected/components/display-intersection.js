import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const dummy = {};
  _write(`<div>${_escapeXML((dummy, value))}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  _writeScope(_scope0_id, {
    "value": value,
    "dummy": dummy
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/component-attrs-intersection/components/display-intersection.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);