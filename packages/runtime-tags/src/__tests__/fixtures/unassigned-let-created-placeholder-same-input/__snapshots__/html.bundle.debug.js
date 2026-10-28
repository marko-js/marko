// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 2), $wi__input_p = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_p = _write_if($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_p__closures = new Set();
	const $input_show__closures = new Set();
	let x = input.v;
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", input.p, (r) => {
					const $scope4_id = _scope_id();
					_html(`<b>${_text_resume($scope4_id, "#text/0", r, $wg__input_p)}</b>`);
					$wi__input_p && _scope($scope4_id, {}, "__tests__/template.marko", "4:6");
				}, $wg__input_p);
				$wi__input_show__OR__input_p && _subscribe($wi__input_p && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_p#0:5/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_show, $wg__input_show);
		$wi__input_show__OR__input_p && _subscribe($wi__input_show && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_show#0:4/subscribe", $wg__input_show);
		$wg__input_show || $wi__input_show__OR__input_p && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<i>${_escape(x)}</i>`);
		_scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4");
		_resume_branch($scope3_id);
	}, void 0, "__tests__/template.marko_3*content");
	_scope($scope0_id, {
		input_p: $wi__input_show && input.p,
		x,
		"ClosureScopes:input_p/8": $wi__input_p && $input_p__closures,
		"ClosureScopes:input_show/7": $wi__input_show && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		x: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
