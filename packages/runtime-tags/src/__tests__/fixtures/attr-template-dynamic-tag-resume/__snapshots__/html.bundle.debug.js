// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.value, $wg__input_value)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrapper.marko
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type__OR__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.type, { value: input.value }, 0, 0, $wg__input_type__OR__input_value);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_type: _write_if($scope0_reason, 2) && input.type,
		input_value: _write_if($scope0_reason, 1) && input.value
	}, "__tests__/tags/wrapper.marko", 0, {
		input_type: ["input.type"],
		input_value: ["input.value"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	wrapper_default({
		type: child_default,
		value: count
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
