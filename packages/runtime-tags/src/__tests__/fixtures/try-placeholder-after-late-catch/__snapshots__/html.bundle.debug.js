// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 2), $wg__input_c = _write_guard($scope0_reason, 3), $wg__input_d = _write_guard($scope0_reason, 4), $wi__input_d = _write_if($scope0_reason, 4), $wi__input_c = _write_if($scope0_reason, 3), $wi__input_c__OR__input_d = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_d__closures = new Set();
	const $input_c__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (v) => {
			const $scope5_id = _scope_id();
			_html(`<b>${_text_resume($scope5_id, "#text/0", v, $wg__input_a)}</b>`);
			$wi__input_a && _scope($scope5_id, {}, "__tests__/template.marko", "3:6");
		}, $wg__input_a);
		$wi__input_a && _subscribe($input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_1_input_a#0:4/subscribe", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope4_reason = _scope_reason(), $wg__err_message = _write_guard($scope4_reason, 0);
		const $scope4_id = _scope_id();
		_html(`<em>${_text_resume($scope4_id, "#text/0", err.message, $wg__err_message)}</em>`);
		_write_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "6:6");
	}, void 0, "__tests__/template.marko_4*content");
	_await($scope0_id, "#text/1", input.x, (x) => {
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.c, (c) => {
			const $scope6_id = _scope_id();
			_html(`<p>${_text_resume($scope6_id, "#text/0", c, $wg__input_c)}</p>`);
			$wi__input_c && _scope($scope6_id, {}, "__tests__/template.marko", "11:6");
		}, $wg__input_c);
		_try($scope2_id, "#text/1", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", input.d, (d) => {
				const $scope8_id = _scope_id();
				_html(`<span>${_text_resume($scope8_id, "#text/0", d, $wg__input_d)}</span>`);
				$wi__input_d && _scope($scope8_id, {}, "__tests__/template.marko", "15:8");
			}, $wg__input_d);
			$wi__input_d && _subscribe($input_d__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "14:6"), "__tests__/template.marko_3_input_d#0:7/subscribe", 0);
			$wi__input_d && _resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_html("<i>loading</i>");
		}, void 0, "__tests__/template.marko_7*content");
		$wi__input_c__OR__input_d && _subscribe($wi__input_c && $input_c__closures, _scope($scope2_id, {}, "__tests__/template.marko", "10:4"), "__tests__/template.marko_2_input_c#0:6/subscribe", 0);
		$wi__input_c__OR__input_d && _resume_branch($scope2_id);
	}, _write_guard($scope0_reason, 0));
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		"ClosureScopes:input_a/8": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_d/10": $wi__input_d && $input_d__closures,
		"ClosureScopes:input_c/9": $wi__input_c && $input_c__closures
	}, "__tests__/template.marko", 0);
}, 1);
