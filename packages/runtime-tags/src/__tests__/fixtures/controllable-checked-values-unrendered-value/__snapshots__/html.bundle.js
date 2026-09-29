// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = ["a", "z"];
	_for_of(["a", "b"], (value) => {
		const $scope1_id = _scope_id();
		_html(`<input${_attr_input_checkedValue($scope1_id, "a", checkedValue, _resume((_new_checkedValue) => {
			checkedValue = _new_checkedValue;
		}, "a0", $scope1_id), value)} type=checkbox>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			c: value,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0, 0, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "b", checkedValue)}</span>`);
	_scope($scope0_id, {});
}, 1);
