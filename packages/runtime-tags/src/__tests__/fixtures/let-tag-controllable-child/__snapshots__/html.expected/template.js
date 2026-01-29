import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let source = 1;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(1);
  _child({
    value: source,
    valueChange: _._resume(_new_source => {
      source = _new_source;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  _._html(`source=<!>${_._escape(source)}${_._el_resume($scope0_id, "#text/1")}`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});