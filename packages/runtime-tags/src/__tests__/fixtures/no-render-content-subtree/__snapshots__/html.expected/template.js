import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const output = _$.nodeRef($scope0_id, "__tests__/template.marko_0/#div");
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _$.resumeConditional(() => {
    if (input.show) {
      const $scope1_id = _$.nextScopeId();
      _child({
        foo: "bar",
        output: output
      });
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:1");
      return 0;
    }
  }, $scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.show */0), _$.serializeGuard($serialize, /* input.show */0), 0, 1);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});