// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_from__OR__input_to__OR__input_step = _serialize_guard($scope0_reason, 3), $si__input_from__OR__input_to__OR__input_step = _serialize_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_to(input.to, input.from, input.step, (n) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(n)}, `);
		$si__input_from__OR__input_to__OR__input_step && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_from__OR__input_to__OR__input_step, $sg__input_from__OR__input_to__OR__input_step, $sg__input_from__OR__input_to__OR__input_step, "</div>", 0, 1);
	$si__input_from__OR__input_to__OR__input_step && writeScope($scope0_id, {
		d: _serialize_if($scope0_reason, 2) && input.from,
		e: _serialize_if($scope0_reason, 1) && input.to,
		f: _serialize_if($scope0_reason, 0) && input.step
	});
}, 1);
