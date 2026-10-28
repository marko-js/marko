// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	_scope($scope0_id, { c: input.value });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_resume($scope0_id, "a", input.x, $wg__input_x)}</p>`);
	const $childScope = _peek_scope_id();
	child_default({ value: c });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && a,
		h: _write_if($scope0_reason, 2) && b,
		b: _existing_scope($childScope)
	});
}, 1);
