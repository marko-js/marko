// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b__OR__input_bChange = _write_guard($scope0_reason, 0), $wi__input_b__OR__input_bChange = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 7), $wg__input_b__OR__input_bChange__OR__input_a = _write_guard($scope0_reason, 3), $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a = _write_if($scope0_reason, 4), $wi__input_b__OR__input_bChange__OR__input_show = _write_if($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const $b__closures = new Set();
	const $input_a__closures = new Set();
	let b = input.b;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "#text/0", b, $wg__input_b__OR__input_bChange)}</em>`);
					$wi__input_b__OR__input_bChange__OR__input_show && _subscribe($wi__input_b__OR__input_bChange && $b__closures, _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						"ClosureSignalIndex:b/12": $wi__input_b__OR__input_bChange && 1
					}, "__tests__/tags/panel.marko", "4:6"), "__tests__/tags/panel.marko_3_b#0:8/subscribe", $wg__input_b__OR__input_bChange);
					return 0;
				}
			}, $scope1_id, "#div/0", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "#text/0", input.a + ":" + b, $wg__input_b__OR__input_bChange__OR__input_a)}</i>`);
					$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _subscribe($wi__input_b__OR__input_bChange && $b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/panel.marko", "9:6"), "__tests__/tags/panel.marko_2_input_a#0:7/subscribe", $wg__input_b__OR__input_bChange__OR__input_a), "__tests__/tags/panel.marko_2_b#0:8/subscribe", $wg__input_b__OR__input_bChange__OR__input_a);
					return 0;
				}
			}, $scope1_id, "#span/1", $wg__input_show, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope0_id, {
		input_b: _write_if($scope0_reason, 6) && input.b,
		input_bChange: _write_if($scope0_reason, 5) && input.bChange,
		input_a: $wi__input_b__OR__input_bChange__OR__input_show && input.a,
		b: _write_if($scope0_reason, 1) && b,
		"ClosureScopes:b/12": $wi__input_b__OR__input_bChange && $b__closures,
		"ClosureScopes:input_a/11": $wi__input_a && $input_a__closures
	}, "__tests__/tags/panel.marko", 0, {
		input_b: ["input.b"],
		input_bChange: ["input.bChange"],
		input_a: ["input.a"],
		b: "1:6"
	});
	$wg__input_show || $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(131720 | ($wg__input_x << 1 | _write_guard($scope0_reason, 0) << 5 | $wg__input_x << 11 | _write_guard($scope0_reason, 2) << 15));
	const $childScope = _peek_scope_id();
	panel_default({
		bChange: _resume(function() {}, "__tests__/template.marko_0/bChange"),
		a: count,
		b: input.x,
		show: input.show
	});
	_if(() => {
		if (count > 5) {
			const $scope1_id = _scope_id();
			_set_scope_reason(131720);
			const $childScope2 = _peek_scope_id();
			panel_default({
				bChange: _resume(function() {}, "__tests__/template.marko_1/bChange2"),
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
