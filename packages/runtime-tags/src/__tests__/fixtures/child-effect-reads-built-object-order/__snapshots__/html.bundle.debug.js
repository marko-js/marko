// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/child.marko_0_input_value#2", 0);
	_scope($scope0_id, { input_value: input.value }, "__tests__/tags/child.marko", 0, { input_value: ["input.value"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const a = { y: input.y };
	const b = { x: input.x };
	const c = {
		a,
		b
	};
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.x, $wg__input_x)}</p>`);
	const $childScope = _peek_scope_id();
	child_default({ value: c });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		a: _write_if($scope0_reason, 1) && a,
		b: _write_if($scope0_reason, 2) && b,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		a: "2:8",
		b: "3:8"
	});
}, 1);
