// tags/my-input.marko
var my_input_default = _template("__tests__/tags/my-input.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attrs(input, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/tags/my-input.marko_0_input");
	writeScope($scope0_id, { input: {
		...input,
		checked: undefined,
		checkedValue: undefined
	} }, "__tests__/tags/my-input.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hi";
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	my_input_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
