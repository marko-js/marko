import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (input.value) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(input.value)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, 0))}</span>`);
      _$.serializeGuard($serialize, 0) && _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "2:4");
      return 0;
    }
  }, $scope0_id, "#div/0", _$.serializeGuard($serialize, 0), _$.serializeGuard($serialize, 0), 1);
  _$.write("</div>");
  _$.serializeGuard($serialize, 0) && _$.writeScope($scope0_id, {
    input_value: input.value
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"]
  });
});