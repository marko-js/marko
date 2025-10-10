import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div a=0${_._attr("b", input.value)}></div>${_._el_resume($scope0_id, "#div/0", _._serialize_guard($scope0_reason, /* input.value */0))}`);
  _._serialize_if($scope0_reason, /* input.value */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});