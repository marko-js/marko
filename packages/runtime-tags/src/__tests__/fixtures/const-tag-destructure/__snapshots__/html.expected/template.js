import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  let z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _._html(`<div>${_._escape(x)}${_._el_resume($scope0_id, "#text/0")}</div>${_._escape(y)}${_._el_resume($scope0_id, "#text/1")}`);
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});