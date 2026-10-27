// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let d = input.x;
	_html(`<div>${_text_resume($scope0_id, "a", d === void 0 ? "none" : d, $wg__input_x)}</div>`);
	$wi__input_x && _scope($scope0_id, {});
	$wg__input_x || $wi__input_x && _resume_branch($scope0_id);
}, 1);
