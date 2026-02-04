import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.content */0));
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  const $return = _._resume(() => html => (el => el())(_._el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
  _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
  return $return;
});