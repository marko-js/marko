import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let open = false;
  _._html(`<dialog></dialog><dialog${_._attr_dialog_open($scope0_id, "#dialog/0", open)}></dialog>${_._el_resume($scope0_id, "#dialog/0")}<dialog${_._attr_dialog_open($scope0_id, "#dialog/1", open, undefined)}></dialog>${_._el_resume($scope0_id, "#dialog/1")}<button>Update</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
}, 1);