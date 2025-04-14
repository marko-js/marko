import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.resumeSingleNodeForOf(input.children, child => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, 0))}`);
    _$.serializeGuard($serialize, 0) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
  }, function (c) {
    return c.id;
  }, $scope0_id, "#text/0", _$.serializeGuard($serialize, 0), _$.serializeGuard($serialize, 0));
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});