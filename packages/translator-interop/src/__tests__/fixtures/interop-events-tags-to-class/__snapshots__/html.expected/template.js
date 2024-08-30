import { register as _register, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _classCounter from "./components/class-counter.marko";
import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, _classCounter, {
    onCount: _register(function (newCount) {
      count = newCount;
    }, "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko_0/onCount", _scope0_id)
  });
  _s(_classCounter, "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/components/class-counter.marko");
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}<div id=tags-api>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": _classCounter
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-interop/src/__tests__/fixtures/interop-events-tags-to-class/template.marko");