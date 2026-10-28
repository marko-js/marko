// tags/hidden-note.marko
var hidden_note_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<t hidden><b>${_text_resume($scope0_id, "b", input.text, $wg__input_text)}</b></t>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	hidden_note_default({ text: input.label });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</p>`);
			_html(`<t hidden><b>${_text_resume($scope1_id, "c", input.label, $wg__input_label)}</b> <i>range</i></t>`);
			_html("<div>");
			_html(`<t hidden><em>${_text_resume($scope1_id, "g", input.label, $wg__input_label)}</em></t>`);
			_html("</div>");
			_html("<t hidden><s>single</s></t>");
			_set_scope_reason($wg__input_label << 1);
			const $childScope2 = _peek_scope_id();
			hidden_note_default({ text: input.label });
			$wi__input_label__OR__input_show && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				j: $wi__input_label && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.label,
		a: $wi__input_label && _existing_scope($childScope)
	});
}, 1);
