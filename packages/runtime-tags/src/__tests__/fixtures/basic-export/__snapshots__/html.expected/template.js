export const v = 123;
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<div>${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/0")}</div>`);
});