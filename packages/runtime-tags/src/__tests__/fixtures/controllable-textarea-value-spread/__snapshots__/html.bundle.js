// tags/my-textarea.marko
var my_textarea_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $textarea_input = input;
	_html(`<textarea${_attrs($textarea_input, "a", $scope0_id, "textarea")}>${_attr_textarea_value($scope0_id, "a", $textarea_input.value, $textarea_input.valueChange)}</textarea>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	const $childScope = _peek_scope_id();
	my_textarea_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "b")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
