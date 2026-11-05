// template.marko
const initialValue = ["a"];
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = initialValue;
	_html(`<input${_attr_input_checkedValue($scope0_id, "a", initialValue, 0, "a")} type=checkbox><input${_attr_input_checkedValue($scope0_id, "b", initialValue, 0, "b")} type=checkbox><input${_attr_input_checkedValue($scope0_id, "c", value, 0, "b")} type=checkbox>${_el_mark($scope0_id, "c")}<input${_attr_input_checkedValue($scope0_id, "d", value, void 0, "b")} type=checkbox>${_el_mark($scope0_id, "d")}<button>Update</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
