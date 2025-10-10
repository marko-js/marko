import _myConst from "./my-const.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  let x = _myConst({
    value: input.foo
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/child.marko_0_x/var");
  _._script($scope0_id, "__tests__/tags/child.marko_0_input_x");
  _._scope($scope0_id, {
    input,
    x,
    "#childScope/0": _._serialize_if($scope0_reason, /* input.foo */0) && _._existing_scope($childScope)
  }, "__tests__/tags/child.marko", 0, {
    input: 0,
    x: "1:10"
  });
});