import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $x__closures = new Set();
  const $childScope = _._peek_scope_id();
  let x = _child({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      debugger;
      _._html(`<span>${_._escape(x)}${_._el_resume($scope1_id, "#text/0")}</span>`);
      const $return = 1;
      _._subscribe($x__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:x": 0
      }, "__tests__/template.marko", "1:2"));
      _._resume_branch($scope1_id);
      return $return;
    })
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_x/var");
  _._html(`<div>${_._escape(x)}${_._el_resume($scope0_id, "#text/2")}</div>`);
  _._scope($scope0_id, {
    "ClosureScopes:x": $x__closures,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});