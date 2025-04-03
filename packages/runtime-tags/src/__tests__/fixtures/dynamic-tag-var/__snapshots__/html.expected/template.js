import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $childScope = _$.peekNextScope();
  const data1 = child({});
  _$.setTagVar($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_data1/var");
  const $dynamicScope = _$.peekNextScope();
  const data2 = _$.dynamicTag($scope0_id, "#text/2", input.show && child, {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/3", $dynamicScope, "__tests__/template.marko_0_data2/var");
  const $dynamicScope2 = _$.peekNextScope();
  const data3 = _$.dynamicTag($scope0_id, "#text/4", input.dynamic, {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/5", $dynamicScope2, "__tests__/template.marko_0_data3/var");
  const $dynamicScope3 = _$.peekNextScope();
  const el1 = _$.dynamicTag($scope0_id, "#text/6", input.show && "div", {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/7", $dynamicScope3, "__tests__/template.marko_0_el1/var");
  _$.writeScope($scope0_id, {
    "#childScope/0": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0);
});