import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<button>");
  _$.resumeConditional(() => {
    if (input.show) {
      const $scope1_id = _$.nextScopeId();
      _$.write("<span id=count>0</span>");
      _$.serializeGuard($serialize, /* input.show */0) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
      return 0;
    }
  }, $scope0_id, "#button/0", _$.serializeGuard($serialize, /* input.show */0), 1, "</button>", 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});