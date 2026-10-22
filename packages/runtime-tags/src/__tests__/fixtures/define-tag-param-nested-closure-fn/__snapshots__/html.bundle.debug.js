// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $wg__input_x = _write_guard($scope0_reason, 2), $wi__input_x = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	const $input_a__closures = new Set();
	const f = _resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	const E = { content: _content("__tests__/template.marko_2*content", ({ show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__show = _write_guard($scope2_reason, 0), $wi__show = _write_if($scope2_reason, 0);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "#text/0", f(), $wg__input_a)}</span>`);
				($wi__input_a || $wi__show) && _subscribe($wi__input_a && $f2__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_3_f#0:6/subscribe", $wg__input_a);
				return 0;
			}
		}, $scope2_id, "#text/0", $wg__show, $wg__show, 0, 0, 1);
		($wi__input_a || $wi__show) && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_set_scope_reason($wg__on << 1);
		const $childScope = _peek_scope_id();
		E.content({ show: on });
		_html(`<p>${_text_resume($scope1_id, "#text/1", input.a, $wg__input_a)}</p>`);
		($wi__input_a || $wi__on) && _subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, {
			_: $wi__input_a && _scope_with_id($scope0_id),
			"#childScope/0": $wi__on && _existing_scope($childScope)
		}, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_input_a#0:4/subscribe", $wg__input_a || $wg__on);
		$wg__input_a || $wg__on || ($wi__input_a || $wi__on) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_x << 1);
	const $childScope2 = _peek_scope_id();
	D.content({ on: input.x });
	counter_default({});
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_a: $wi__input_x && input.a,
		f: $wi__input_x && f,
		"ClosureScopes:f/8": $wi__input_a && $f2__closures,
		"ClosureScopes:input_a/7": $wi__input_a && $input_a__closures,
		"#childScope/0": $wi__input_x && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	});
}, 1);
