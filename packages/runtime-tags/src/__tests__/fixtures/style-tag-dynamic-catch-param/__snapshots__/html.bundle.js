// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				_scope_id();
				_html(_escape((() => {
					throw new Error("red");
				})()));
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`${_style_html(`--M_a0:${_escape_style_value(err.message)};`)}${_el_resume($scope3_id, "a", $wg__err_message)}<div class=caught></div>`);
				_write_if($scope3_reason, 0) && _scope($scope3_id, {});
			}, void 0, "a1");
			$wi__input_show && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {});
}, 1);
