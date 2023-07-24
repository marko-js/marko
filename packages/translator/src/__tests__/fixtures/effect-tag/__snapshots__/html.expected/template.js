import { write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  _write("<div id=ref>0</div>");
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/effect-tag/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/effect-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);