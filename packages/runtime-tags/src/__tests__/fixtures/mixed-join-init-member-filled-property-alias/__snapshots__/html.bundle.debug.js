// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 6), $wi__input_b = _write_if($scope0_reason, 6), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_a__OR__input_b = _write_if($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $b__closures = new Set();
	const $input_a__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "#text/0", input.b, $wg__input_b)}</em>`);
					$wi__input_show__OR__input_b && _subscribe($wi__input_b && $b__closures, _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						"ClosureSignalIndex:b/8": $wi__input_b && 1
					}, "__tests__/tags/panel.marko", "5:6"), "__tests__/tags/panel.marko_3_b#0:5/subscribe", $wg__input_b);
					return 0;
				}
			}, $scope1_id, "#div/0", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "#text/0", input.a + ":" + input.b, $wg__input_a__OR__input_b)}</i>`);
					$wi__input_show__OR__input_a__OR__input_b && _subscribe($wi__input_b && $b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "10:6"), "__tests__/tags/panel.marko_2_input_a#0:4/subscribe", $wg__input_a__OR__input_b), "__tests__/tags/panel.marko_2_b#0:5/subscribe", $wg__input_a__OR__input_b);
					return 0;
				}
			}, $scope1_id, "#span/1", $wg__input_show, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_show__OR__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_a__OR__input_b && _scope($scope0_id, {
		input_a: $wi__input_show__OR__input_b && input.a,
		b: _write_if($scope0_reason, 0) && input.b,
		"ClosureScopes:b/8": $wi__input_b && $b__closures,
		"ClosureScopes:input_a/7": $wi__input_a && $input_a__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_a: ["input.a"],
		b: "1:9"
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
		b: input.x,
		show: input.show
	});
	_if(() => {
		if (count > 5) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2210);
			const $childScope2 = _peek_scope_id();
			panel_default({
				a: count,
				b: "z",
				show: true
			});
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
