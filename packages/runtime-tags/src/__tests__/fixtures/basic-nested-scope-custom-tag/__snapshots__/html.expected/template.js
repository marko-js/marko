import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  _child({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<button>${_._escape(count)}${_._el_resume($scope1_id, "#text/1")}</button>${_._el_resume($scope1_id, "#button/0")}`);
      _._script($scope1_id, "__tests__/template.marko_1_count");
      _._subscribe($count__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:count": 0
      }, "__tests__/template.marko", "2:2"));
      _._resume_branch($scope1_id);
    })
  });
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});