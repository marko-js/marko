import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_el3 = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el3/hoist");
  _$.resumeForTo(5, 0, 1, () => {
    const $scope1_id = _$.nextScopeId();
    const el = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode($scope1_id, "#div/0")}`);
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "1:2");
  }, 0, $scope0_id, "#text/0", 1, 0, 0, 1);
  let to = 3;
  _$.write("<hr>");
  _$.resumeForTo(to, 0, 1, () => {
    const $scope2_id = _$.nextScopeId();
    const el2 = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode($scope2_id, "#div/0")}`);
    _$.writeScope($scope2_id, {}, "__tests__/template.marko", "15:2");
  }, 0, $scope0_id, "#text/1", 1, /* state: to */1, 0, 1);
  _$.write("<hr>");
  _$.resumeForTo(3, 0, 1, i => {
    const $scope3_id = _$.nextScopeId();
    _$.write("<ul>");
    _$.resumeForTo(3, 0, 1, j => {
      const $scope4_id = _$.nextScopeId();
      const el3 = _$.nodeRef();
      _$.write(`<li${_$.attr("data-index", i * 4 + j)}></li>${_$.markResumeNode($scope4_id, "#li/0")}`);
      _$.writeScope($scope4_id, {}, "__tests__/template.marko", "30:4");
    }, 0, $scope3_id, "#ul/0", 1, 0, 0, 1);
    _$.write("</ul>");
    _$.writeScope($scope3_id, {}, "__tests__/template.marko", "28:2");
  }, 0, $scope0_id, "#text/2", 1, 0, 0, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_el3");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    $hoisted_el3
  }, "__tests__/template.marko", 0, {
    $hoisted_el3: 0
  });
  _$.resumeClosestBranch($scope0_id);
});