import * as _ from "@marko/runtime-tags/debug/html";
import _myButton from "./tags/my-button.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $clickCount__closures = new Set();
  let clickCount = 0;
  const $childScope = _._peek_scope_id();
  _myButton({
    onClick: _._resume(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", $scope0_id),
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`${_._escape(clickCount)}${_._el_resume($scope1_id, "#text/0")}`);
      _._subscribe($clickCount__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:clickCount": 0
      }, "__tests__/template.marko", "2:2"));
      _._resume_branch($scope1_id);
    })
  });
  _._scope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount__closures,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});