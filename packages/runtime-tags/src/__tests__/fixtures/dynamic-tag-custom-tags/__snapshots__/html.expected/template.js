import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let tagName = child1;
  let val = 3;
  _$.dynamicTag($scope0_id, "#text/0", tagName, {
    value: val
  });
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope($scope0_id, {
    tagName,
    val
  }, "__tests__/template.marko", 0, {
    tagName: "4:6",
    val: "5:6"
  });
  _$.resumeClosestBranch($scope0_id);
});