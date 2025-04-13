import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const el = _$.nodeRef();
  _$.write(`<div></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope1_id = _$.nextScopeId();
      _$.writeEffect($scope1_id, "__tests__/template.marko_1");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "2:2");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});