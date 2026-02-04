import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $setHtml__closures = new Set();
  const $Child_scope = _._peek_scope_id();
  let setHtml = _._dynamic_tag($scope0_id, "#text/0", 1 && Child, {}, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._script($scope1_id, "__tests__/template.marko_1_setHtml");
    _._subscribe($setHtml__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:setHtml": 0
    }, "__tests__/template.marko", "3:4"));
    _._resume_branch($scope1_id);
  }, $scope0_id));
  _._var($scope0_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_0_setHtml/var");
  _._scope($scope0_id, {
    setHtml,
    "ClosureScopes:setHtml": $setHtml__closures
  }, "__tests__/template.marko", 0, {
    setHtml: "3:16"
  });
});