// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let T = input.fmt;
	_await($scope0_id, "#text/0", Promise.resolve(input.label), (v) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", T, { label: v }, 0, 0, $wg__input_label);
		$wi__input_label && _scope($scope1_id, {}, "__tests__/tags/outer.marko", "2:2");
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $wg__input_label);
	$wi__input_label && _scope($scope0_id, { T }, "__tests__/tags/outer.marko", 0, { T: "1:6" });
	$wi__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	outer_default({
		fmt: card_default,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
