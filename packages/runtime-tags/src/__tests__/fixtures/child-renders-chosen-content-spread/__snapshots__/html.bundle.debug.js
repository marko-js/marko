// tags/grand.marko
var grand_default = _template("__tests__/tags/grand.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.renderer, { label: input.label }, 0, 0, $wg__input_renderer__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_renderer: _write_if($scope0_reason, 2) && input.renderer,
		input_label: _write_if($scope0_reason, 1) && input.label
	}, "__tests__/tags/grand.marko", 0, {
		input_renderer: ["input.renderer"],
		input_label: ["input.label"]
	});
});

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	grand_default(input);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0);
		_html(`<em>${_text_mark($scope1_id, "#text/0", label, $wg__label)}</em>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label2 = _write_guard($scope2_reason, 0);
		_html(`<b>${_text_mark($scope2_id, "#text/0", label, $wg__label2)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 1) << 3 | _write_guard($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		A: $wi__input_a && A,
		B: $wi__input_a && B,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		A: "1:9",
		B: "4:9"
	});
}, 1);
