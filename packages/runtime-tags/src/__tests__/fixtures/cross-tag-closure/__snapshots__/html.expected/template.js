import _myLet from "./tags/my-let.marko";
import * as _ from "@marko/runtime-tags/debug/html";
import _myTag from "./tags/my-tag.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  const $childScope = _._peek_scope_id();
  let count = _myLet({
    value: 0
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
  _myTag({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<button>${_._escape(count)}${_._el_resume($scope1_id, "#text/1")}</button>${_._el_resume($scope1_id, "#button/0")}`);
      _._script($scope1_id, "__tests__/template.marko_1_count");
      _._subscribe($count__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "2:1"));
      _._resume_branch($scope1_id);
    })
  });
  _._scope($scope0_id, {
    count,
    "#childScope/0": _._existing_scope($childScope),
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "1:8"
  });
});