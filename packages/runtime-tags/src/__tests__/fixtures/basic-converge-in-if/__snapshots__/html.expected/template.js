import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let a = 0;
  let b = 0;
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(a + b)}${_$.markResumeNode($scope1_id, "#text/0")}`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, 0);
  _$.resumeClosestBranch($scope0_id);
});