import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let open = false;
  _._html(`<details></details><details${_._attr_details_open($scope0_id, "#details/0", open)}></details>${_._el_resume($scope0_id, "#details/0")}<details${_._attr_details_open($scope0_id, "#details/1", open, undefined)}></details>${_._el_resume($scope0_id, "#details/1")}<button>Update</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});