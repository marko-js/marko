// tags/field.marko
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id__OR__input_describedby = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 2), $wg__input_label = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html(`<input${_attr("id", input.id)}${_attr("aria-describedby", input.describedby)}>${_el_mark($scope0_id, "#input/0", $wg__input_id__OR__input_describedby)}<label${_attr("for", input.id)}>${_text_mark($scope0_id, "#text/2", input.label, $wg__input_label)}</label>${_el_mark($scope0_id, "#label/1", $wg__input_id)}`);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id();
		const hint = _id();
		_set_scope_reason($wg__input_label << 3 | $wg__input_label << 7);
		const $childScope = _peek_scope_id();
		field_default({
			id: uid,
			describedby: `${uid} ${hint}`,
			label: input.label
		});
		_html(`<p${_attr("id", hint)}>hint</p>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", 0);
		$wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/4": $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
