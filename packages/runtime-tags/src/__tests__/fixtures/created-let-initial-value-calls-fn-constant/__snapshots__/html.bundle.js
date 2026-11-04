// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 2), $wi__input_w = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = _resume((v) => v, "a0")("a");
			_html(`<p>${_text_mark($scope1_id, "a", y + input.w, $wg__input_w)}</p>`);
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				e: $wi__input_w && y,
				_: $wi__input_w && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.w });
}, 1);
