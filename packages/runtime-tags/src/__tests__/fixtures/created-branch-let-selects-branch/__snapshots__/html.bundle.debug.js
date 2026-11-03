// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let open = input.open;
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</span>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
			}
			_write_if($scope0_reason, 2) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_open: $wi__input_show && input.open,
		input_label: $wi__input_show && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_open: ["input.open"],
		input_label: ["input.label"]
	});
}, 1);
