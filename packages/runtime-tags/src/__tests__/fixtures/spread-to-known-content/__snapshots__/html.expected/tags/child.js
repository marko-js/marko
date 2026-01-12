import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<p${_._attr_class(input.class)}>`);
  _._dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.content */2));
  _._html(`</p>${_._el_resume($scope0_id, "#p/0", _._serialize_guard($scope0_reason, /* input.class */1))}`);
  _._serialize_if($scope0_reason, /* input.class, input.content */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});