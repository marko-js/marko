import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _._html(`<div>${_._escape(x)}</div>${_._escape(y)}`);
  _._resume_branch($scope0_id);
});