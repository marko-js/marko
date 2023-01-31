import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = _register(({
  x
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  let _item;
  const _scope1_id = _nextScopeId();
  let _ifScopeId;
  const _scope2_ = {},
    _ifRenderer = () => {};
  if (x) {
    const _scope2_id = _nextScopeId();
    _item = {
      renderBody(y) {
        _write(`${_escapeXML(y)}${_markHydrateNode(_scope3_id, "#text/0")}`);
      }
    };
    _writeHydrateScope(_scope2_id, {
      [_SYMBOL_OWNER]: _scope1_id
    }, _scope2_);
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeHydrateScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer
  }, undefined);
  _hello({
    item: _item
  });
}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);