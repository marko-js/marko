import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  const $return = _._resume(function (html) {
    (el => el())(_._el_read_error).innerHTML = html;
  }, "__tests__/tags/child.marko_0/_return", $scope0_id);
  _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
  return $return;
});