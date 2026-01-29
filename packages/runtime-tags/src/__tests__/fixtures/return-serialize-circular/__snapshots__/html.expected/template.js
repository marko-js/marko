import _setter from "./tags/setter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.value */1: /* count */1
  });
  let setCount = _setter({
    value: count,
    valueChange: _._resume(_new_count => {
      count = _new_count;
    }, "__tests__/template.marko_0/valueChange", $scope0_id)
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_setCount/var");
  _._html(`<div>${_._escape(count)}${_._el_resume($scope0_id, "#text/2")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_setCount");
  _._scope($scope0_id, {
    setCount,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    setCount: "2:9"
  });
  _._resume_branch($scope0_id);
});