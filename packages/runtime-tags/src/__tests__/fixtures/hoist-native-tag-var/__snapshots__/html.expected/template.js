import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_el = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el/hoist");
  _$.resumeConditional(() => {
    if (input.show) {
      const $scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const $scope2_id = _$.nextScopeId();
          const el = _$.nodeRef($scope2_id, "__tests__/template.marko_2/#div");
          _$.write(`<div></div>${_$.markResumeNode($scope2_id, "#div/0")}`);
          _child({
            value: el
          });
          _$.writeScope($scope2_id, {}, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _$.serializeGuard($serialize, /* input.show */0));
      _$.writeScope($scope1_id, {
        _: _$.serializeIf($serialize, /* input.show */0) && _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _$.serializeGuard($serialize, /* input.show */0));
  const $childScope = _$.peekNextScopeId();
  _child({
    value: $hoisted_el
  });
  _$.write("<hr>");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope3_id = _$.nextScopeId();
      const el2 = _$.nodeRef();
      _$.write(`<div></div>${_$.markResumeNode($scope3_id, "#div/0")}`);
      _$.writeScope($scope3_id, {}, "__tests__/template.marko", "19:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 0);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    input_show: _$.serializeIf($serialize, /* input.show */0) && input.show,
    "#childScope/1": _$.writeExistingScope($childScope)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});