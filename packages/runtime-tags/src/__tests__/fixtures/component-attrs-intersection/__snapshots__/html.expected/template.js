import _displayIntersection from "./tags/display-intersection.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* count */1);
  _displayIntersection({
    value: count
  });
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});