// tags/hidden-note.marko
var hidden_note_default = _template("__tests__/tags/hidden-note.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<t hidden><b>${_text_resume($scope0_id, "#text/1", input.text, $wg__input_text)}</b></t>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/hidden-note.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	hidden_note_default({ text: input.label });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</p>`);
			_html(`<t hidden><b>${_text_resume($scope1_id, "#text/2", input.label, $wg__input_label)}</b> <i>range</i></t>`);
			_html("<div>");
			_html(`<t hidden><em>${_text_resume($scope1_id, "#text/6", input.label, $wg__input_label)}</em></t>`);
			_html("</div>");
			_html("<t hidden><s>single</s></t>");
			_set_scope_reason($wg__input_label << 1);
			const $childScope2 = _peek_scope_id();
			hidden_note_default({ text: input.label });
			$wi__input_label__OR__input_show && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/9": $wi__input_label && _existing_scope($childScope2)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 2) && input.label,
		"#childScope/0": $wi__input_label && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
