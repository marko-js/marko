import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.resumeForTo(3, 0, 1, index => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(index)}-<!>${_$.escapeXML(count)}${_$.markResumeNode($scope1_id, "#text/1")}`);
    _$.writeScope($scope1_id, {
      _: _$.ensureScopeWithId($scope0_id)
    }, "__tests__/template.marko", "3:2");
  }, 0, $scope0_id, "#text/0", /* state: count */1, 0);
  _$.write(`<button>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});