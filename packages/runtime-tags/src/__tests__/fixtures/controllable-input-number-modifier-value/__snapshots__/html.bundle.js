// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<input${_attr_input_value($scope0_id, "a", value, _resume((_new_value) => {
		value = parseInt(_new_value);
	}, "a0", $scope0_id))} type=number>${_el_resume($scope0_id, "a")}<span>${_text_resume($scope0_id, "b", value)} ${_text_resume($scope0_id, "c", typeof value, 2)}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
