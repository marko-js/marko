// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const value = input.value;
	_html(`${_text_resume($scope0_id, "a", value, $wg__input_value * 2)} `);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let x = "y";
	child_default({ value: 3 });
	child_default({ value: x });
}, 1);
