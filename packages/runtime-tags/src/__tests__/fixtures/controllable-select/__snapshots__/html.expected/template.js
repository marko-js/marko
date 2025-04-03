import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let value = "b";
  _$.controllable_select_value($scope0_id, "#select/0", value, _$.register(function (v) {
    value = v;
  }, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
    _$.write(`<select><option${_$.optionValueAttr("a")}>A</option><option${_$.optionValueAttr("b")}>B</option><option${_$.optionValueAttr("c")}>C</option></select>`);
  });
  _$.write(`${_$.markResumeNode($scope0_id, "#select/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/1")}</span>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});