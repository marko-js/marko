const server_x = 1;
const x = typeof server_x === "undefined" ? client_x : server_x;
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div><span>${_$.escapeXML(x)}</span></div>`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);