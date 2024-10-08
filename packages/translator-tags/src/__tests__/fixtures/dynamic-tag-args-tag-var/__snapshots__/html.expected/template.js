import customTag from './components/custom-tag.marko';
const tags = [customTag];
import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, register as _register, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  _write(`<button>Count: <!>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _peekNextScope();
  const y = _dynamicTagInput(_dynamicScope, tags[0], x, void 0, _register(() => {}, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko_0_y", _scope0_id));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/2")}<div>Parent: <!>${_escapeXML(y)}${_markResumeNode(_scope0_id, "#text/3")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "#text/2!": _writeExistingScope(_dynamicScope),
    "#text/2(": tags[0]
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-args-tag-var/template.marko");