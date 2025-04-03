import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeSingleNodeForIn(input.children, (key, text) => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode($scope1_id, "#text/0")}: <!>${_$.escapeXML(text)}${_$.markResumeNode($scope1_id, "#text/1")}</p>`);
  }, 0, $scope0_id, "#text/0");
  _$.resumeSingleNodeForIn(input.children, key => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode($scope2_id, "#text/0")}</p>`);
  }, 0, $scope0_id, "#text/1");
  _$.write("</div>");
});