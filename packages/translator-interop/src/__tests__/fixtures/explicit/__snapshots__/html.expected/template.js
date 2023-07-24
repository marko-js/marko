import { write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/debug/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<h1>Hello world</h1>");
}, "packages/translator-interop/src/__tests__/fixtures/explicit/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);