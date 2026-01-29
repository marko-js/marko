import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  let data = _child({});
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_data/var");
  _._html(`<div>${_._escape(data)}${_._el_resume($scope0_id, "#text/2")}</div>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});