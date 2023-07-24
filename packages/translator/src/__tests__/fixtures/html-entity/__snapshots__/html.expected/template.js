import { write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>&lt;div&gt;</div>");
}, "packages/translator/src/__tests__/fixtures/html-entity/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);