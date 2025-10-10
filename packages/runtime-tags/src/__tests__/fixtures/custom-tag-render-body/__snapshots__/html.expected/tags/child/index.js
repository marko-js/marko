import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child/index.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    name,
    content
  } = input;
  _._html(`${_._sep(_._serialize_guard($scope0_reason, /* input.name */1))}${_._escape(name)}${_._el_resume($scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.name */1))}`);
  _._dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.content */2));
  _._serialize_if($scope0_reason, /* input.name, input.content */0) && _._scope($scope0_id, {}, "__tests__/tags/child/index.marko", 0);
});