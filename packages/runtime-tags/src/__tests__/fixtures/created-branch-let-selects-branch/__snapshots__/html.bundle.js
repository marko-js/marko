// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_show__OR__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			if (input.open) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", input.label, $wg__input_label)}</span>`);
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_label);
			}
			_write_if($scope0_reason, 2) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		e: $wi__input_show && input.open,
		f: $wi__input_show && input.label,
		h: $wi__input_label && $input_label__closures
	});
}, 1);
