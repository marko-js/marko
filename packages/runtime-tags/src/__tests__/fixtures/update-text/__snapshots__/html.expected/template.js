import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`Static ${_$.commentSeparator(_$.serializeGuard($serialize, 0))}${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, 0))}`);
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});