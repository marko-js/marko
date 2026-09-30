// tags/custom-input.marko
var custom_input_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange && _resume(($next) => {
		input.valueChange(parseInt($next));
	}, "b0", $scope0_id))} type=number>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		d: _serialize_if($scope0_reason, 0) && input.value,
		e: input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	custom_input_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_text_resume($scope0_id, "b", value)} ${_text_resume($scope0_id, "c", typeof value, 2)}</span>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
