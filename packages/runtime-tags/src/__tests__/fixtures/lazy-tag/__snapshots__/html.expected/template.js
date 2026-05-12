import Child from "./child.marko" with { lazy: "load" };
import _assetRuntime from "assets-runtime";
import * as _ from "@marko/runtime-tags/debug/html";
const $lazy_Child = _.withAssets(Child, _assetRuntime, "ready:__tests__/child.marko");
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  $lazy_Child({
    label: "x",
    value: input.value
  });
  (_._serialize_if($scope0_reason, /* input.value */0)) && _._scope($scope0_id, {
    "#childScope/1": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
}, 1);