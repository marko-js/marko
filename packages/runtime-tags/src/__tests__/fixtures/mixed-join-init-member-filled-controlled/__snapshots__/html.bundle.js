// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b__OR__input_bChange = _write_guard($scope0_reason, 0), $wi__input_b__OR__input_bChange = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 7), $wg__input_b__OR__input_bChange__OR__input_a = _write_guard($scope0_reason, 3), $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a = _write_if($scope0_reason, 4), $wi__input_b__OR__input_bChange__OR__input_show = _write_if($scope0_reason, 2), $wi__input_a = _write_if($scope0_reason, 8);
	const $scope0_id = _scope_id();
	const $b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	let b = input.b;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", b, $wg__input_b__OR__input_bChange)}</em>`);
					$wi__input_b__OR__input_bChange__OR__input_show && _subscribe($wi__input_b__OR__input_bChange && $b__closures, _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						Cm: $wi__input_b__OR__input_bChange && 1
					}), "b0", $wg__input_b__OR__input_bChange);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", input.a + ":" + b, $wg__input_b__OR__input_bChange__OR__input_a)}</i>`);
					$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _subscribe($wi__input_b__OR__input_bChange && $b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_b__OR__input_bChange__OR__input_a), "b2", $wg__input_b__OR__input_bChange__OR__input_a);
					return 0;
				}
			}, $scope1_id, "b", $wg__input_show, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _scope($scope0_id, {
		d: _write_if($scope0_reason, 6) && input.b,
		e: _write_if($scope0_reason, 5) && input.bChange,
		h: $wi__input_b__OR__input_bChange__OR__input_show && input.a,
		i: _write_if($scope0_reason, 1) && b,
		m: $wi__input_b__OR__input_bChange && $b__closures,
		l: $wi__input_a && $input_a__closures
	});
	$wg__input_show || $wi__input_b__OR__input_bChange__OR__input_show__OR__input_a && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(131720 | ($wg__input_x << 1 | _write_guard($scope0_reason, 0) << 5 | $wg__input_x << 11 | _write_guard($scope0_reason, 2) << 15));
	const $childScope = _peek_scope_id();
	panel_default({
		bChange: _resume(function() {}, "a0"),
		a: count,
		b: input.x,
		show: input.show
	});
	_if(() => {}, $scope0_id, "b");
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);
