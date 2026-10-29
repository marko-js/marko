// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<p>${_text_resume($scope0_id, "a", [input.label].map((v) => f(v)).join(";"), $wg__input_label)}</p>`);
	$wi__input_label && _scope($scope0_id, { f });
	$wg__input_label || $wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const fn = _resume((v) => "f-" + v, "a0");
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: fn,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
