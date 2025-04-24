import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let hide = undefined;
  _$.resumeConditional(() => {
    if (!hide) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<button></button>${_$.markResumeNode($scope1_id, "#button/0")}`);
      _$.writeEffect($scope1_id, "__tests__/template.marko_1");
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "2:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, /* state: hide */1, 0, 1);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});