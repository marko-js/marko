// tags/show-value.marko
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	const joined = x + input.w;
	_set_scope_reason($wg__input_w << 1);
	const $childScope = _peek_scope_id();
	show_value_default({ value: joined });
	$wi__input_w && _scope($scope0_id, {
		f: x,
		a: _existing_scope($childScope)
	});
	$wg__input_w || $wi__input_w && _resume_branch($scope0_id);
}, 1);
