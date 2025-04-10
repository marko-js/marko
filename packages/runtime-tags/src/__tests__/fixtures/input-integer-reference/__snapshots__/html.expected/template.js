import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`${_$.commentSeparator(_$.serializeGuard($serialize, 1))}${_$.escapeXML(input.value)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, 1))} ${_$.commentSeparator(_$.serializeGuard($serialize, 2))}${_$.escapeXML(input.value[0])}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, 2))}`);
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});