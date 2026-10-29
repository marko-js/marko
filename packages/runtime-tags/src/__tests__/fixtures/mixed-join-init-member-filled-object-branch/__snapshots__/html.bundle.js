// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 5), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_b__OR__input_a = _write_guard($scope0_reason, 2), $wg__input_show__OR__input_b = _write_guard($scope0_reason, 0), $wi__input_show__OR__input_b__OR__input_a = _write_if($scope0_reason, 3), $wi__input_show__OR__input_b = _write_if($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const b = { value: input.b };
			_html("<div>");
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "a", JSON.stringify(b), $wg__input_b)}</em>`);
					$wi__input_show__OR__input_b && _scope($scope3_id, { _: _write_if($scope0_reason, 5) && _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "a", $wg__input_show__OR__input_b, $wg__input_show, $wg__input_show, "</div>", 1);
			_html("<span>");
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html(`<i>${_text_resume($scope2_id, "a", input.a + ":" + JSON.stringify(b), $wg__input_b__OR__input_a)}</i>`);
					$wi__input_show__OR__input_b__OR__input_a && _subscribe($wi__input_a && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_b__OR__input_a);
					return 0;
				}
			}, $scope1_id, "b", $wg__input_show__OR__input_b, $wg__input_show, $wg__input_show, "</span>", 1);
			$wi__input_show__OR__input_b__OR__input_a && _scope($scope1_id, {
				c: _write_if($scope0_reason, 1) && b,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_show__OR__input_b, $wg__input_show);
	$wi__input_show__OR__input_b__OR__input_a && _scope($scope0_id, {
		e: _write_if($scope0_reason, 4) && input.b,
		f: $wi__input_show__OR__input_b && input.a,
		i: $wi__input_a && $input_a__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(8360 | (_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 9 | _write_guard($scope0_reason, 1) << 11));
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
