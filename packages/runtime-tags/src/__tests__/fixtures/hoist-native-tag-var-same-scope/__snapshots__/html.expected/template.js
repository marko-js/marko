import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $el_getter = _._hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
  _child({
    value: $el_getter
  });
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _child({
    value: $el_getter
  });
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});