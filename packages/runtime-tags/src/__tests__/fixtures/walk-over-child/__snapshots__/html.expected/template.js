import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write("<section>");
  _child({});
  _$.write(`</section><div>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</div>`);
  _$.resumeClosestBranch($scope0_id);
});