import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let children = [1];
  _$.write(`<div${_$.attr("data-children", children.length)}>`);
  _$.resumeForOf(children, () => {
    const $scope1_id = _$.nextScopeId();
    _$.write("<div></div>");
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, 0, $scope0_id, "#div/0", /* state: children */1, /* state: children, children.length */1, "</div>", 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_children");
  _$.writeScope($scope0_id, {
    children
  }, "__tests__/template.marko", 0, {
    children: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});