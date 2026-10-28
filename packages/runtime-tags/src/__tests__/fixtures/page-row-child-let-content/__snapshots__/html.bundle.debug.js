// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html(`<p>${_text_resume($scope0_id, "#text/2", input.user.name, _write_guard($scope0_reason, 0))}</p></section>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = new Set();
		_set_scope_reason($wg__input_rows << 1);
		const $childScope = _peek_scope_id();
		card_default({
			user: row.user,
			content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", row.id, $wg__input_rows)} ${_text_resume($scope2_id, "#text/1", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_rows__OR__input_label && _subscribe($wi__input_rows && $for_content__row_id__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:26"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_rows || $wg__input_label), "__tests__/template.marko_2_row_id#1:4/subscribe", $wg__input_rows || $wg__input_label);
				$wg__input_rows || $wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		$wi__input_rows__OR__input_label && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_id/6": $wi__input_rows && $for_content__row_id__closures,
			"#childScope/0": $wi__input_rows && _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows, 0, 0, 1);
	$wi__input_rows__OR__input_label && _scope($scope0_id, {
		input_label: $wi__input_rows && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
