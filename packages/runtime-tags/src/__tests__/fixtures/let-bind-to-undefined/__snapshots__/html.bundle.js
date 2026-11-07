// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value__OR__input_valueChange = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let local = input.value;
	_html(`<div>${_text_mark($scope0_id, "a", local == null ? "none" : local, $wg__input_value__OR__input_valueChange)}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.value,
		e: _write_if($scope0_reason, 1) && input.valueChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 3;
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	child_default({
		value: count,
		valueChange: _resume((_new_count) => count = _new_count, "a0", $scope0_id)
	});
	_html(`<button>clear</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
