import * as _ from "@marko/runtime-tags/debug/html";
import _sections from "./tags/sections.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* count */1);
  _sections({
    section: _.attrTag({
      onClick: _._resume(function () {
        count++;
      }, "__tests__/template.marko_0/onClick", $scope0_id),
      content: _._content_resume("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html(`${_._escape(count)}${_._el_resume($scope1_id, "#text/0")}`);
        _._subscribe($count__closures, _._scope($scope1_id, {
          _: _._scope_with_id($scope0_id)
        }, "__tests__/template.marko", "3:4"));
        _._resume_branch($scope1_id);
      }, $scope0_id)
    })
  });
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
}, 1);