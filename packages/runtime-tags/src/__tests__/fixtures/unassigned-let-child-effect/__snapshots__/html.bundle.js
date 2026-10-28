// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.v, $wg__input_v)}${_text_resume($scope0_id, "b", input.w, $wg__input_w * 2)}</p>`);
	_script($scope0_id, "b0", $wg__input_v || $wg__input_w);
	_scope($scope0_id, { e: input.v });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason($wg__input_w << 3);
	const $childScope = _peek_scope_id();
	child_default({
		v: x,
		w: input.w
	});
	$wi__input_w && _scope($scope0_id, { a: _existing_scope($childScope) });
	$wg__input_w || $wi__input_w && _resume_branch($scope0_id);
}, 1);
