import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $value_closures = new Set();
  const $value2_closures = new Set();
  const {
    show,
    value1,
    value2
  } = input;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const $scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (value1) {
          const $scope2_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode($scope2_id, "#text/0")}</span>`);
          _$.writeSubscribe($value_closures, _$.writeScope($scope2_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:value1": 0
          }, "__tests__/template.marko", "4:6"));
          return 0;
        }
      }, $scope1_id, "#text/0", 1);
      _$.resumeSingleNodeConditional(() => {
        if (value2) {
          const $scope3_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode($scope3_id, "#text/0")}</span>`);
          _$.writeSubscribe($value2_closures, _$.writeScope($scope3_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:value2": 0
          }, "__tests__/template.marko", "5:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", 1);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeScope($scope0_id, {
    value1,
    value2,
    "ClosureScopes:value1": $value_closures,
    "ClosureScopes:value2": $value2_closures
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
});