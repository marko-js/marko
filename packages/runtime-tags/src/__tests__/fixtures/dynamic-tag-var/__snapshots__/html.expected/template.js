import child from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const data1 = child({});
  const $inputshowchild_scope = _$.peekNextScopeId();
  const data2 = _$.dynamicTag($scope0_id, "#text/2", input.show && child, {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/3", $inputshowchild_scope, "__tests__/template.marko_0_data2/var");
  const $inputdynamic_scope = _$.peekNextScopeId();
  const data3 = _$.dynamicTag($scope0_id, "#text/4", input.dynamic, {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/5", $inputdynamic_scope, "__tests__/template.marko_0_data3/var");
  const $inputshowdiv_scope = _$.peekNextScopeId();
  const el1 = _$.dynamicTag($scope0_id, "#text/6", input.show && "div", {}, 0, 0, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/7", $inputshowdiv_scope, "__tests__/template.marko_0_el1/var");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});