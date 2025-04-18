import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_setHtml = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  _$.resumeConditional(() => {
    if (input.show) {
      const $scope1_id = _$.nextScopeId();
      _$.resumeConditional(() => {
        if (input.show) {
          const $scope2_id = _$.nextScopeId();
          const $Child_scope = _$.peekNextScopeId();
          const setHtml = _$.dynamicTag($scope2_id, "#text/0", 1 && Child, {});
          _$.setTagVar($scope2_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_2_setHtml/var");
          _$.writeScope($scope2_id, {
            setHtml
          }, "__tests__/template.marko", "4:4", {
            setHtml: "5:20"
          });
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _$.serializeGuard($serialize, /* input.show */0));
      _$.writeScope($scope1_id, {
        _: _$.serializeIf($serialize, /* input.show */0) && _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _$.serializeGuard($serialize, /* input.show */0));
  const $childScope = _$.peekNextScopeId();
  _thing({
    value: $hoisted_setHtml
  });
  _$.resumeConditional(() => {
    if (true) {
      const $scope3_id = _$.nextScopeId();
      const $Child_scope2 = _$.peekNextScopeId();
      const setHtml2 = _$.dynamicTag($scope3_id, "#text/0", 1 && Child, {});
      _$.setTagVar($scope3_id, "#scopeOffset/1", $Child_scope2, "__tests__/template.marko_3_setHtml2/var");
      _$.writeScope($scope3_id, {
        setHtml2
      }, "__tests__/template.marko", "15:2", {
        setHtml2: "16:18"
      });
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 0);
  _$.resumeConditional(() => {
    if (true) {
      const $scope4_id = _$.nextScopeId();
      const $Child_scope3 = _$.peekNextScopeId();
      const setHtml3 = _$.dynamicTag($scope4_id, "#text/0", 1 && Child, {});
      _$.setTagVar($scope4_id, "#scopeOffset/1", $Child_scope3, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope($scope4_id, {
        setHtml3
      }, "__tests__/template.marko", "24:2", {
        setHtml3: "25:18"
      });
      return 0;
    }
  }, $scope0_id, "#text/3", 1, 0);
  if (true) {
    const $scope5_id = _$.nextScopeId();
    _$.writeEffect($scope5_id, "__tests__/template.marko_5");
    _$.writeScope($scope5_id, {
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "28:2");
  }
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    input_show: _$.serializeIf($serialize, /* input.show */0) && input.show,
    "#childScope/1": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});