import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  const y = x * 2;
  const z = y * 3;
  _._html(`<div>${_._escape(z)}</div>`);
  _._resume_branch($scope0_id);
});