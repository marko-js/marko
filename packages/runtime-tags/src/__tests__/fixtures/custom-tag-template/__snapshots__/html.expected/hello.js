import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/hello.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`Hello <!>${_$.escapeXML(input.name)}${_$.markResumeNode($scope0_id, "#text/0")}!`);
});