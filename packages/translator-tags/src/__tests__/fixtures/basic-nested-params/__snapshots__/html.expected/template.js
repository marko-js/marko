import { markResumeNode as _markResumeNode, write as _write, escapeXML as _escapeXML, ensureScopeWithId as _ensureScopeWithId, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _child from "./components/child.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 2;
  _write(`<button>Inc</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  const _childScope2 = _peekNextScope();
  _child({
    value: x,
    renderBody: _register(/* @__PURE__ */_createRenderer(outer => {
      const _scope1_id = _nextScopeId();
      const _childScope = _peekNextScope();
      _child({
        value: y,
        renderBody: _register(/* @__PURE__ */_createRenderer(inner => {
          const _scope2_id = _nextScopeId();
          _write(`<div>${_escapeXML(outer)}${_markResumeNode(_scope2_id, "#text/0")}.<!>${_escapeXML(inner)}${_markResumeNode(_scope2_id, "#text/1")}</div>`);
          _writeEffect(_scope2_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_outer/subscriber");
          _writeScope(_scope2_id, {
            "_": _ensureScopeWithId(_scope1_id)
          });
        }), "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_2_renderer", _scope1_id)
      });
      _writeEffect(_scope1_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_y/subscriber");
      _writeScope(_scope1_id, {
        "outer": outer,
        "#childScope/0": _writeExistingScope(_childScope),
        "_": _ensureScopeWithId(_scope0_id)
      });
    }), "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_1_renderer", _scope0_id)
  });
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x,
    "y": y,
    "#childScope/1": _writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-nested-params/template.marko");