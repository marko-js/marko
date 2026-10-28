// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 2), $wi__input_value = _write_if($scope0_reason, 2), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.value, (value) => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_resume($scope4_id, "#text/0", value, $wg__input_value)}</p>`);
					$wi__input_value && _scope($scope4_id, {}, "__tests__/template.marko", "4:8");
				}, $wg__input_value);
				$wi__input_show__OR__input_value && _subscribe($wi__input_value && $input_value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"), "__tests__/template.marko_2_input_value#0:4/subscribe", 0);
				$wi__input_show__OR__input_value && _resume_branch($scope2_id);
			}, void 0, () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_html("Unavailable");
			}, void 0, "__tests__/template.marko_3*content");
			$wi__input_show__OR__input_value && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", $wg__input_show, $wg__input_show, $wg__input_show, "</main>");
	$wi__input_show__OR__input_value && _scope($scope0_id, {
		input_value: _write_if($scope0_reason, 1) && input.value,
		"ClosureScopes:input_value/5": $wi__input_value && $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1);
