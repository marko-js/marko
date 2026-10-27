// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_t = _write_guard($scope0_reason, 2), $wi__input_t = _write_if($scope0_reason, 2), $wg__input_n__OR__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_t__closures = new Set();
	const A = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("a");
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("b");
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_1*content", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2), $wg__n = _write_guard($scope1_reason, 1), $wi__n__OR__content = _write_if($scope1_reason, 0);
		_html(`<span>${_text_resume($scope1_id, "#text/0", n, $wg__n)}</span>`);
		_dynamic_tag($scope1_id, "#text/1", content, { title: input.t }, 0, 0, $wg__input_t || $wg__content);
		($wi__input_t || $wi__n__OR__content) && _subscribe($wi__input_t && $input_t__closures, _scope($scope1_id, {
			content: $wi__input_t && content,
			_: ($wi__input_t || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { content: "3:19" }), "__tests__/template.marko_1_input_t#0:3/subscribe", $wg__input_t || $wg__content || $wg__n);
		$wg__input_t || $wg__content || $wg__n || ($wi__input_t || $wi__n__OR__content) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_n__OR__input_x << 1 | _write_guard($scope0_reason, 3) << 3 | _write_guard($scope0_reason, 4) << 5);
	const $childScope = _peek_scope_id();
	Wrap.content({
		n: input.n,
		content: input.x === 1 ? A : B
	});
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_t: $wi__input_x && input.t,
		A: $wi__input_x && A,
		B: $wi__input_x && B,
		"ClosureScopes:input_t/9": $wi__input_t && $input_t__closures,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_t: ["input.t"],
		A: "1:9",
		B: "2:9"
	});
}, 1);
