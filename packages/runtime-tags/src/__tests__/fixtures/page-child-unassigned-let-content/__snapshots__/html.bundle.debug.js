// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", c, {}, 0, 0, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", input.label, $wg__input_label)}</p></section>`);
	$wi__input_label && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	card_default({
		label: input.label,
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
