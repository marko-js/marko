import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_setHtml3 = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml3/hoist");
  _$.resumeForTo(5, 0, 1, () => {
    const $scope1_id = _$.nextScopeId();
    const $dynamicScope = _$.peekNextScope();
    const setHtml = _$.dynamicTag($scope1_id, "#text/0", 1 && Child, {}, 0, 0, 1);
    _$.setTagVar($scope1_id, "#scopeOffset/1", $dynamicScope, "__tests__/template.marko_1_setHtml/var");
    _$.writeScope($scope1_id, {
      setHtml
    }, "__tests__/template.marko", "3:2");
  }, 0, $scope0_id, "#text/0");
  let to = 3;
  _$.write("<hr>");
  _$.resumeForTo(to, 0, 1, () => {
    const $scope2_id = _$.nextScopeId();
    const $dynamicScope2 = _$.peekNextScope();
    const setHtml2 = _$.dynamicTag($scope2_id, "#text/0", 1 && Child, {}, 0, 0, 1);
    _$.setTagVar($scope2_id, "#scopeOffset/1", $dynamicScope2, "__tests__/template.marko_2_setHtml2/var");
    _$.writeScope($scope2_id, {
      setHtml2
    }, "__tests__/template.marko", "14:2");
  }, 0, $scope0_id, "#text/1");
  _$.write("<hr>");
  _$.resumeSingleNodeForTo(3, 0, 1, i => {
    const $scope3_id = _$.nextScopeId();
    _$.write("<ul>");
    _$.resumeForTo(3, 0, 1, j => {
      const $scope4_id = _$.nextScopeId();
      const $dynamicScope3 = _$.peekNextScope();
      const setHtml3 = _$.dynamicTag($scope4_id, "#text/0", 1 && Child, {}, 0, 0, 1);
      _$.setTagVar($scope4_id, "#scopeOffset/1", $dynamicScope3, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope($scope4_id, {
        setHtml3
      }, "__tests__/template.marko", "26:4");
    }, 0, $scope3_id, "#ul/0", 1);
    _$.write("</ul>");
  }, 0, $scope0_id, "#text/2");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml3");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    $hoisted_setHtml3
  }, "__tests__/template.marko", 0, {
    $hoisted_setHtml3: "27:20"
  });
  _$.resumeClosestBranch($scope0_id);
});