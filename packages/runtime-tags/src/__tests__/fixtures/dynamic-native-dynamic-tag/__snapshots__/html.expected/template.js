import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let tagName = "span";
  let className = "A";
  _$.dynamicTag($scope0_id, "#text/0", tagName, {
    class: className
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("body content");
  }, $scope0_id));
  _$.write(`<button></button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_tagName");
  _$.writeScope($scope0_id, {
    tagName,
    className
  }, "__tests__/template.marko", 0, {
    tagName: "1:6",
    className: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});