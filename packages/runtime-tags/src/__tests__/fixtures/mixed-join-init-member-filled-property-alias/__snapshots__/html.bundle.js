// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 6), $wi__input_b = _write_if($scope0_reason, 6), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 2), $wi__input_show__OR__input_a__OR__input_b = _write_if($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $b__closures = /* @__PURE__ */ new Set();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", input.b, $wg__input_b)}</em>`);
					$wi__input_show__OR__input_b && _subscribe($wi__input_b && $b__closures, _scope($scope3_id, {
						_: _scope_with_id($scope1_id),
						Ci: $wi__input_b && 1
					}), "b0", $wg__input_b);
					return 0;
				}
			}, $scope1_id, "a", $wg__input_show, $wg__input_show, $wg__input_show, "</div>", 1);
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", input.a + ":" + input.b, $wg__input_a__OR__input_b)}</i>`);
					$wi__input_show__OR__input_a__OR__input_b && _subscribe($wi__input_b && $b__closures, _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_a__OR__input_b), "b2", $wg__input_a__OR__input_b);
					return 0;
				}
			}, $scope1_id, "b", $wg__input_show, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_show__OR__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_a__OR__input_b && _scope($scope0_id, {
		e: $wi__input_show__OR__input_b && input.a,
		f: _write_if($scope0_reason, 0) && input.b,
		i: $wi__input_b && $b__closures,
		h: $wi__input_a && $input_a__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
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
	_if(() => {}, $scope0_id, "b");
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);
