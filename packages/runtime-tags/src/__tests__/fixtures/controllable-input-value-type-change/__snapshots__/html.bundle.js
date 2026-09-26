// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "5";
	let type = "number";
	_html(`<input${_attr_input_value($scope0_id, "a", value, _resume((_new_value) => {
		value = _new_value;
	}, "a0", $scope0_id))}${_attr("type", type)}>${_el_resume($scope0_id, "a")}<input${_attrs({
		type,
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "a1", $scope0_id)
	}, "b", $scope0_id, "input")}>${_el_resume($scope0_id, "b")}<button></button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: value,
		e: type
	});
}, 1);
