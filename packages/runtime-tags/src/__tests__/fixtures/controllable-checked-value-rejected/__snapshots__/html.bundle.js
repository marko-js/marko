// template.marko
function $checkedValueChange2() {}
function $checkedValueChange() {}
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let picked = "a";
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", picked, $checkedValueChange, "a")} type=radio name=pick>${_el_mark($scope0_id, "a")}<input${_attr_input_checkedValue($scope0_id, "b", picked, $checkedValueChange2, "b")} type=radio name=pick>${_el_mark($scope0_id, "b")}<span>${_escape(picked)}</span>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
