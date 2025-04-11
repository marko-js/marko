import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const x = _$.nextTagId();
  const y = _$.nextTagId();
  _$.write(`<div>${_$.escapeXML(x)}</div>${_$.escapeXML(y)}`);
});