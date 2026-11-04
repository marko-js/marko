// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_a__OR__input_b = _write_if($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_a = _write_if($scope0_reason, 5), $wi__input_b = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", input.a + ":" + JSON.stringify(input.b), $wg__input_a__OR__input_b)}</i>`);
					$wi__input_show__OR__input_a__OR__input_b && _subscribe($wi__input_b && $input_b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "3:6"), "__tests__/tags/panel.marko_2_input_a#0:4/subscribe", $wg__input_a__OR__input_b), "__tests__/tags/panel.marko_2_input_b#0:5/subscribe", $wg__input_a__OR__input_b);
					$wg__input_a__OR__input_b || $wi__input_show__OR__input_a__OR__input_b && (_write_guard($scope0_reason, 5) || _write_guard($scope0_reason, 6)) && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "#span/0", $wg__input_show, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_show__OR__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show, 0, 0, 1);
	$wi__input_show__OR__input_a__OR__input_b && _scope($scope0_id, {
		input_a: _write_if($scope0_reason, 1) && input.a,
		input_b: _write_if($scope0_reason, 0) && input.b,
		"ClosureScopes:input_a/7": $wi__input_a && $input_a__closures,
		"ClosureScopes:input_b/8": $wi__input_b && $input_b__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(2210 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 2) << 9 | _write_guard($scope0_reason, 1) << 13));
	const $childScope = _peek_scope_id();
	panel_default({
		a: count,
		b: { value: input.x },
		show: input.show
	});
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
