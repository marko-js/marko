// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wg__input_p1__OR__input_p = _write_guard($scope0_reason, 0), $wi__input_p = _write_if($scope0_reason, 2), $wi__input_p1__OR__input_p = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_to(input.p1 ? 5 : input.p2, 2, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "#text/0", input.p2, $wg__input_p * 2));
		$wi__input_p1__OR__input_p && _scope($scope1_id, { _: $wi__input_p && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_p1__OR__input_p, $wg__input_p1__OR__input_p);
	$wi__input_p1__OR__input_p && _scope($scope0_id, {
		input_p1: $wi__input_p && input.p1,
		input_p2: _write_if($scope0_reason, 1) && input.p2
	}, "__tests__/template.marko", 0, {
		input_p1: ["input.p1"],
		input_p2: ["input.p2"]
	});
}, 1);
