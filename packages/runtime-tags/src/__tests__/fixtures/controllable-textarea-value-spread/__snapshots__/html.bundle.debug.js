// tags/my-textarea.marko
var my_textarea_default = _template("__tests__/tags/my-textarea.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $textarea_input = input;
	_html(`<textarea${_attrs($textarea_input, "#textarea/0", $scope0_id, "textarea")}>${_attr_textarea_value($scope0_id, "#textarea/0", $textarea_input.value, $textarea_input.valueChange, 1)}</textarea>${_el_resume($scope0_id, "#textarea/0")}`);
	_script($scope0_id, "__tests__/tags/my-textarea.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/my-textarea.marko", 0, {
		"ControlledHandler:#textarea/0": ["...input", "1:14"],
		"EventAttributes:#textarea/0": ["...input", "1:14"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	const $childScope = _peek_scope_id();
	my_textarea_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "#text/1", value)}</span>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
