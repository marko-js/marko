import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div><span>${_$.escapeXML(input.x)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.x */0))}</span></div>`);
  _$.serializeGuard($serialize, /* input.x */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});