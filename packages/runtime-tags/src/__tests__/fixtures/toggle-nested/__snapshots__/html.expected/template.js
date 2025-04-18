import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
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
          _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode($scope2_id, "#text/0", _$.serializeGuard($serialize, /* value1 */5))}</span>`);
          _$.serializeGuard($serialize, /* value1 */5) && _$.writeSubscribe($value_closures, _$.writeScope($scope2_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:value1": _$.serializeIf($serialize, /* input.value1 */5) && 0
          }, "__tests__/template.marko", "4:6"));
          return 0;
        }
      }, $scope1_id, "#text/0", _$.serializeGuard($serialize, /* value1 */5), _$.serializeGuard($serialize, /* value1 */5));
      _$.resumeSingleNodeConditional(() => {
        if (value2) {
          const $scope3_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode($scope3_id, "#text/0", _$.serializeGuard($serialize, /* value2 */6))}</span>`);
          _$.serializeGuard($serialize, /* value2 */6) && _$.writeSubscribe($value2_closures, _$.writeScope($scope3_id, {
            _: _$.ensureScopeWithId($scope1_id),
            "ClosureSignalIndex:value2": _$.serializeIf($serialize, /* input.value2 */6) && 0
          }, "__tests__/template.marko", "5:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", _$.serializeGuard($serialize, /* value2 */6), _$.serializeGuard($serialize, /* value2 */6));
      _$.serializeGuard($serialize, /* show,value1,value2 */3) && _$.writeScope($scope1_id, {
        _: _$.serializeIf($serialize, /* input.value1, input.value2 */2) && _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#div/0", _$.serializeGuard($serialize, /* show,value1,value2 */3), _$.serializeGuard($serialize, /* show */4), "</div>");
  _$.serializeGuard($serialize, /* show,value1,value2 */3) && _$.writeScope($scope0_id, {
    value1: _$.serializeIf($serialize, /* input.show, input.value1 */0) && value1,
    value2: _$.serializeIf($serialize, /* input.show, input.value2 */1) && value2,
    "ClosureScopes:value1": _$.serializeIf($serialize, /* input.value1 */5) && $value_closures,
    "ClosureScopes:value2": _$.serializeIf($serialize, /* input.value2 */6) && $value2_closures
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
});