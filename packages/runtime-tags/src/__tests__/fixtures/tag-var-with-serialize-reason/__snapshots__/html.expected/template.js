import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 1;
  _._html(`<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* count */1);
  let x = _child({
    value: count
  });
  _._var($scope0_id, "#scopeOffset/3", $childScope, "__tests__/template.marko_0_x/var");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "#childScope/2": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});