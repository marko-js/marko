import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $el = _._el($scope0_id, "__tests__/template.marko_0/#div");
  _child({
    value: $el
  });
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _child({
    value: $el
  });
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});