// tags/custom-input.marko
var custom_input_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "a", input.value, input.valueChange && _resume(($next) => {
		input.valueChange(parseInt($next));
	}, "b0", $scope0_id))} type=number>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 1) && input.value,
		e: input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 0: 1 });
	custom_input_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "a0", $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "b")} <!>${_escape(typeof value)}${_el_resume($scope0_id, "c")}</span>`);
	writeScope($scope0_id, { a: _existing_scope($childScope) });
	_resume_branch($scope0_id);
}, 1);
