import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    children
  } = input;
  _$.write("<div>");
  _$.resumeSingleNodeForOf(children, child => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(child.text)}${_$.markResumeNode($scope1_id, "#text/0")}`);
  }, function (c) {
    return c.id;
  }, $scope0_id, "#div/0", 1);
  _$.write("</div>");
});