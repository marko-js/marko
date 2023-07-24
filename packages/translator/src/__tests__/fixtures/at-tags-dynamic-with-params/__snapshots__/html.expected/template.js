import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = _register(({
  x
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  let _item;
  const _scope1_id = _nextScopeId();
  let _ifScopeId, _scope2_, _ifRenderer;
  if (x) {
    const _scope2_id = _nextScopeId();
    _item = {
      renderBody({
        value: [y]
      }) {
        _write(`${_escapeXML(y)}${_markResumeNode(_scope3_id, "#text/0")}`);
      }
    };
    _writeScope(_scope2_id, _scope2_ = {
      [_SYMBOL_OWNER]: _scope1_id
    });
    _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer
  });
  _hello({
    item: _item
  });
}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);