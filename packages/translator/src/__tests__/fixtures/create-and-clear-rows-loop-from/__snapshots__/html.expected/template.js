import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, markHydrateScopeStart as _markHydrateScopeStart, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, maybeFlush as _maybeFlush, markHydrateControlEnd as _markHydrateControlEnd, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const _scope1_ = [];
  for (let _from = input.from ?? 0, _step = input.step ?? 1, _steps = (input.to - _from) / _step, _i = 0; _i <= _steps; _i++) {
    const n = _from + _i * _step;
    const _scope1_id = _nextScopeId();
    _write(`${_markHydrateScopeStart(_scope1_id)}${_escapeXML(n)}${_markHydrateNode(_scope1_id, "#text/0")}, `);
    _writeHydrateScope(_scope1_id, {
      [_SYMBOL_OWNER]: _scope0_id
    }, _scope1_);
    _maybeFlush();
  }
  _write(`${_markHydrateControlEnd(_scope0_id, "#div/0")}</div>${_markHydrateNode(_scope0_id, "#div/0")}`);
}, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-from/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);