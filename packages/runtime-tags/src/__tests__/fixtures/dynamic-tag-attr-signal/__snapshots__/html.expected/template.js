import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let className = "A";
  _._html(`<p${_._attr_class(className)}>paragraph</p>${_._el_resume($scope0_id, "#p/0")}<button></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_className");
  _._scope($scope0_id, {
    className
  }, "__tests__/template.marko", 0, {
    className: "1:6"
  });
  _._resume_branch($scope0_id);
});