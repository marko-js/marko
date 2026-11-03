// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wg__input_b = _write_guard($scope0_reason, 2), $wi__input_b = _write_if($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 1), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $input_a__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope4_id = _scope_id();
			_html(`<p>${_text_resume($scope4_id, "#text/0", a, $wg__input_a)}</p>`);
			$wi__input_a && _scope($scope4_id, {}, "__tests__/template.marko", "3:6");
		}, $wg__input_a);
		_try($scope1_id, "#text/1", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.b, (b) => {
				const $scope6_id = _scope_id();
				_html(`<span>${_text_resume($scope6_id, "#text/0", b, $wg__input_b)}</span>`);
				$wi__input_b && _scope($scope6_id, {}, "__tests__/template.marko", "7:8");
			}, $wg__input_b);
			$wi__input_b && _subscribe($input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_2_input_b#0:4/subscribe", 0);
			$wi__input_b && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("<i>inner</i>");
		}, void 0, "__tests__/template.marko_5*content");
		$wi__input_a__OR__input_b && _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_1_input_a#0:3/subscribe", 0);
		$wi__input_a__OR__input_b && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("<i>outer</i>");
	}, void 0, "__tests__/template.marko_3*content");
	_html("</main>");
	$wi__input_a__OR__input_b && _scope($scope0_id, {
		"ClosureScopes:input_b/6": $wi__input_b && $input_b__closures,
		"ClosureScopes:input_a/5": $wi__input_a && $input_a__closures
	}, "__tests__/template.marko", 0);
}, 1);
