// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_from__OR__input_to__OR__input_step = _serialize_guard($scope0_reason, 3), $si__input_from__OR__input_to__OR__input_step = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_to(input.to, input.from, input.step, (n) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(n)}, `);
		$si__input_from__OR__input_to__OR__input_step && writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#div/0", $sg__input_from__OR__input_to__OR__input_step, $sg__input_from__OR__input_to__OR__input_step, $sg__input_from__OR__input_to__OR__input_step, "</div>", 0, 1);
	$si__input_from__OR__input_to__OR__input_step && writeScope($scope0_id, {
		input_from: _serialize_if($scope0_reason, 2) && input.from,
		input_to: _serialize_if($scope0_reason, 1) && input.to,
		input_step: _serialize_if($scope0_reason, 0) && input.step
	}, "__tests__/template.marko", 0, {
		input_from: ["input.from"],
		input_to: ["input.to"],
		input_step: ["input.step"]
	});
}, 1);
