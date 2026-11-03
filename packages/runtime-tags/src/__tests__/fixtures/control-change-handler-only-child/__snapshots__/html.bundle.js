// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "a", input.label, _write_guard($scope0_reason, 0))}</p><input${_attr_input_value($scope0_id, "b", void 0, _resume(function(v) {
		count += v.length;
	}, "b0", $scope0_id))}>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", count)}</span>`);
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: count });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	child_default({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
