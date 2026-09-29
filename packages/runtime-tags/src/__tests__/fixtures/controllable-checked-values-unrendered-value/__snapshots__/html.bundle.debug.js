// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let checkedValue = ["a", "z"];
	_for_of(["a", "b"], (value) => {
		const $scope1_id = _scope_id();
		_html(`<input${_attr_input_checkedValue($scope1_id, "#input/0", checkedValue, _resume((_new_checkedValue) => {
			checkedValue = _new_checkedValue;
		}, "__tests__/template.marko_1/checkedValueChange", $scope1_id), value)} type=checkbox>${_el_resume($scope1_id, "#input/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			value,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			value: "2:6",
			"ControlledHandler:#input/0": ["checkedValueChange"]
		});
	}, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	_html(`<span>${_text_resume($scope0_id, "#text/1", checkedValue)}</span>`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
