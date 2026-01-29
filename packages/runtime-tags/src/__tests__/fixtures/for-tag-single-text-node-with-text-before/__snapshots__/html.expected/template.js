import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let children = [1];
  _._html(`<div${_._attr("data-children", children.length)}>Before `);
  _._for_of(children, () => {
    const $scope1_id = _._scope_id();
    _._html("Child");
    _._scope($scope1_id, {}, "__tests__/template.marko", "4:4");
  }, 0, $scope0_id, "#text/1");
  _._html(`</div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_children");
  _._scope($scope0_id, {
    children
  }, "__tests__/template.marko", 0, {
    children: "1:6"
  });
  _._resume_branch($scope0_id);
});