import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const btn = _._el($scope0_id, "__tests__/template.marko_0/#button");
  let count = 0;
  _._html(`<button${_._attr("data-count", count)}>Initial</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});