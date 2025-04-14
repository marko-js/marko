import _counter from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let tagName = "div";
  _$.dynamicTag($scope0_id, "#text/0", tagName, {}, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _counter({});
  }, $scope0_id));
  _$.write(`<button id=changeTag></button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope($scope0_id, {
    tagName
  }, "__tests__/template.marko", 0, {
    tagName: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});