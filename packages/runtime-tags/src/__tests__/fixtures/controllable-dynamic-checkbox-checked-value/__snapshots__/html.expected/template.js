import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  let checkedValue = "a";
  const $checkedValueChange = _._resume(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
  _._html(`<input${_._attr_input_checkedValue($scope0_id, "#input/0", checkedValue, $checkedValueChange, "a")} type=radio>${_._el_resume($scope0_id, "#input/0")}`);
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html(`<input${_._attr_input_checkedValue($scope1_id, "#input/0", checkedValue, $checkedValueChange, "b")} type=radio>${_._el_resume($scope1_id, "#input/0")}`);
      _._script($scope1_id, "__tests__/template.marko_1");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "5:2");
      return 0;
    }
  }, $scope0_id, "#text/1", 1, /* show */1, /* show */1, 0, 1);
  _._html(`<input${_._attr_input_checkedValue($scope0_id, "#input/2", checkedValue, $checkedValueChange, "c")} type=radio>${_._el_resume($scope0_id, "#input/2")}<span>${_._escape(checkedValue)}${_._el_resume($scope0_id, "#text/3")}</span><button>Toggle</button>${_._el_resume($scope0_id, "#button/4")}`);
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    show,
    checkedValue,
    $checkedValueChange
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    checkedValue: "2:6",
    $checkedValueChange: 0
  });
  _._resume_branch($scope0_id);
});