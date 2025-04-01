import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  const y = 1;
  _$.write(`<div>${_$.escapeXML(x)}</div>${_$.escapeXML(y)}`);
});