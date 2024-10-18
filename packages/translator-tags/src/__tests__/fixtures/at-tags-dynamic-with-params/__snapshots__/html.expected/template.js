import { escapeXML as _escapeXML, write as _write, createRenderer as _createRenderer, register as _register, writeScope as _writeScope, nextScopeId as _nextScopeId, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  let _item;
  const _scope1_id = _nextScopeId();
  let _ifScopeId, _ifRenderer;
  if (x) {
    const _scope2_id = _nextScopeId();
    _item = {
      renderBody: _register(/* @__PURE__ */_createRenderer(y => {
        _write(`${_escapeXML(y)}`);
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_3_renderer")
    };
    _writeScope(_scope2_id, {});
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_1_x/subscriber");
  _writeScope(_scope1_id, {
    "#text/0(": _ifRenderer,
    "#text/0!": _getScopeById(_ifScopeId),
    "_": _ensureScopeWithId(_scope0_id)
  });
  const _childScope = _peekNextScope();
  _hello({
    item: _item
  });
  _writeScope(_scope0_id, {
    "x": x,
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");