import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _ = _$.$global().__flush__ = _$.register(($global, html) => `BEFORE-${$global.runtimeId}-${html}-AFTER`, "__tests__/template.marko_0/_");
  _$.write("<h1>Hello World</h1>");
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);