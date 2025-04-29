import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let value = input.value;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (value) {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode($scope1_id, "#text/0")}</span>`);
      _$.writeScope($scope1_id, {
        _: _$.ensureScopeWithId($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* state: value */1, "</div>", 1);
  _$.write(`<input${_$.controllable_input_value($scope0_id, "#input/1", value, _$.register(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_$.markResumeNode($scope0_id, "#input/1")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});