import { writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, write as _write, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  let _ifScopeId, _ifRenderer;
  if (input.show) {
    const _scope1_id = _nextScopeId();
    const _return = 1;
    _writeScope(_scope1_id, {});
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko_1_renderer");
    _ifScopeId = _scope1_id;
  } else {
    const _scope2_id = _nextScopeId();
    const _return2 = 2;
    _writeScope(_scope2_id, {});
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}`);
  _writeScope(_scope0_id, {
    "#text/0(": _ifRenderer,
    "#text/0!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/return-tag/template.marko");