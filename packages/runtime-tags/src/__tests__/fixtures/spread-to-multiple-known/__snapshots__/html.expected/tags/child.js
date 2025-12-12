import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<input${_._attr_class(input.class)}${_._attr("value", input.value)}>${_._el_resume($scope0_id, "#input/0", _._serialize_guard($scope0_reason, /* input.class, input.value */0))}`);
  _._serialize_if($scope0_reason, /* input.class, input.value */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});