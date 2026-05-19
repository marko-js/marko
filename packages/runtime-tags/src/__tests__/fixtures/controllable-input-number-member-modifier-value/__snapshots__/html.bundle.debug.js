// tags/custom-input.marko
var custom_input_default = _template("__tests__/tags/custom-input.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<input${_attr_input_value($scope0_id, "#input/0", input.value, input.valueChange && _resume(($next) => {
		input.valueChange(parseInt($next));
	}, "__tests__/tags/custom-input.marko_0/valueChange", $scope0_id))} type=number>${_el_resume($scope0_id, "#input/0", _serialize_guard($scope0_reason, 0))}`);
	_script($scope0_id, "__tests__/tags/custom-input.marko_0");
	writeScope($scope0_id, {
		input_value: _serialize_if($scope0_reason, 1) && input.value,
		input_valueChange: input.valueChange
	}, "__tests__/tags/custom-input.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $childScope = _peek_scope_id();
	_set_serialize_reason({ 0: 1 });
	custom_input_default({
		value,
		valueChange: _resume((_new_value) => {
			value = _new_value;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "#text/1")} <!>${_escape(typeof value)}${_el_resume($scope0_id, "#text/2")}</span>`);
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
