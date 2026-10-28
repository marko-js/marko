// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_html(`<p>yes ${_text_resume($scope1_id, "a", x, $wg__input_v * 2)}</p>`);
			$wi__input_v && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_v, $wg__input_v, 0, 0, 1);
	$wi__input_v && _scope($scope0_id, {});
	$wg__input_v || $wi__input_v && _resume_branch($scope0_id);
}, 1);
