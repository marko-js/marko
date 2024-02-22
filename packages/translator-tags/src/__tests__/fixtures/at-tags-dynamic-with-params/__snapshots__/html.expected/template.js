import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer(({
  x
}, _tagVar) => {
  const _scope0_id = _nextScopeId();
  let _item;
  const _scope1_id = _nextScopeId();
  let _ifScopeId, _scope2_, _ifRenderer;
  if (x) {
    const _scope2_id = _nextScopeId();
    _item = {
      renderBody(y) {
        _write(`${_escapeXML(y)}${_markResumeNode(_scope3_id, "#text/0")}`);
      }
    };
    _writeScope(_scope2_id, _scope2_ = {
      "_": _serializedScope(_scope1_id)
    });
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer
  });
  _hello._({
    item: _item
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");