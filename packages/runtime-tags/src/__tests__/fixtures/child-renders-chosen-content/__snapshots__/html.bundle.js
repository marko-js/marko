// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.renderer, { label: input.label }, 0, 0, $wg__input_renderer__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.renderer,
		e: _write_if($scope0_reason, 1) && input.label
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_html(`<em>${_text_mark($scope1_id, "a", label, $wg__label)}</em>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	const B = { content: _content_resume("a1", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label2 = _write_guard($scope2_reason, 0);
		_html(`<b>${_text_mark($scope2_id, "a", label, $wg__label2)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: $wi__input_a && A,
		g: $wi__input_a && B,
		a: _existing_scope($childScope)
	});
}, 1);
