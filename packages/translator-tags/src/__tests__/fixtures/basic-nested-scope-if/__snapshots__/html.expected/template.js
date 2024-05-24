import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _write("<div>");
  let _ifScopeId, _ifRenderer;
  if (clickCount < 3) {
    const _scope1_id = _nextScopeId();
    _write(`<button>${_escapeXML(clickCount)}${_markResumeNode(_scope1_id, "#text/1")}</button>${_markResumeNode(_scope1_id, "#button/0")}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_clickCount");
    _writeScope(_scope1_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_1_renderer", _scope0_id);
    _ifScopeId = _scope1_id;
  } else {
    const _scope2_id = _nextScopeId();
    _write(`<span>The button was clicked <!>${_escapeXML(clickCount)}${_markResumeNode(_scope2_id, "#text/0")} times.</span>`);
    _writeScope(_scope2_id, {
      "_": _ensureScopeWithId(_scope0_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko_2_renderer", _scope0_id);
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope0_id, "#text/0", _ifScopeId)}</div>`);
  _writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#text/0(": _ifRenderer,
    "#text/0!": _getScopeById(_ifScopeId)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-if/template.marko");