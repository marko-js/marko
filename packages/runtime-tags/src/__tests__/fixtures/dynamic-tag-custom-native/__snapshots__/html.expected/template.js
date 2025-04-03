import child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let tagName = child;
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.dynamicTag($scope0_id, "#text/1", tagName, {
    id: "dynamic"
  }, 0, 0, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope($scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});