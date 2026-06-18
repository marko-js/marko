// tags/my-input.marko
var my_input_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs(input, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<span>${_escape(input.value)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { d: {
		...input,
		checked: void 0,
		checkedValue: void 0
	} });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hi";
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	my_input_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
