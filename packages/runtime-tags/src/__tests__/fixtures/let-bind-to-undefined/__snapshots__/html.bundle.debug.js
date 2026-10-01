// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value__OR__input_valueChange = _write_guard($scope0_reason, 0), $wi__input_value__OR__input_valueChange = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let local = input.value;
	_html(`<div>${_text_resume($scope0_id, "#text/0", local == null ? "none" : local, $wg__input_value__OR__input_valueChange)}</div>`);
	$wi__input_value__OR__input_valueChange && _scope($scope0_id, {
		input_value: _write_if($scope0_reason, 2) && input.value,
		input_valueChange: _write_if($scope0_reason, 1) && input.valueChange
	}, "__tests__/tags/child.marko", 0, {
		input_value: ["input.value"],
		input_valueChange: ["input.valueChange"]
	});
	$wg__input_value__OR__input_valueChange || $wi__input_value__OR__input_valueChange && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		value: count,
		valueChange: _resume((_new_count) => {
			count = _new_count;
		}, "__tests__/template.marko_0/valueChange", $scope0_id)
	});
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
