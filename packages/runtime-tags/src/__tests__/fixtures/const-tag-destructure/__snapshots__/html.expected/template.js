import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _$.write(`<div>${_$.escapeXML(x)}</div>${_$.escapeXML(y)}`);
  _$.resumeClosestBranch($scope0_id);
});