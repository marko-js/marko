import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_setHtml = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  _$.resumeConditional(() => {
    if (input.show) {
      const $scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const $scope2_id = _$.nextScopeId();
          const $childScope = _$.peekNextScopeId();
          const setHtml = _child({});
          _$.setTagVar($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_setHtml/var");
          _$.writeScope($scope2_id, {
            setHtml,
            "#childScope/0": _$.writeExistingScope($childScope)
          }, "__tests__/template.marko", "2:4", {
            setHtml: "3:12"
          });
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _$.serializeGuard($serialize, 0));
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _$.serializeGuard($serialize, 0));
  const $childScope2 = _$.peekNextScopeId();
  _thing({
    value: $hoisted_setHtml
  });
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope3_id = _$.nextScopeId();
      const $childScope3 = _$.peekNextScopeId();
      const setHtml2 = _child({});
      _$.setTagVar($scope3_id, "#scopeOffset/1", $childScope3, "__tests__/template.marko_3_setHtml2/var");
      _$.writeScope($scope3_id, {
        setHtml2,
        "#childScope/0": _$.writeExistingScope($childScope3)
      }, "__tests__/template.marko", "13:2", {
        setHtml2: "14:10"
      });
      return 0;
    }
  }, $scope0_id, "#text/2");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope4_id = _$.nextScopeId();
      const $childScope4 = _$.peekNextScopeId();
      const setHtml3 = _child({});
      _$.setTagVar($scope4_id, "#scopeOffset/1", $childScope4, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope($scope4_id, {
        setHtml3,
        "#childScope/0": _$.writeExistingScope($childScope4)
      }, "__tests__/template.marko", "22:2", {
        setHtml3: "23:10"
      });
      return 0;
    }
  }, $scope0_id, "#text/3");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope5_id = _$.nextScopeId();
      _$.writeEffect($scope5_id, "__tests__/template.marko_5");
      _$.writeScope($scope5_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "26:2");
      return 0;
    }
  }, $scope0_id, "#text/4");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    input_show: _$.serializeIf($serialize, 0) && input.show,
    "#childScope/1": _$.writeExistingScope($childScope2)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});