// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_content = _write_if($scope0_reason, 2), $wg__input_rows = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (r) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({ content: input.content });
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			_: $wi__input_content && _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_content && _existing_scope($childScope)
		}, "__tests__/tags/outer.marko", "1:2");
	}, "id", $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_rows);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/outer.marko", 0, { input_content: ["input.content"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_rows = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason($wg__input_rows << 1 | $wg__input_rows << 3);
	const $childScope = _peek_scope_id();
	outer_default({
		rows: input.rows,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
			$wi__input_rows__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_rows__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_rows && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"#childScope/0": $wi__input_rows && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
