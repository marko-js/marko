import { pushContext as _pushContext, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, write as _write, nextScopeId as _nextScopeId, writeScope as _writeScope, popContext as _popContext, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", "Hello");
  const _scope1_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(input.renderBody, null);
  _write(`${_markResumeControlEnd(_scope1_id, "#text/0")}`);
  _writeScope(_scope1_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": input.renderBody
  });
  _popContext();
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");