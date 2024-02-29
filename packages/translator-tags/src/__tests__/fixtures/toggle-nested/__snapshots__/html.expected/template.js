import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, markResumeScopeStart as _markResumeScopeStart, markResumeControlEnd as _markResumeControlEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    show,
    value1,
    value2
  } = input;
  _write("<div>");
  let _scope1_, _ifRenderer3;
  if (show) {
    const _scope1_id = _nextScopeId();
    let _ifScopeId, _scope2_, _ifRenderer;
    if (value1) {
      const _scope2_id = _nextScopeId();
      _write(`<span>${_escapeXML(value1)}${_markResumeNode(_scope2_id, "#text/0")}</span>`);
      _writeScope(_scope2_id, _scope2_ = {
        "_": _serializedScope(_scope1_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_2_renderer");
      _ifScopeId = _scope2_id;
    }
    _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
    let _ifScopeId2, _scope3_, _ifRenderer2;
    if (value2) {
      const _scope3_id = _nextScopeId();
      _write(`<span>${_escapeXML(value2)}${_markResumeNode(_scope3_id, "#text/0")}</span>`);
      _writeScope(_scope3_id, _scope3_ = {
        "_": _serializedScope(_scope1_id)
      });
      _register(_ifRenderer2 = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_3_renderer");
      _ifScopeId2 = _scope3_id;
    }
    _write(`${_markResumeScopeStart(_scope1_id)}${_markResumeControlSingleNodeEnd(_scope1_id, "#text/1", _ifScopeId2)}`);
    _writeScope(_scope1_id, _scope1_ = {
      "#text/0!": _scope2_,
      "#text/0(": _ifRenderer,
      "#text/1!": _scope3_,
      "#text/1(": _ifRenderer2,
      "_": _serializedScope(_scope0_id)
    });
    _register(_ifRenderer3 = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko_1_renderer");
  }
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}</div>`);
  _writeScope(_scope0_id, {
    "#text/0!": _scope1_,
    "#text/0(": _ifRenderer3
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/toggle-nested/template.marko");