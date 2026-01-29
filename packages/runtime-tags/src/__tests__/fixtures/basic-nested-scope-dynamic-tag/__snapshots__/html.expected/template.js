import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let count = 0;
  _._dynamic_tag($scope0_id, "#text/0", false || Child, {}, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html(`<button>${_._escape(count)}${_._el_resume($scope1_id, "#text/1")}</button>${_._el_resume($scope1_id, "#button/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_count");
    _._subscribe($count__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:count": 0
    }, "__tests__/template.marko", "4:4"));
    _._resume_branch($scope1_id);
  }, $scope0_id), 0, 0);
  _._scope($scope0_id, {
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _._resume_branch($scope0_id);
});