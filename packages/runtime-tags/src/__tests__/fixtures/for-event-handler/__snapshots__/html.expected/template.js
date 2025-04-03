import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let num = 0;
  _$.resumeSingleNodeForTo(num, 0, 1, i => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<button>${_$.escapeXML(i)}${_$.markResumeNode($scope1_id, "#text/1")}</button>${_$.markResumeNode($scope1_id, "#button/0")}`);
    _$.writeEffect($scope1_id, "__tests__/template.marko_1_num");
    _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }, 0, $scope0_id, "#text/0");
  _$.writeScope($scope0_id, {
    num
  }, "__tests__/template.marko", 0, {
    num: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});