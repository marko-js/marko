import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let x = 1;
  const y = x * 2;
  const z = y * 3;
  _._html(`<div>${_._escape(z)}${_._el_resume($scope0_id, "#text/0")}</div>`);
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});