import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.forOf(["foo"], foo => {
    const $scope1_id = _$.nextScopeId();
    if (true) {
      const $scope2_id = _$.nextScopeId();
      let baz = foo;
      _$.write(`${_$.escapeXML(baz)}${_$.markResumeNode($scope2_id, "#text/0")}`);
      _$.writeScope($scope2_id, {}, "__tests__/template.marko", "2:3");
    }
  });
});