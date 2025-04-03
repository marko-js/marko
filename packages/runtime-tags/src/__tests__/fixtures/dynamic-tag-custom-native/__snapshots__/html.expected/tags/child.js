import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    id
  } = input;
  _$.write(`<div>Id is <!>${_$.escapeXML(id)}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
});