import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<!>${_$.escapeXML(input.value)}${_$.markResumeNode($scope0_id, "#text/0")} <!>${_$.escapeXML(input.value[0])}${_$.markResumeNode($scope0_id, "#text/1")}`);
});