import { markResumeNode as _markResumeNode, write as _write, markResumeScopeStart as _markResumeScopeStart, escapeXML as _escapeXML, serializedScope as _serializedScope, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const outer = true;
  const inner = true;
  const count = 0;
  _write(`<div><button id=outer></button>${_markResumeNode(_scope0_id, "#button/0")}`);
  let _scope1_, _ifRenderer2;
  if (outer) {
    const _scope1_id = _nextScopeId();
    _write(`${_markResumeScopeStart(_scope1_id)}<button id=inner></button>${_markResumeNode(_scope1_id, "#button/0")}`);
    let _ifScopeId, _scope2_, _ifRenderer;
    if (inner) {
      const _scope2_id = _nextScopeId();
      _write(`<button id=count>${_escapeXML(count)}${_markResumeNode(_scope2_id, "#text/1")}</button>${_markResumeNode(_scope2_id, "#button/0")}`);
      _writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count");
      _writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_count/subscriber");
      _writeScope(_scope2_id, _scope2_ = {
        "_": _serializedScope(_scope1_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId)}`);
    _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_inner");
    _writeScope(_scope1_id, _scope1_ = {
      "#text/1!": _scope2_,
      "#text/1(": _ifRenderer,
      "_": _serializedScope(_scope0_id)
    });
    _register(_ifRenderer2 = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_1_renderer");
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/1")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko_0_outer");
  _writeScope(_scope0_id, {
    "outer": outer,
    "count": count,
    "inner": inner,
    "#text/1!": _scope1_,
    "#text/1(": _ifRenderer2
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/toggle-nested-2/template.marko");