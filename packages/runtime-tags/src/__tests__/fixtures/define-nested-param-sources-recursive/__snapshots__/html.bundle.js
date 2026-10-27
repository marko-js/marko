// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Outer = { content: _content("a3", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__x = _write_guard($scope1_reason, 1), $wi__x = _write_if($scope1_reason, 1), $wg__y = _write_guard($scope1_reason, 2), $wi__y = _write_if($scope1_reason, 2), $wi__x__OR__y = _write_if($scope1_reason, 0);
		const Inner = { content: _content("a0", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason(), $wg__z = _write_guard($scope2_reason, 0);
			_html(`<p>${_text_resume($scope2_id, "a", input.label + x + z, $wg__input_label || $wg__x || $wg__z)}</p>`);
			_subscribe($wi__x && $Outer_content__x__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
				d: ($wi__input_label || $wi__x) && z,
				_: _scope_with_id($scope1_id)
			}), "a1", $wg__input_label || $wg__x || $wg__z), "a2", $wg__input_label || $wg__x || $wg__z);
			$wg__input_label || $wg__x || $wg__z || _resume_branch($scope2_id);
		}, $scope1_id) };
		_set_scope_reason($wg__y << 1);
		const $childScope = _peek_scope_id();
		Inner.content({ z: y });
		($wi__input_label || $wi__x__OR__y) && _scope($scope1_id, {
			d: ($wi__input_label || $wi__y) && x,
			_: ($wi__input_label || $wi__x__OR__y) && _scope_with_id($scope0_id),
			i: $wi__x && $Outer_content__x__closures,
			a: $wi__y && _existing_scope($childScope)
		});
	}, $scope0_id) };
	const Wrapper = { content: _content("a4", ({ a, b, depth }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__a__OR__b = _write_guard($scope3_reason, 0), $wg__b = _write_guard($scope3_reason, 3), $wg__a = _write_guard($scope3_reason, 2), $wg__a__OR__b__OR__depth = _write_guard($scope3_reason, 1), $wg__depth = _write_guard($scope3_reason, 4), $wi__depth = _write_if($scope3_reason, 4), $wi__a__OR__b__OR__depth = _write_if($scope3_reason, 1);
		_set_scope_reason($wg__a__OR__b << 1 | $wg__a << 3 | $wg__b << 5);
		const $childScope2 = _peek_scope_id();
		Outer.content({
			x: a,
			y: b
		});
		_if(() => {
			if (depth) {
				const $scope4_id = _scope_id();
				_set_scope_reason($wg__a__OR__b << 1 | $wg__a__OR__b__OR__depth << 3 | $wg__b << 5 | $wg__a << 7 | $wg__depth << 9);
				const $childScope3 = _peek_scope_id();
				Wrapper.content({
					a: b,
					b: a,
					depth: depth - 1
				});
				$wi__a__OR__b__OR__depth && _scope($scope4_id, {
					_: _scope_with_id($scope3_id),
					a: _existing_scope($childScope3)
				});
				return 0;
			}
		}, $scope3_id, "b", $wg__a__OR__b__OR__depth, $wg__depth);
		$wi__a__OR__b__OR__depth && _scope($scope3_id, {
			e: $wi__depth && a,
			f: $wi__depth && b,
			_: $wi__depth && _scope_with_id($scope0_id),
			a: _write_if($scope3_reason, 0) && _existing_scope($childScope2)
		});
	}, $scope0_id) };
	_set_scope_reason(138 | _write_guard($scope0_reason, 1) << 5);
	const $childScope4 = _peek_scope_id();
	Wrapper.content({
		a: input.a,
		b: n,
		depth: 2
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		e: input.label,
		g: n,
		h: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope4)
	});
}, 1);
