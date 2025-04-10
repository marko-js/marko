import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(JSON.stringify(input))}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, 0))}</div>`);
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});