import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let options = [1, 2, 3];
  let value = options[0];
  _$.controllable_select_value($scope0_id, "#select/0", value, _$.register(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
    _$.write("<form><select>");
    _$.resumeSingleNodeForOf(options, opt => {
      const $scope1_id = _$.nextScopeId();
      _$.write(`<option${_$.optionValueAttr(opt)}>${_$.escapeXML(opt)}${_$.markResumeNode($scope1_id, "#text/1")}</option>${_$.markResumeNode($scope1_id, "#option/0")}`);
    }, v => v, $scope0_id, "#select/0", 1);
    _$.write("</select>");
  });
  _$.write(`<button type=reset>reset</button></form><div>${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/1")}</div><button class=remove>Remove option</button>${_$.markResumeNode($scope0_id, "#button/2")}<button class=add>Add option</button>${_$.markResumeNode($scope0_id, "#button/3")}`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_options");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    options,
    value
  }, "__tests__/template.marko", 0, {
    options: "1:6",
    value: "2:6"
  });
  _$.resumeClosestBranch($scope0_id);
});