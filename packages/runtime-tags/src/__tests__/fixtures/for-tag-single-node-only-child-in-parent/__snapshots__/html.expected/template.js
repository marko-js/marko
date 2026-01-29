import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let children = [1];
  _._html(`<div${_._attr("data-children", children.length)}>`);
  _._for_of(children, () => {
    const $scope1_id = _._scope_id();
    _._html("<div></div>");
    _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, 0, $scope0_id, "#div/0", /* children */1, /* children */1, /* children */1, "</div>", 1);
  _._script($scope0_id, "__tests__/template.marko_0_children");
  _._scope($scope0_id, {
    children
  }, "__tests__/template.marko", 0, {
    children: "1:6"
  });
  _._resume_branch($scope0_id);
});