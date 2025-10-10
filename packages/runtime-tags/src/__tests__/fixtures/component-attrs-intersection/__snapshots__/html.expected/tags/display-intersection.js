import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/display-intersection.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    value
  } = input;
  let dummy = {};
  _._html(`<div>${_._escape((dummy, value))}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0))}</div>`);
  _._serialize_guard($scope0_reason, /* input.value */0) && _._scope($scope0_id, {
    dummy
  }, "__tests__/tags/display-intersection.marko", 0, {
    dummy: "2:6"
  });
  _._resume_branch($scope0_id);
});