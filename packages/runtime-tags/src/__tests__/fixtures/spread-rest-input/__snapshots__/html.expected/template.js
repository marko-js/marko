import childTag from "./tags/child.marko";
const Child = childTag;
import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div id=known>");
  const $childScope = _._peek_scope_id();
  _child(input);
  _._html("</div><div id=dynamic>");
  _._dynamic_tag($scope0_id, "#text/1", Child, input, 0, 0, _._serialize_guard($scope0_reason, /* input */0));
  _._html("</div>");
  _._serialize_if($scope0_reason, /* input */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});