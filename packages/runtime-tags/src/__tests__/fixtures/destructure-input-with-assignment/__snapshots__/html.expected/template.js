import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $value__closures = new Set();
  let value = 1;
  const $childScope = _._peek_scope_id();
  _child({
    value: value,
    valueChange: _._resume(_new_value => {
      value = _new_value;
    }, "__tests__/template.marko_0/valueChange", $scope0_id),
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(value)}${_._el_resume($scope1_id, "#text/0")}`);
      _._subscribe($value__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:value": 0
      }, "__tests__/template.marko", "3:1"));
      _._resume_branch($scope1_id);
    }, $scope0_id)
  });
  _._scope($scope0_id, {
    value,
    "ClosureScopes:value": $value__closures,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    value: "1:5"
  });
  _._resume_branch($scope0_id);
});