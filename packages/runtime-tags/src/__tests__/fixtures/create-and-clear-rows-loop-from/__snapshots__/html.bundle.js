// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_from__OR__input_to__OR__input_step = _write_guard($scope0_reason, 3), $wi__input_from__OR__input_to__OR__input_step = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<div>");
	_for_to(input.to, input.from, input.step, (n) => {
		const $scope1_id = _scope_id();
		_html(`${_escape(n)}, `);
		$wi__input_from__OR__input_to__OR__input_step && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_from__OR__input_to__OR__input_step, $wg__input_from__OR__input_to__OR__input_step, $wg__input_from__OR__input_to__OR__input_step, "</div>");
	$wi__input_from__OR__input_to__OR__input_step && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.from,
		e: _write_if($scope0_reason, 1) && input.to,
		f: _write_if($scope0_reason, 0) && input.step
	});
}, 1);
