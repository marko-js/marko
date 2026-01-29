import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let options = [1, 2, 3];
  let value = options[0];
  _._attr_select_value($scope0_id, "#select/0", value, _._resume(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", $scope0_id), () => {
    _._html("<form><select>");
    _._for_of(options, opt => {
      const $scope1_id = _._scope_id();
      _._html(`<option${_._attr_option_value(opt)}>${_._escape(opt)}${_._el_resume($scope1_id, "#text/1")}</option>${_._el_resume($scope1_id, "#option/0")}`);
      _._scope($scope1_id, {}, "__tests__/template.marko", "5:6");
    }, v => v, $scope0_id, "#select/0", /* options */1, 1, /* options */1, "</select>", 1);
  });
  _._html(`<button type=reset>reset</button></form><div>${_._escape(value)}${_._el_resume($scope0_id, "#text/1")}</div><button class=remove>Remove option</button>${_._el_resume($scope0_id, "#button/2")}<button class=add>Add option</button>${_._el_resume($scope0_id, "#button/3")}`);
  _._script($scope0_id, "__tests__/template.marko_0_options");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    options,
    value
  }, "__tests__/template.marko", 0, {
    options: "1:6",
    value: "2:6"
  });
  _._resume_branch($scope0_id);
});