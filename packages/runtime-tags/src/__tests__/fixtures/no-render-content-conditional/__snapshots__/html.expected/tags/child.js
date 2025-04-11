import _myConst from "./my-const.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $childScope = _$.peekNextScopeId();
  const x = _myConst({
    value: input.foo
  });
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/child.marko_0_x/var");
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_input_x");
  _$.writeScope($scope0_id, {
    input,
    x,
    "#childScope/0": _$.serializeIf($serialize, 0) && _$.writeExistingScope($childScope)
  }, "__tests__/tags/child.marko", 0, {
    input: 0,
    x: "1:10"
  });
});