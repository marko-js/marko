import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.forOf(["foo"], foo => {
    const $scope1_id = _$.nextScopeId();
    if (true) {
      const $scope2_id = _$.nextScopeId();
      const baz = foo;
      _$.write(_$.escapeXML(baz));
    }
  });
});