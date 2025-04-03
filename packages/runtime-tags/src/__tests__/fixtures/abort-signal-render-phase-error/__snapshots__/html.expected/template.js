import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML((() => {
    throw new Error("Cannot use $signal in a server render.");
  })().onabort = () => {})}</div>`);
  _$.resumeClosestBranch($scope0_id);
});