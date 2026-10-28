// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v__OR__input_w = _write_guard($scope0_reason, 0), $wi__input_v__OR__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_html(`<p>${_text_resume($scope0_id, "a", x + input.w, $wg__input_v__OR__input_w)}</p>`);
	$wi__input_v__OR__input_w && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.w,
		f: _write_if($scope0_reason, 2) && x
	});
	$wg__input_v__OR__input_w || $wi__input_v__OR__input_w && _resume_branch($scope0_id);
}, 1);
