import _comments from "./tags/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $childScope = _$.peekNextScopeId();
  _comments(input, {
    0: _$.serializeGuard($serialize, 0),
    1: _$.serializeGuard($serialize, 0),
    2: _$.serializeGuard($serialize, 0)
  });
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {
    "#childScope/0": _$.serializeIf($serialize, 0) && _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});